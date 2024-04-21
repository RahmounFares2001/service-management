import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';

import Project from '@/models/projectModel';
import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import Client from '@/models/clientModel';

// import { uploads } from '@/app/helpers/cloudinary';

// file system
// import fs from 'fs';
connect();


export async function POST(request) {
  try {
    
    const reqBody = await request.json();
    const projectDetails = reqBody;

    // upload file to cloudinary
    // const file = projectDetails.projectDescription.file

    // if(file.length > 0){
    //   const uploader = async (path) => await uploads(path, 'services_management/book_of_specification');
    //   const {path} = file;

    //   await uploader(path);
    //   // fs.unlinkSync(path);
    // }
    
    
    
    // Save project

    // get user id
    const user = await getDataFromToken(request);
    const userId = user.id;

    // // get client
    const client = await Client.findOne({userId: userId});


    const name = projectDetails.projectDescription.name;
    const type = projectDetails.typeProject;
    const packege = projectDetails.chosenPackege;


    
    const newProject = new Project({
      name: name,
      type: type,
      package: packege,
      taken: false,
      clientId: client._id
    });

    const savedProject = await newProject.save();



    // const file = new BookOfSpecification({
    //   filename: originalname,
    //   mimetype: mimetype,
    //   size: size,
    //   path: `/uploads/${filename}`,
    //   uuid: uuidv4(),
    // });

    // await file.save();

      return NextResponse.json({
        message: 'Project created successfly',
        success: true
        });
    x 
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

      const project = await Project.findOne({
          clientId: client._id,
          statuss: { $in: ['pending', 'cancelled'] } });

      var projectExist;
      if(project){
          projectExist = true;
      } else {
          projectExist = false;
      };


      return NextResponse.json({
          message: 'login sucess',
          projectExist,
          succes: true
      });

  } catch (error) {
      return NextResponse.json({error : error.message}, {status: 500});
  }
}