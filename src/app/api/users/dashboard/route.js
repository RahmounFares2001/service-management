import { getDataFromToken } from '@/app/helpers/getDataFromToken';
import { connect } from '@/dbConfig/dbConfig';
import Appointment from '@/models/appointmentModel';
import Client from '@/models/clientModel';
import Project from '@/models/projectModel';

import { NextResponse, NextRequest } from 'next/server';

connect();


export async function GET(request) {
    try {
        // get users
        const user = await getDataFromToken(request);
        const userId = user.id;

        const client = await Client.findOne({userId: userId});

        const projects = await Project.find({ clientId: client._id });
        const projectsCount = projects.length;

        const appointments = await Appointment.find({clientId: client._id});
        const appointmentsCount = appointments.length;
       
        const counts = {projects: projectsCount, appointments : appointmentsCount};

        return NextResponse.json({
            message: 'Fetch success',
            counts,
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};