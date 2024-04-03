import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export const getDataFromToken = (request) => {
    try {
        // get coded token
        const token = request.cookies.get('token')?.value || '';

        // decoded token
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
   
        return decodedToken;
        
    } catch (error) {
        throw new Error(error.message);
    }
}