import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.email || !body.password) {
    return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 });
  }

  return NextResponse.json({
    message: 'Compte créé',
    user: { id: 'usr_1', email: body.email }
  });
}
