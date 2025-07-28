'use server'
// app/api/admin-login/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (email === validEmail && password === validPassword) {
    const cookieStore = await cookies();

    cookieStore.set({
      name: 'admin-auth',
      value: 'true',
      httpOnly: true,
      path: '/',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
      secure: true,
    });

    return NextResponse.json({ success: true });
  }
  console.log('Received login:', email, password);
  console.log('Valid credentials:', validEmail, validPassword);
  return new NextResponse('Unauthorized', { status: 401 });
}
