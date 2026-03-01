export default function CartPage() {
  return (
    <section>
      <h1>Panier</h1>
      <p>1 article · Total: 12 500 FCFA</p>
      <label>
        Code promo
        <input placeholder="Ex: AFRI10" />
      </label>
      <a className="btn" href="/checkout">Passer au checkout</a>
    </section>
  );
}
