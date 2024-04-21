import {connect} from '@/dbConfig/dbConfig';
import Appointment from '@/models/appointmentModel';

import { NextResponse } from 'next/server';


connect();

let appointmentId;

export async function POST(request) {
    try {
      // 
      const reqBody = await request.json();
      const selectedAppointment = reqBody;
      
      appointmentId = selectedAppointment._id;
      
      return NextResponse.json({
        message: 'Received',
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};


export async function GET(request) {
    try {

      // find app
      const appointment = await Appointment.findOne({_id: appointmentId});
      
      const informations = appointment.informations;

      return NextResponse.json({
        message: 'Informations sent',
        informations,
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};