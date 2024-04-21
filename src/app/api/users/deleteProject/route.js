import {connect} from '@/dbConfig/dbConfig';


import Project from '@/models/projectModel';

import { NextRequest, NextResponse } from 'next/server';


connect();

export async function POST(request) {
    try {
        // get developer
        const reqBody = await request.json();
        const setProjectToDelete = reqBody;

        const projectId = setProjectToDelete._id;

        await Project.findOneAndDelete({_id: projectId});

        return NextResponse.json({
            message: 'Project deleted',
            success: true,
        });
        
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500});
    };
};