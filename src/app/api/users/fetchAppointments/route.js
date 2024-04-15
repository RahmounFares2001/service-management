import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import { connect } from '@/dbConfig/dbConfig';
import Appointment from '@/models/appointmentModel';
import Client from '@/models/clientModel';


import { NextResponse, NextRequest } from 'next/server';

connect();


export async function GET(request) {
    try {
        // get user Id
        const user = await getDataFromToken(request);
        const userId = user.id;

        // get apoointments
        const client = await Client.findOne({userId: userId});
        const appointments = await Appointment.find({clientId: client._id});
        console.log(appointments)

        return NextResponse.json({
            message: 'Fetch success',
            appointments,
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};