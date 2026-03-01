import crypto from 'crypto';

const DOWNLOAD_TTL_SECONDS = 60 * 15;
const MAX_DOWNLOADS_PER_ORDER = 3;

export function signDownloadLink(orderId: string, secret: string) {
  const expiresAt = Math.floor(Date.now() / 1000) + DOWNLOAD_TTL_SECONDS;
  const payload = `${orderId}:${expiresAt}`;
  const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return { signature, expiresAt, maxDownloads: MAX_DOWNLOADS_PER_ORDER };
}

export function verifyDownloadSignature(orderId: string, expiresAt: number, signature: string, secret: string) {
  const now = Math.floor(Date.now() / 1000);
  if (expiresAt < now) return false;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}:${expiresAt}`)
    .digest('hex');

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
