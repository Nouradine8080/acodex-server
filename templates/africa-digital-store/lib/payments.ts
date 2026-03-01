export type PaymentMethod =
  | 'orange_money'
  | 'mtn_money'
  | 'moov_money'
  | 'airtel_money'
  | 'card'
  | 'paypal'
  | 'stripe';

export const paymentMethods: PaymentMethod[] = [
  'orange_money',
  'mtn_money',
  'moov_money',
  'airtel_money',
  'card',
  'paypal',
  'stripe'
];

export async function initiatePayment(method: PaymentMethod, amountXOF: number) {
  return {
    method,
    amountXOF,
    status: 'pending',
    reference: `pay_${Date.now()}`
  };
}
