import Link from 'next/link';

export function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand">AfriDigital Store</Link>
      <nav>
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/panier">Panier</Link>
        <Link href="/compte">Mon compte</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}
