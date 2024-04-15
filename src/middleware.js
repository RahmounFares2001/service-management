import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path == '/sign' || path == '/' 

    const token = request.cookies.get('token')?.value ||''

    // redirect user with token 
    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl ));
    }
    // redirect user without token
    else if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/sign', request.nextUrl ));
    }

    return NextResponse.next();
}

export const config = {
    api: {
        bodyParser: false,
    },
    matcher: [
        '/adminDashboard/:path*',
        '/profile',
        '/dashboard/:path*'
    ]
};