import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import { connect } from '@/dbConfig/dbConfig';
import Client from '@/models/clientModel';
import Project from '@/models/projectModel';
import User from '@/models/userModel';

import { NextResponse, NextRequest } from 'next/server';

connect();

export async function POST(request) {
    try {
        // get project
        const reqBody = await request.json();
        const projectToTake = reqBody;
        const projectToTakeId = projectToTake.project._id;

        // get dev
        const developer = await getDataFromToken(request);
        const developerId = developer.id;

        // take project
        const project = await Project.findOneAndUpdate({
            _id: projectToTakeId
        },{
            developerId: developerId,
            taken: true,
            developerProgression: 'In progress'
        });

        return NextResponse.json({
            message: 'Post success',
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
