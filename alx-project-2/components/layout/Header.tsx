
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#f0f0f0' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
