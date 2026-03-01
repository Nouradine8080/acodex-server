import Link from 'next/link';
import { Product } from '../lib/data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <span className="badge">{product.category}</span>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.priceXOF.toLocaleString('fr-FR')} FCFA</p>
      <Link className="btn" href={`/produit/${product.slug}`}>Voir le produit</Link>
    </article>
  );
}
