export type Product = {
  id: string;
  slug: string;
  title: string;
  category: 'ebook' | 'formation' | 'template' | 'logiciel' | 'preset' | 'pdf';
  priceXOF: number;
  rating: number;
  sales: number;
  description: string;
};

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'pack-social-media-afrique',
    title: 'Pack Templates Social Media Afrique',
    category: 'template',
    priceXOF: 12500,
    rating: 4.8,
    sales: 1200,
    description: '50 templates Canva prêts à publier pour PME africaines.'
  },
  {
    id: 'p2',
    slug: 'formation-ecommerce-mobile-money',
    title: 'Formation E-commerce + Mobile Money',
    category: 'formation',
    priceXOF: 45000,
    rating: 4.9,
    sales: 800,
    description: 'Lancer une boutique rentable en Afrique francophone.'
  },
  {
    id: 'p3',
    slug: 'ebook-vente-whatsapp-business',
    title: 'Ebook Vente avec WhatsApp Business',
    category: 'ebook',
    priceXOF: 7000,
    rating: 4.7,
    sales: 2500,
    description: 'Stratégies locales pour convertir via WhatsApp.'
  }
];

export const testimonials = [
  {
    name: 'Awa N., Dakar',
    text: 'Paiement MTN Money validé en 30 secondes et accès immédiat aux fichiers.'
  },
  {
    name: 'Junior K., Abidjan',
    text: 'Dashboard clair, mes achats sont centralisés et faciles à retélécharger.'
  }
];
