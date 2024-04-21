import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';

import Project from '@/models/projectModel';
import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import Client from '@/models/clientModel';
import Developer from '@/models/developerModel';
import Review from '@/models/review';



connect();


let projectIdFront;

export async function POST(request) {
  try {

    const reqBody = await request.json();
    const data = reqBody;
    const review = data.review;
    const projectToShow = data.projectToShow;
    // project id from body
    projectIdFront = projectToShow._id;

    

    
    // get user id
    const user = await getDataFromToken(request);
    const userId = user.id;

    const client = await Client.findOne({userId: userId});
    const project = await Project.findOne({
                                _id: projectIdFront,
                                clientId: client._id
                                });
    // const developer = await Developer.findOne({projectId: project._id});

    const clientId = client._id;
    const projectId = project._id;

    // const developerId = developer._id

    const rev = await Review.find({
        clientId: client._id
    })

    if(!rev) {
        const newReview = new Review({
            content: review,
            clientId: clientId,
            projectId: projectId,
            // developerId: developerId
        });
        const savedReview = await newReview.save();
    };
    

    return NextResponse.json({
    message: 'Review added successfly',
    success: true
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
}
};



export async function GET(request) {
  try {
    // get user id
    const user = await getDataFromToken(request);
    const userId = user.id;

    const client = await Client.findOne({userId: userId});
    // const project = await Project.findOne({
    //                             _id: projectIdFront,
    //                             clientId: client._id});
    // const developer = await Developer.findOne({projectId: project._id});

    const review = await Review.findOne({
        clientId: client._id,
        projectId: projectIdFront,
        // developerId: developer._id
    });

    var reviewExist;
    if(review) {
        reviewExist = true
    } else if (!review) {
        reviewExist = false
    };



    const content = review.content;
    const details = {
        review: content,
        reviewExist: reviewExist
    };

      return NextResponse.json({
          message: 'login sucess',
          details,
          succes: true
      });

  } catch (error) {
      return NextResponse.json({error : error.message}, {status: 500});
  }
}