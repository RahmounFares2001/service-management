import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import bcryptjs from 'bcryptjs';
import User from "@/models/userModel";


connect();


export async function POST(request) {
    try {
      // get password token from the url 
      const reqBody = await request.json();
      const data = reqBody;
    
      const passwordToken = data.passwordToken;

      
      // new password
      const newPassword = data.newPassword;
      // hash new pass
      const salt = await bcryptjs.genSalt(10);
      const newHashPassword = await bcryptjs.hash(newPassword, salt);
      

      const user = await User.findOneAndUpdate(
        {forgotPasswordToken: passwordToken},
        {password: newHashPassword},
        {new: true});
        



      return NextResponse.json({
        message: 'Old informations sent',
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};