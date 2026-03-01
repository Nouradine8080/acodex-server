import { NextResponse } from 'next/server';
import { initiatePayment, paymentMethods, PaymentMethod } from '../../../lib/payments';
import { signDownloadLink } from '../../../lib/security';

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = String(formData.get('email') || '');
  const method = String(formData.get('method') || '') as PaymentMethod;
  const amountXOF = Number(formData.get('amountXOF') || 0);

  if (!email || !paymentMethods.includes(method) || amountXOF <= 0) {
    return NextResponse.json({ error: 'Données de paiement invalides' }, { status: 400 });
  }

  const payment = await initiatePayment(method, amountXOF);
  const orderId = `ord_${Date.now()}`;
  const signed = signDownloadLink(orderId, process.env.DOWNLOAD_SIGNING_SECRET || 'dev-secret');

  return NextResponse.json({
    orderId,
    payment,
    download: {
      url: `/api/downloads/${orderId}?expiresAt=${signed.expiresAt}&sig=${signed.signature}`,
      maxDownloads: signed.maxDownloads
    },
    emailStatus: 'queued'
  });
}
