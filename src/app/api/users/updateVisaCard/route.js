import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";
import Client from "@/models/clientModel";
import VisaCard from "@/models/visaCardModel";
import { NextRequest, NextResponse } from "next/server";

import bcryptjs from 'bcryptjs';

connect();


export async function POST(request) {
    try {
      // get userId 
      const user = await getDataFromToken(request);
      const userId = user.id;

      // find client
      const client = await Client.findOne({userId: userId});
      
      // get new visa card 
      const reqBody = await request.json();
      const newVisaCard = reqBody;


      // hash cardNumber and ccv
      const salt = await bcryptjs.genSalt(10);
      const hashedCardNumber = await bcryptjs.hash(newVisaCard.cardNumber, salt);
      const hashedCcv = await bcryptjs.hash(newVisaCard.ccv, salt);
      

      // update visa card
      const checkVisa = await VisaCard.findOne({clientId: client._id});


      if(!checkVisa) {
         // save visa card to db
        const newVisaCard = await new VisaCard({
          clientId: client._id,
        });
          
        const save = await newVisaCard.save();

        // update
        const visaCard = await VisaCard.findOneAndUpdate(
          {clientId: client._id},
          {
              cardNumber: hashedCardNumber,
              expirationdate: newVisaCard.expirationDate,
              holderName: newVisaCard.holderName,
              ccv: hashedCcv
          });
        }

        const visaCard = await VisaCard.findOneAndUpdate(
          {clientId: client._id},
          {
              cardNumber: hashedCardNumber,
              expirationdate: newVisaCard.expirationDate,
              holderName: newVisaCard.holderName,
              ccv: hashedCcv
          }, { new: true });

      



      return NextResponse.json({
        message: 'Old informations sent',
        success: true
      });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
};