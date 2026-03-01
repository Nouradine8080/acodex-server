import { NextResponse } from 'next/server';
import { verifyDownloadSignature } from '../../../../lib/security';

export async function GET(req: Request, { params }: { params: { orderId: string } }) {
  const { searchParams } = new URL(req.url);
  const sig = searchParams.get('sig') || '';
  const expiresAt = Number(searchParams.get('expiresAt') || 0);

  const valid = verifyDownloadSignature(
    params.orderId,
    expiresAt,
    sig,
    process.env.DOWNLOAD_SIGNING_SECRET || 'dev-secret'
  );

  if (!valid) {
    return NextResponse.json({ error: 'Lien de téléchargement invalide ou expiré' }, { status: 403 });
  }

  return NextResponse.json({
    message: 'Téléchargement autorisé',
    fileUrl: 'https://cdn.example.com/private/product.zip',
    remainingDownloads: 2
  });
}
