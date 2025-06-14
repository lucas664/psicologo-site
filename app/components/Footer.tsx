'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export default function Footer() {
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const message = encodeURIComponent('Olá, gostaria de agendar uma conversa inicial');
    const phone = '5511976027447';
    
    setWhatsappUrl(
      isMobile 
        ? `whatsapp://send?phone=${phone}&text=${message}`
        : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`
    );
  }, []);

  const handleWhatsAppClick = () => {
    // Rastrear clique no WhatsApp
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': 'footer_whatsapp'
      });
    }
  };

  const handleInstagramClick = () => {
    // Rastrear clique no Instagram
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'instagram_click', {
        'event_category': 'engagement',
        'event_label': 'footer_instagram'
      });
    }
  };

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Karina Ribeiro de Freitas</h5>
            <h5>CRP 06/156482</h5>
            <p>Atendimento psicológico online para ajudar você a encontrar equilíbrio emocional e qualidade de vida.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Contato</h5>
            <div className="d-flex justify-content-md-end gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                onClick={handleWhatsAppClick}
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/psicologakarinafreitas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                onClick={handleInstagramClick}
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Karina Freitas - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 