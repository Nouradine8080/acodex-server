import { paymentMethods } from '../../lib/payments';

export default function CheckoutPage() {
  return (
    <section>
      <h1>Checkout</h1>
      <form method="POST" action="/api/checkout" className="card">
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Méthode de paiement
          <select name="method" required>
            {paymentMethods.map((method) => (
              <option value={method} key={method}>{method}</option>
            ))}
          </select>
        </label>
        <input type="hidden" name="amountXOF" value="12500" />
        <label>
          Code promo
          <input name="promoCode" placeholder="AFRI10" />
        </label>
        <label>
          Code affilié
          <input name="affiliateCode" placeholder="PARTNER2026" />
        </label>
        <button className="btn" type="submit">Payer maintenant</button>
      </form>
      <p>Après paiement, un email automatique est envoyé avec lien de téléchargement sécurisé.</p>
    </section>
  );
}
