import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from "next/server";

// helper
import { sendEmailNotification } from '@/app/helpers/appointmentNotification';

import Appointment from '@/models/appointmentModel';
import Client from '@/models/clientModel';
import User from '@/models/userModel';

// cron
import cron from 'node-cron';


connect();

export async function handler(request) {
  cron.schedule('0 0 * * *', async () => {

    try {
        // Date for tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        // Find appointments
        const appointments = await Appointment.findOne({ date: tomorrow });

        // Find client
        const client = await Client.findOne({_id: appointments.clientId});

        // Find user
        const user = await User.findOne({_id: client.userId});

        // Send notifications
        appointments.forEach(async appointment => {
        await sendEmailNotification(user.email, appointment.date);
        });

        return NextResponse.json({
            message: 'Mail success',
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } }) };
