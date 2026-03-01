import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    revenueXOF: 12450000,
    orders: 732,
    topProducts: [
      'Pack Templates Social Media Afrique',
      'Formation E-commerce + Mobile Money'
    ],
    affiliates: {
      activePartners: 42,
      payoutsPendingXOF: 980000
    }
  });
}
