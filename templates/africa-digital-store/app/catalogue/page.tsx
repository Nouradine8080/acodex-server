import { ProductCard } from '../../components/ProductCard';
import { products } from '../../lib/data';

export default function CataloguePage({
  searchParams
}: {
  searchParams: { q?: string; category?: string };
}) {
  const q = searchParams.q?.toLowerCase() ?? '';
  const category = searchParams.category;

  const filtered = products.filter((p) => {
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    const matchesCategory = !category || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <section>
      <h1>Catalogue digital</h1>
      <form className="filters" method="GET">
        <input name="q" placeholder="Rechercher un produit" defaultValue={searchParams.q} />
        <select name="category" defaultValue={searchParams.category || ''}>
          <option value="">Toutes les catégories</option>
          <option value="ebook">Ebooks</option>
          <option value="formation">Formations</option>
          <option value="template">Templates</option>
          <option value="logiciel">Logiciels</option>
          <option value="preset">Presets</option>
          <option value="pdf">PDF</option>
        </select>
        <button className="btn" type="submit">Filtrer</button>
      </form>
      <div className="grid">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>
  );
}
