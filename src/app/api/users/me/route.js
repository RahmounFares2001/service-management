import { getDataFromToken } from "@/app/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";

import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function get(request) {
    try {
      // get user id
      const userId = await getDataFromToken(request);
      
      // find user , dont select password or '-password, -isAdmin'
      const user = await User.findOne({_id: userId}).select('-password');

      
      return NextResponse({
        message: 'User found',
        data: user,
      });
      
      
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};