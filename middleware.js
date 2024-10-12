import { NextResponse } from 'next/server';


export async function middleware(req) {

  const ip = req.headers.get('x-forwarded-for') || req.ip;

  const res = await fetch(`https://ipinfo.io/${ip}/json?token=ce3be676eb7a03`);
  const data = await res.json();
  console.log('User IP:', data.country);

  if (data.country === 'VN') {
    return NextResponse.redirect('https://google.com/404');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
