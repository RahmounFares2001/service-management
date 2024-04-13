import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import { connect } from '@/dbConfig/dbConfig';
import Client from '@/models/clientModel';
import Project from '@/models/projectModel';

import { NextResponse, NextRequest } from 'next/server';

connect();

let query;

export async function GET(request) {
    try {
        // reg exp
        const q = query.q;
        const regex = new RegExp(q, 'i');

        // get client
        const user = await getDataFromToken(request);
        const userId= user.id;
        const client = await Client.findOne({userId: userId});

        // get projects
        const projects = await Project.find({clientId: client._id, name: {$regex: regex}});


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
