import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';

import Project from '@/models/projectModel';
import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import Client from '@/models/clientModel';
import Developer from '@/models/developerModel';
import Review from '@/models/review';
import User from '@/models/userModel';



connect();


let projectId;

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const data = reqBody;
    projectId = data.projectId;

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
    // find project
    const project = await Project.findOne({_id: projectId});
    

    return NextResponse.json({
    message: 'Sucess',
    project,
    succes: true
    });

  } catch (error) {
      return NextResponse.json({error : error.message}, {status: 500});
  }
}