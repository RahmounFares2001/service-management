import {connect} from '@/dbConfig/dbConfig';

import { NextRequest, NextResponse } from 'next/server';

import Client from '@/models/clientModel';
// import ClientAdress from '@/models/clientAdressModel';

import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import ClientAdress from '@/models/clientAdressModel';



connect();

export async function POST(request) {
    try {
         // get user Id
         const user = await getDataFromToken(request);
         const userId = user.id;

         // get new informations
         const reqBody = await request.json();
         const newInformations = reqBody;
 

         const client = await Client.findOneAndUpdate(
             {userId : userId},
             {   
                 surname: newInformations.surname,
                 phoneNumber: newInformations.phone
             },
             {new: true});


         const clientadress = await ClientAdress.findOneAndUpdate(
             {clientId: client._id},
             {
                 adress: newInformations.adress,
                 appartment: newInformations.appartment,
                 city: newInformations.city,
                 state: newInformations.state,
                 zipCode: newInformations.zipCode
             },
             {new: true});

 
 
         return NextResponse.json({
             message: 'Informations updated',
             succes: true
         })
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};