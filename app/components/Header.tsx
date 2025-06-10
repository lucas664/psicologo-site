'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header" style={{
      position: 'static',
      top: 0,
      left: 0,
      right: 0,
      background: '#fff',
      boxShadow: '0 2px 8px #0001',
      zIndex: 1000,
      padding: '2px 0'
    }}>
      <div id="header-content" style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <Link href="/" style={{ 
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          height: 50
        }}>
          <img src="/logo_karina.svg" alt="Karina Freitas Psicóloga Clínica" style={{ height: 110, width: 'auto', display: 'block' }} />
        </Link>
        <nav style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#inicio" style={{ color: "#2b4c6f", textDecoration: "none", fontWeight: 500 }}>
            Início
          </a>
          <a href="#especialidades" style={{ color: "#2b4c6f", textDecoration: "none", fontWeight: 500 }}>
            Especialidades
          </a>
          <a href="#beneficios" style={{ color: "#2b4c6f", textDecoration: "none", fontWeight: 500 }}>
            Benefícios
          </a>
          <a href="#processos" style={{ color: "#2b4c6f", textDecoration: "none", fontWeight: 500 }}>
            Processos
          </a>
          <a href="#sobre" style={{ color: "#2b4c6f", textDecoration: "none", fontWeight: 500 }}>
            Sobre mim
          </a>
          <a href="#contato" style={{ color: "#2b4c6f", textDecoration: "none", fontWeight: 500 }}>
            Contato
          </a>
        </nav>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <Link href="https://wa.me/5511976027447" target="_blank" style={{
            background: "#ddb08f",
            color: "#fff",
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: 6,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 14
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
            </svg>
            FALAR NO WHATSAPP
          </Link>
          <a href="https://www.instagram.com/karinafreitaspsicologa" target="_blank" style={{
            background: "#fff",
            color: "#E1306C",
            border: '1px solid #E1306C',
            textDecoration: "none",
            padding: "8px 10px",
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" fill="#E1306C"/>
            </svg>
          </a>
        </div>
      </div>
      <style>{`
        html, body, #__next, main {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }
        @media (min-width: 780px) {
          #header-content {
            flex-direction: row !important;
            align-items: center !important;
            gap: 24px !important;
            width: 100% !important;
          }
          #main-header {
            position: fixed !important;
          }
        }
      `}</style>
    </header>
  );
} 