import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import {connect} from '@/dbConfig/dbConfig';
import ClientAdress from '@/models/clientAdressModel';
import Client from '@/models/clientModel';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';



connect();

import {user} from '../getUser/route.js';


export async function GET(request) {
    try {
      // get user id
      console.log(user);

    //   // find user by id
    //   const client = await Client.findOne({userId: userId});
    //   const clientAdress = await ClientAdress.findOne({clientId: client._id});


    //   const oldInformations = {
    //     username: user.username,
    //     email: user.email,
    //     surname: client.surname,
    //     phone: client.phoneNumber,
    //     adress: clientAdress.adress,
    //     appartment: clientAdress.appartment,
    //     city: clientAdress.city,
    //     state: clientAdress.state,
    //     zipCode: clientAdress.zipCode
    //   };


      return NextResponse.json({
        message: 'Old informations sent',
        user,
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};