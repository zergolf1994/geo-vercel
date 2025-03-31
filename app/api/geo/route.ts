import { geolocation, ipAddress } from '@vercel/functions';

export function GET(request: Request) {
    const details = geolocation(request);
    const ip = ipAddress(request) || "unknown";
    return new Response(JSON.stringify({ ...details, ip }), {
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
    });
}

export function OPTIONS() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}