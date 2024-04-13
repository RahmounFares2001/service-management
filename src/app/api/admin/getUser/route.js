import { connect } from '@/dbConfig/dbConfig';
import ClientAdress from '@/models/clientAdressModel';
import Client from '@/models/clientModel';
import User from '@/models/userModel';

import { NextResponse, NextRequest } from 'next/server';

connect();

export let user;


export async function POST(request) {
    try {
        const reqBody = await request.json();
        const userr = reqBody;
        user = userr.user
        console.log(user);
                
        // find user by username
        const userFromDb = await User.findOne({username: user});
        console.log(userFromDb);
        const client = await Client.findOne({username: userId});
        const clientAdress = await ClientAdress.findOne({clientId: client._id});


        const userInformations = {
        username: userFromDb.username,
        email: userFromDb.email,
        surname: client.surname,
        phone: client.phoneNumber,
        adress: clientAdress.adress,
        appartment: clientAdress.appartment,
        city: clientAdress.city,
        state: clientAdress.state,
        zipCode: clientAdress.zipCode
        };
        console.log(userInformations);

        return NextResponse.json({
            message: 'Post success',
            userInformations,
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};