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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('/#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    closeMenu();
  };

  const navLinks = [
    { href: '/#inicio', label: 'Início' },
    { href: '/#especialidades', label: 'Especialidades' },
    { href: '/#beneficios', label: 'Benefícios' },
    { href: '/#processos', label: 'Processos' },
    { href: '/#sobre', label: 'Sobre' },
    { href: '/#contato', label: 'Contato' },
  ];

  return (
    <header className={`fixed-top ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <Image
              src="/Karina_Freitas_logo.png"
              alt="Karina Freitas - Psicóloga"
              fill
              priority
              style={{ objectFit: 'contain' }}
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
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <Link
                    href={link.href}
                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
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
