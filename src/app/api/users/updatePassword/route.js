import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import bcryptjs from 'bcryptjs';
import User from "@/models/userModel";

connect();

export async function POST(request) {
    try {
        // get user id
        const userr = await getDataFromToken(request);
        const userId = userr.id;

        // get the user with password
        const user = await User.findOne({_id: userId});
        const userPassword = user.password;

        // // get password from body
        const reqBody = await request.json();
        const pass = reqBody;  
        console.log(pass);

        const salt = await bcryptjs.genSalt(10);
        const newHashedPass = await bcryptjs.hash(pass.newPassword, salt);

        // // compare passwords
        const validPassword = await bcryptjs.compare(pass.oldPassword, userPassword);
        if(validPassword) {
            const user = await User.findOneAndUpdate(
                {_id: userId},
                {password: newHashedPass},
                {new: true});
        }
        else{ console.log('not') };

        return NextResponse.json({
            message: 'Password resset',
            userPassword,
            success: true
        });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};