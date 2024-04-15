import {connect} from '@/dbConfig/dbConfig';
import ClientAdress from '@/models/clientAdressModel';
import Client from '@/models/clientModel';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';


connect();

let clientUserame;

export async function POST(request) {
    try {
      // get user id
      const reqBody = await request.json();
      const clientusername = reqBody;
      
      clientUserame = clientusername.clientUsername;
      
      console.log(clientUserame);
            

      return NextResponse.json({
        message: 'clientUsername received',
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};


export async function GET(request) {
    try {

      
      // find user
      const user = await User.findOne({username: clientUserame});
      const client = await Client.findOne({userId: user._id});
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