import { notFound } from 'next/navigation';
import { products } from '../../../lib/data';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'XOF',
      price: product.priceXOF,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <section>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Prix: {product.priceXOF.toLocaleString('fr-FR')} FCFA</p>
      <p>Note: {product.rating} / 5 · {product.sales} ventes</p>
      <a className="btn" href="/checkout">Acheter maintenant</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
