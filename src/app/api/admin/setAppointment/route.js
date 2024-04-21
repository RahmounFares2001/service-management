import {connect} from '@/dbConfig/dbConfig';
import Appointment from '@/models/appointmentModel';

import { NextRequest, NextResponse } from 'next/server';


connect();

export async function POST(request) {
    try {
        // get developer
        const reqBody = await request.json();
        const data = reqBody;

        const action = data.action;
        const appointment = data.appointment;
        const appointmentId = appointment._id


        if(action == 'accept') {
            const app = await Appointment.findOneAndUpdate({
                _id: appointmentId
            },{
                status: 'confirmed'
            });
        } else if (action == 'decline') {
            const app = await Appointment.findOneAndUpdate({
                _id: appointmentId
            },{
                status: 'cancelled'
            });
        };
      


        return NextResponse.json({
            message: 'Success',
            success: true,
        });
        
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500});
    };
};