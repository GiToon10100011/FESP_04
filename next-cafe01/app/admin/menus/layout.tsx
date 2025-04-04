import { ReactNode } from 'react';
import Link from 'next/link';

export default function AdminMenusLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#1f2937', color: 'white', padding: '1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Admin Dashboard - Menus</h1>
          <nav style={{ marginTop: '0.5rem' }}>
            <ul style={{ display: 'flex', gap: '1rem' }}>
              <li>
                <Link href="/admin" style={{ textDecoration: 'none', color: 'white' }}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/menus" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                  Menus
                </Link>
              </li>
              <li>
                <Link href="/admin/orders" style={{ textDecoration: 'none', color: 'white' }}>
                  Orders
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main style={{ flexGrow: 1, maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
        {children}
      </main>
      
      <footer style={{ backgroundColor: '#e5e7eb', padding: '1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: '#4b5563' }}>
          &copy; {new Date().getFullYear()} Cafe Admin Panel
        </div>
      </footer>
    </div>
  );
}

