import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import { connect } from '@/dbConfig/dbConfig';
import Client from '@/models/clientModel';
import Project from '@/models/projectModel';
import User from '@/models/userModel';

import { NextResponse, NextRequest } from 'next/server';

connect();


let query;

export async function GET(request) {
    try {
        // reg exp
        const q = query.q;
        const regex = new RegExp(q, 'i');

        const allProjects = await Project.find();

        // get data from token
        const developer = await getDataFromToken(request);
        const developerId = developer.id;

        const myProjects = await Project.find({developerId: developerId});


        const projects = {
            allProjects: allProjects,
            myProjects: myProjects
        };
       
        return NextResponse.json({
            message: 'Fetch success',
            projects,
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};



export async function POST(request) {
    try {
        const reqBody = await request.json();
        query = reqBody;

        return NextResponse.json({
            message: 'Post success',
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
