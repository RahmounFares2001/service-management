import {connect} from '@/dbConfig/dbConfig';

import Project from '@/models/projectModel';

import { NextRequest, NextResponse } from 'next/server';


connect();

export async function POST(request) {
    try {
        // get developer
        const reqBody = await request.json();
        const data = reqBody;

        const action = data.action;
        const project = data.project;
        const projectId = project._id


        if(action == 'accept') {
            const app = await Project.findOneAndUpdate({
                _id: projectId
            },{
                statuss: 'confirmed',
                progression: 'In progress',
            });
        } else if (action == 'decline') {
            const app = await Project.findOneAndUpdate({
                _id: projectId
            },{
                statuss: 'cancelled',
                progression: 'cancelled',
            });
        };
      

        return NextResponse.json({
            message: 'Success',
            success: true,
        });
        
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500});
    };
};