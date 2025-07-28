'use server'
// app/api/admin-logout/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies(); // ✅ no await
  cookieStore.delete('admin-auth');

  return NextResponse.json({ success: true });
}
