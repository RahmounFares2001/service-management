import {connect} from "@/dbConfig/dbConfig";

import User from "@/models/userModel"

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/app/helpers/mailer";


import Client from "@/models/clientModel";


connect();
 

export async function POST(request){
    try {

        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        console.log('start to send data to mongo');

        // console.log(reqBody);


        // check if user exist
        // const user = await User.find({email})

        // if(user){
        //     return NextResponse.json({error: "User already exists"}, {status: 400})
        // }
        

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashPassword,
        });
       
    

       


        const savedUser = await newUser.save();
        
        // Save the client to the database
        const newClient = new Client({
            user: savedUser._id,
        });
        console.log(newClient);
        const savedClient = await newClient.save();

        // verify email
        sendEmail({email, emailType: 'VERIFY', userId: newUser._id})
        

        return NextResponse.json({
            message: 'User created',
            success: true,
            savedUser
        });

    } catch (error) {
        return NextResponse.json({error: error.message},{statu: 500});
    };
};