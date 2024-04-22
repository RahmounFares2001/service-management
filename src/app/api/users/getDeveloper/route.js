import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';

import Developer from '@/models/developerModel';
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


      let user;
      let developer = {
        name: 'Not avaible yet',
        email: 'Not avaible yet'
      };
      if(dev){      
        const userId = dev.userId;
        user = await User.findOne({_id: userId})
        developer = {
          name: dev.name,
          email: dev.email
      }; }


    
      console.log(developer);

      return NextResponse.json({
          message: 'login sucess',
          developer,
          succes: true
      });
  }
   catch (error) {
      return NextResponse.json({error : error.message}, {status: 500});
  }
}