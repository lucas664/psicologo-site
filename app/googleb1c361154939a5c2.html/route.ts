import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('google-site-verification: googleb1c361154939a5c2.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
} 