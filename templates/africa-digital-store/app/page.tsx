import { ProductCard } from '../components/ProductCard';
import { Testimonial } from '../components/Testimonial';
import { products, testimonials } from '../lib/data';

export default function HomePage() {
  return (
    <section>
      <div className="hero">
        <h1>Vendez et achetez des produits digitaux en Afrique, rapidement.</h1>
        <p>
          Ebooks, formations, templates et logiciels livrés instantanément après paiement sécurisé.
        </p>
        <a className="btn" href="/checkout">Achat rapide</a>
      </div>

      <h2>Produits populaires</h2>
      <div className="grid">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>

      <h2>Témoignages clients</h2>
      <div className="grid">{testimonials.map((t) => <Testimonial key={t.name} {...t} />)}</div>
    </section>
  );
}
