import { getDataFromToken } from "@/app/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";

import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request) {
    try {
      // get user id
      const userr = await getDataFromToken(request);
      const userId = userr.id
      
      // find user , dont select password or '-password, -isAdmin'
      const user = await User.findOne({_id: userId});

      
      return NextResponse.json({
        message: 'User found',
        user,
        success: true
      });
      
      
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};