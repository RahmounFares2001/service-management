import {connect} from '@/dbConfig/dbConfig';

import Developer from '@/models/developerModel';
import User from '@/models/userModel';

import { NextRequest, NextResponse } from 'next/server';



connect();

export async function POST(request) {
    try {
        // get developer
        const reqBody = await request.json();
        const dev = reqBody;

        const developer = dev.developer;

        const dv = await Developer.findOneAndDelete({username: developer});

        const userId = dev._userId;
        await User.findOneAndDelete({userId: userId});


        return NextResponse.json({
            message: 'Developer deleted',
            success: true,
        });
        
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500});
    };
};