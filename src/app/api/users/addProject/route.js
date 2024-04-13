import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';
import BookOfSpecification from '@/models/bookOfSpecificationModel';
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
    

      
    // add project 
    const user = await getDataFromToken(request);
    const userId = user.id;

    const client = await Client.findOne({userId: userId});

    const newProject = new Project({
      name: projectDetails.projectDescription.name,
      type: projectDetails.typeProject,
      package: projectDetails.chosenPackege,
      clientId: client._id
    });

    const savedProject = await newProject.save();

    // save file metadata to db

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



// Handle file upload
// upload.single('pdf')(request, async (err) => {
//   if (err) {
//     console.error('Error uploading file:', err);
//     return NextResponse.json({
//       message: 'Fetch success',
//       success: true
//     });
// }



export async function GET(request) {
  try {
      // get user id
      const user = await getDataFromToken(request);
      const userId = user.id;

      const client = await Client.findOne({userId: userId});

      const project = await Project.findOne({
          clientId: client._id,
          status: { $in: ['cancelled', 'completed'] } });

      var projectExist;
      if(project){
          projectExist = false;
      } else {
          projectExist = true;
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