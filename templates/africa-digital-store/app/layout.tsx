import '../styles/globals.css';
import type { Metadata } from 'next';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'AfriDigital Store | Ebooks, formations et outils digitaux',
  description:
    'Marketplace africaine de produits digitaux: ebooks, formations, templates, logiciels et presets.',
  openGraph: {
    title: 'AfriDigital Store',
    description: 'Achetez vos produits digitaux en toute sécurité avec Mobile Money.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
