import { StatCard } from '../../components/StatCard';

export default function AdminPage() {
  return (
    <section>
      <h1>Interface Admin</h1>
      <div className="grid">
        <StatCard label="Ventes du jour" value="430 000 FCFA" />
        <StatCard label="Commandes" value="58" />
        <StatCard label="Nouveaux utilisateurs" value="21" />
      </div>
      <div className="card">
        <h2>Actions</h2>
        <ul>
          <li>Ajouter / modifier un produit digital</li>
          <li>Voir et filtrer les commandes</li>
          <li>Gérer utilisateurs et affiliations</li>
          <li>Créer des codes promo et suivre conversions</li>
        </ul>
      </div>
    </section>
  );
}
