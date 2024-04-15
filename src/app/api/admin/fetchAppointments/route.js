import {connect} from '@/dbConfig/dbConfig';

import { NextResponse } from 'next/server';



import Client from '@/models/clientModel';
import User from '@/models/userModel';
import Appointment from '@/models/appointmentModel';


connect();
    
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

        const appointments = await Appointment.find({ clientId: client._id });


      return NextResponse.json({
          message: 'Fetch sucess',
          appointments,
          succes: true
      });

  } catch (error) {
      return NextResponse.json({error : error.message}, {status: 500});
  }
}