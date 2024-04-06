import {connect} from "@/dbConfig/dbConfig";


import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/app/helpers/mailer";
import User from "@/models/userModel";



connect();


export async function POST(request){
    try {
        const reqBody = await request.json();
        const userInput = reqBody;
        const email = userInput.emailToSend;

        const user = await User.findOne({email});

        if (user.email = email) {
            // send email to reset password
            await sendEmail({email, emailType: 'RESET', userId: user._id});
        };
        
    
        // response
        return NextResponse.json({
            message: 'User created',
            success: true,
        });

    } catch (error) {
        return NextResponse.json({error: error.message},{statu: 500});
    };
};