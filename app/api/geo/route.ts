import { geolocation, ipAddress } from '@vercel/functions';

export function GET(request: Request) {
    const details = geolocation(request);
    const ip = ipAddress(request) || "unknown";
    return Response.json({ ...details, ip });
    // return new Response(`<h1>Your location is ${city}</h1>`, {
    //     headers: { 'content-type': 'text/html' },
    // });
}