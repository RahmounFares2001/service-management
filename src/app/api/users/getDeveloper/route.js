import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';

import Project from '@/models/projectModel';
import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import Client from '@/models/clientModel';
import Developer from '@/models/developerModel';
import Review from '@/models/review';
import User from '@/models/userModel';



connect();


let project;

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const data = reqBody;
    project = data.project;
  

    return NextResponse.json({
    message: 'Success',
    success: true
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
}
};



export async function GET(request) {
  try {
      const projectId = project._id;
      const dev = await Developer.findOne({projectId: projectId});
      const userId = dev.userId;

      const user = await User.findOne({_id: userId})
    
      const developer = {
        name: dev.name,
        email: user.email
      };

      return NextResponse.json({
          message: 'login sucess',
          developer,
          succes: true
      });

  } catch (error) {
      return NextResponse.json({error : error.message}, {status: 500});
  }
}