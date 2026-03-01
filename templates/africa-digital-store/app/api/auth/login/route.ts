import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.email || !body.password) {
    return NextResponse.json({ error: 'Identifiants invalides' }, { status: 401 });
  }

  return NextResponse.json({
    token: 'mock-jwt-token',
    refreshToken: 'mock-refresh-token'
  });
}
