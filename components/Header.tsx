'use client'

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUsername(localStorage.getItem('username'));
    }
  }, []);

  return (
    <header className="header">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {username && (
            <span style={{ fontWeight: 'bold', marginRight: 16 }}>👤 {username}</span>
          )}
          <Link href="/" className="logo">
            <h1>Emotional Balance</h1>
          </Link>
        </div>
        <div className="header-content">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link href="/">Home</Link>
            <Link href="/game">Choice Game</Link>
            <Link href="/drag-game">Drag Game</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/game" className="btn-nav">Start Game</Link>
            <button 
              onClick={() => {
                localStorage.removeItem('loggedIn');
                localStorage.removeItem('username');
                router.push('/login');
              }} 
              style={{ marginLeft: 16, padding: '6px 16px', border: 'none', background: '#e74c3c', color: '#fff', borderRadius: 4, cursor: 'pointer' }}>
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

