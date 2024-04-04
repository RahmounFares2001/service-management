import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import {connect} from '@/dbConfig/dbConfig';

import Client from '@/models/clientModel';
import VisaCard from '@/models/visaCardModel';
import { NextResponse } from 'next/server';

import bcryptjs from 'bcryptjs';




connect();


export async function GET(request) {
    try {
      // get user id
      const user = await getDataFromToken(request);
      const userId = user.id;

      // find user by id
      const client = await Client.findOne({userId: userId});
      
      // find visa
      const oldVisa = await VisaCard.findOne({clientId: client._id});

      
      const oldVisaCard = {
        holderName: oldVisa.holderName,
        expirationDate: oldVisa.expirationdate
      }


      return NextResponse.json({
        message: 'Old informations sent',
        oldVisaCard,
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};