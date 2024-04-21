import {connect} from "@/dbConfig/dbConfig";

import User from "@/models/userModel"

import bcryptjs from "bcryptjs";

import Developer from "@/models/developerModel";
import { NextResponse } from "next/server";


connect();
 

export async function POST(request){
    try {
        console.log('bdina');
        const reqBody = await request.json();
        const {name, username, email, password} = reqBody;
        console.log('start to send data to mongo');
        
        

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        // create new user
        const newUser = new User({
            username: username,
            email: email,
            password: hashPassword,
            accountType: 'developer',
            isVerfied: true
        });
        const savedUser = await newUser.save();

        const newDeveloper = new Developer({
            name: name
        });
        const savedDeveloper = await newDeveloper.save();
    

        // response
        return NextResponse.json({
            message: 'Developer created',
            success: true,
            savedUser
        });

    } catch (error) {
        return NextResponse.json({error: error.message},{statu: 500});
    };
};