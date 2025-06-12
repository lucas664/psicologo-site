'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/especialidades', label: 'Especialidades' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className={`fixed-top ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <nav className="navbar navbar-expand-lg align-items-center" style={{ minHeight: 90 }}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className="navbar-brand d-flex align-items-center" onClick={closeMenu} style={{ padding: 0 }}>
            <Image
              src="/logo_karina.svg"
              alt="Karina Freitas - Psicóloga"
              width={220}
              height={0}
              style={{ height: 'auto', maxHeight: 80, width: 'auto' }}
              priority
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}> 
            <ul className="navbar-nav ms-auto">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <Link
                    href={link.href}
                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
