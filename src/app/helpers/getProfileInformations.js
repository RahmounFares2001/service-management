import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import {connect} from '@/dbConfig/dbConfig';
import ClientAdress from '@/models/clientAdressModel';
import Client from '@/models/clientModel';

import axios from 'axios';
import { NextResponse } from 'next/server';




connect();


export async function getProfileInformations(request) {
    try {
      const userId = await getDataFromToken(request);
      const client = await Client.findOne({userId: userId});
      const clientAdress = await ClientAdress.findOne({clientId: client._id});

      const oldInformations = {
        surname: client.surname,
        phone: client.phoneNumber,
        adress: clientAdress.adress,
        appartment: clientAdress.appartment,
        city: clientAdress.city,
        state: clientAdress.state,
        zipcode: clientAdress.zipcode
      };

      return NextResponse.json(oldInformations);
      // return NextResponse.json({
      //   message: 'Old informations sent',
      //   oldInformations,
      //   succes: true
      // });

    } catch (error) {
        console.log(error)
    };
};