import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";
import Appointment from "@/models/appointmentModel";
import Client from "@/models/clientModel";

import { NextRequest, NextResponse } from "next/server";

connect();


export async function POST(request) {
    try {
        // get appoitnment informations from body
        const reqBody = await request.json();
        const appointmentData = reqBody;
        console.log(appointmentData);

        // get user id
        const user = await getDataFromToken(request);
        const userId = user.id;

        const client = await Client.findOne({userId: userId})

        const newAppointment = new Appointment({
            type: appointmentData.typeAppointment,
            date: appointmentData.dateAppointment,
            informations: appointmentData.informationsAppointment,
            clientId: client._id
        });
        const savedAppointment = await newAppointment.save();
    

        const response = NextResponse.json({
            message: 'login sucess',
            succes: true
        });

        return response;

    } catch (error) {
        return NextResponse.json({error : error.message}, {status: 500});
    }
};

export async function GET(request) {
    try {
        // get user id
        const user = await getDataFromToken(request);
        const userId = user.id;

        const client = await Client.findOne({userId: userId});

        const appointment = await Appointment.findOne({
            clientId: client._id,
            status: { $in: ['cancelled', 'ended'] } });

        var appointmentExist;
        if(appointment){
            appointmentExist = false;
        } else {
            appointmentExist = true;
        };


        return NextResponse.json({
            message: 'login sucess',
            appointmentExist,
            succes: true
        });

    } catch (error) {
        return NextResponse.json({error : error.message}, {status: 500});
    }
}