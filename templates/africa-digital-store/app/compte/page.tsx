const purchaseHistory = [
  { id: 'ord-1001', product: 'Pack Templates Social Media Afrique', date: '2026-01-08', status: 'Payé' },
  { id: 'ord-1002', product: 'Ebook Vente avec WhatsApp Business', date: '2026-01-12', status: 'Payé' }
];

export default function AccountPage() {
  return (
    <section>
      <h1>Espace client</h1>
      <div className="card">
        <h2>Inscription / Connexion</h2>
        <p>Authentification sécurisée via email + mot de passe hashé (Argon2) + JWT.</p>
      </div>
      <h2>Historique des achats</h2>
      <ul>
        {purchaseHistory.map((order) => (
          <li key={order.id}>
            {order.date} · {order.product} · {order.status} ·
            <a href={`/api/downloads/${order.id}`}> Téléchargement sécurisé</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
