import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import {connect} from '@/dbConfig/dbConfig';
import ClientAdress from '@/models/clientAdressModel';
import Client from '@/models/clientModel';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';




connect();


export async function GET(request) {
    try {
      // get user id
      const user = await getDataFromToken(request);
      const userId = user.id;

      // find user by id
      const client = await Client.findOne({userId: userId});
      const clientAdress = await ClientAdress.findOne({clientId: client._id});


      const oldInformations = {
        username: user.username,
        email: user.email,
        surname: client.surname,
        phone: client.phoneNumber,
        adress: clientAdress.adress,
        appartment: clientAdress.appartment,
        city: clientAdress.city,
        state: clientAdress.state,
        zipCode: clientAdress.zipCode
      };


      return NextResponse.json({
        message: 'Old informations sent',
        oldInformations,
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};