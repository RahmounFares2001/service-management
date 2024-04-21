import { connect } from '@/dbConfig/dbConfig';
import Client from '@/models/clientModel';
import User from '@/models/userModel';

import { NextResponse, NextRequest } from 'next/server';

connect();


let query;

export async function GET(request) {
    try {
        // reg exp
        const q = query.q;
        const regex = new RegExp(q, 'i');


        // get developers


        const users = await User.find({ accountType: 'developer',
                                        username: {$regex: regex},
                                        isAdmin: false});
       
        return NextResponse.json({
            message: 'Fetch success',
            users,
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
