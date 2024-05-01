import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';


import Delivery from '@/models/deliveryModel';
import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import Project from '@/models/projectModel';

connect();

let projectId;

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const data = reqBody;
    const project = data.project;
    const projectId = project._id;
    const clientId = project.clientId;

    // get delivery
    const delivery = data.delivery
    const githubRepo = delivery.githubRepo;

    // get developer
    const developer = await getDataFromToken(request);
    const developerId = developer.id;

    // Save delivery
    const newDelivery = new Delivery({
        githubRepo: githubRepo,
        projectId: projectId,
        clientId: clientId,
        developerId: developerId
    });
    const savedDelivery = await newDelivery.save();

    const projectt = await Project.findOneAndUpdate(
      {_id: projectId},
      {statuss: 'delivered'},
      {new: true});
      

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
    

    return NextResponse.json({
    message: 'Sucess',
    succes: true
    });

  } catch (error) {
      return NextResponse.json({error : error.message}, {status: 500});
  }
}