import {connect} from "@/dbConfig/dbConfig";

// client

import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

import jsw from "jsonwebtoken";

import { NextRequest, NextResponse } from "next/server";

import Client from "@/models/clientModel";


connect();


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        
        const user = await User.findOne({email});

        const client = await Client.findOne({userId : user._id});
        console.log(client);

        //check if user exists
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);


        // create token data
        const tokendata = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        //create token
        const token = await jsw.sign(tokendata, process.env.TOKEN_SECRET, {expiresIn: '1h'});
        
        const response = NextResponse.json({
            message: 'login sucess',
            succes: true
        });
        response.cookies.set('token', token, {
            httpOnly: true,
        });


        return response;

    } catch (error) {
        return NextResponse.json({error : error.message}, {status: 500});
    }

}