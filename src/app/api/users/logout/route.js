import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {

        const response = await NextResponse.json({
            message: 'Logout succes',
            succes: true,
        });
        
        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0),
        });
        return response;
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    };
}