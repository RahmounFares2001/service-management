import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export const getDataFromToken = () => {
    try {
        // get coded token
        request.coockies.get('token')?.value || '';

        // decoded token
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        
        return decodedToken.id;
        
    } catch (error) {
        throw new Error(error.message);
    }
}