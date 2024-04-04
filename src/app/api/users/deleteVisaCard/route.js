import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import {connect} from '@/dbConfig/dbConfig';

import { NextRequest, NextResponse } from 'next/server';

import Client from '@/models/clientModel';
import VisaCard from '@/models/visaCardModel';


connect();

export async function DELETE(request) {
    try {
        // get user id
        const user = await getDataFromToken(request);
        const userId = user.id;
        console.log(user);
        console.log(userId);

        // // // find user by id
        const client = await Client.findOne({userId: userId});

        // // // get visa
        const visa = await VisaCard.findOneAndDelete({clientId: client._id});
        console.log(visa);

        

        return NextResponse.json({
            message: 'Visa deleted',
            success: true,
        });
        
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500});
    };
};