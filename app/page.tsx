'use client';
import Image from "next/image";
import Link from "next/link";
import PageSchema from "./components/PageSchema";
import { useEffect, useState } from "react";
import Script from 'next/script';

export default function Home() {
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

  return (
    <>
      <PageSchema
        type="WebPage"
        title="Karina Freitas - Psicóloga - CRP 06/156482"
        description="Atendimento psicológico online para ajudar você a encontrar equilíbrio emocional e qualidade de vida. Especialista em ansiedade, depressão e relacionamentos."
        url="https://www.karinafreitaspsicologa.com.br"
        image="https://www.karinafreitaspsicologa.com.br/psicologa_karina_desktop.jpg"
      />
      {/* Google Analytics - Carregado após a interatividade */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WPDMW2RX4B"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WPDMW2RX4B');
        `}
      </Script>

      <main className="bg-light" style={{ minHeight: "100vh" }}>
        {/* MOBILE: Imagem, botão, texto */}
        <section className="d-block d-md-none py-5" style={{ background: 'rgba(0,0,0,0.1)' }}>
          <div className="container">
            <div>
              <Image
                src="/psicologa_karina_desktop.jpg"
                alt="Karina Freitas - Psicóloga"
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 16 }}
                priority
                loading="eager"
                quality={85}
              />
            </div>
            <div className="my-4 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-white fw-semibold d-inline-block hover-shadow mb-3"
                style={{ 
                  background: "#ddb08f", 
                  fontSize: "clamp(0.95rem, 3vw, 1.1rem)", 
                  padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)", 
                  borderRadius: "8px", 
                  transition: "all 0.3s ease",
                  textDecoration: "none"
                }}
              >
                AGENDAR CONVERSA INICIAL
              </a>
              <div>
                <h1 className="fw-bold mb-4" style={{ fontSize: "clamp(1.5rem, 6vw, 2.2rem)", lineHeight: 1.2, color: '#ddb08f' }}>
                  Muitas vezes o que mais nos machuca são os pensamentos e não o que de fato vivemos.
                </h1>
                <p style={{ color: "#ddb08f", fontSize: "clamp(0.95rem, 3vw, 1.1rem)", lineHeight: 1.6 }}>
                  Karina Freitas<br />
                  PSICÓLOGA CLÍNICA<br />
                  CRP 06/156482
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP: Imagem em tela cheia com texto à esquerda */}
        <section
          id="inicio"
          className="position-relative d-none d-md-flex align-items-start text-white"
          style={{
            minHeight: "100vh",
            height: "100dvh",
            background: "url(/psicologa_karina_desktop.jpg) center center / cover no-repeat",
            padding: "0",
            boxSizing: "border-box",
          }}
        >
          {/* Overlay escuro com opacidade ajustada para melhor legibilidade */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
              zIndex: 1 
            }}
          ></div>
          {/* Container do conteúdo principal */}
          <div 
            className="position-relative w-100" 
            style={{ 
              zIndex: 2,
              maxWidth: "1200px",
              margin: "0",
              padding: "80px 0 0 40px"
            }}
          >
            <div 
              className="text-start"
              style={{
                maxWidth: "600px"
              }}
            >
              {/* Título principal com tamanho responsivo */}
              <h1 
                className="fw-bold mb-4 text-white"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  lineHeight: 1.2
                }}
              >
                Muitas vezes o que mais nos machuca são os pensamentos e não o que de fato vivemos.
              </h1>
              {/* Botão de CTA com estilo responsivo */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-white fw-semibold mb-3 d-inline-block hover-shadow"
                style={{ 
                  background: "#ddb08f", 
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  textDecoration: "none"
                }}
              >
                AGENDAR CONVERSA INICIAL
              </a>
              {/* Informações de contato com estilo responsivo */}
              <p 
                className="mt-3 text-white"
                style={{ 
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  lineHeight: 1.6
                }}
              >
                Karina Freitas<br />
                PSICÓLOGA CLÍNICA<br />
                CRP 06/156482
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Especialidades
            - container: classe do Bootstrap para container responsivo
            - my-5: margem vertical
        */}
        <section id="especialidades" className="container my-5">
          <h2 className="text-center fw-bold mb-5 text-primary fs-3 fs-md-2">
            Especialidades
          </h2>
          {/* Grid de cards
              - row: classe do Bootstrap para linha
              - g-4: gap entre os cards
          */}
          <div className="row g-4">
            {/* Mapeamento das especialidades
                - col-12 col-sm-6 col-lg-4: grid responsivo
                - card: classe do Bootstrap para cards
                - h-100: altura 100%
                - border-0: sem borda
                - shadow-sm: sombra suave
            */}
            {especialidades.map(({ icon, title, desc }, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm ps-3" style={{ borderLeft: "4px solid #2b4c6f", borderRadius: 16 }}>
                  <div className="card-body">
                    <span className="fs-2">{icon}</span>
                    <h3 className="fw-semibold mt-3 fs-5" style={{ color: "#2b4c6f" }}>{title}</h3>
                    <p className="text-secondary mt-2 fs-6">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Benefícios
            - container: classe do Bootstrap para container responsivo
            - my-5: margem vertical
        */}
        <section id="beneficios" className="container my-5">
          <h2 className="text-center fw-bold mb-5 text-primary fs-3 fs-md-2">
            Benefícios que a Psicoterapia pode te ajudar a alcançar
          </h2>
          {/* Container centralizado com largura máxima */}
          <div className="row justify-content-center">
            <div className="col-md-10">
              {/* Card com borda lateral e sombra suave */}
              <div className="card border-0 shadow-sm ps-3" style={{ borderLeft: "4px solid #2b4c6f", borderRadius: 16 }}>
                <div className="card-body fs-6 text-secondary">
                  {/* Lista de benefícios */}
                  <ul className="mb-0">
                    <li>Autoconhecimento e reflexão</li>
                    <li>Redução de sintomas de ansiedade e depressão</li>
                    <li>Melhora da autoestima e autoconfiança</li>
                    <li>Desenvolvimento de habilidades emocionais</li>
                    <li>Melhora nos relacionamentos interpessoais</li>
                    <li>Maior autonomia para lidar com desafios</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Processos
            - container: classe do Bootstrap para container responsivo
            - my-5: margem vertical
        */}
        <section id="processos" className="container my-5">
          <h2 className="text-center fw-bold mb-5 text-primary fs-3 fs-md-2">
            Como funciona meu Atendimento
          </h2>
          {/* Grid responsivo com gap entre os cards */}
          <div className="row g-4">
            {/* Mapeamento dos processos de atendimento
                - col-12 col-sm-6 col-lg-3: grid responsivo (4 cards por linha em desktop)
                - card: classe do Bootstrap para cards
                - h-100: altura 100%
                - border-0: sem borda
                - shadow-sm: sombra suave
            */}
            {processos.map(({ title, desc }, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center" style={{ borderRadius: 12 }}>
                  <div className="card-body">
                    <h3 className="fw-semibold mb-3 text-primary fs-5">{title}</h3>
                    <p className="text-secondary fs-6">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Sobre
            - container: classe do Bootstrap para container responsivo
            - my-5: margem vertical
        */}
        <section id="sobre" className="container my-5">
          <h2 className="text-center fw-bold mb-4 text-primary fs-3 fs-md-2">
            Sobre mim
          </h2>
          {/* Card com sombra suave e bordas arredondadas */}
          <div className="card border-0 shadow-sm p-4" style={{ borderRadius: 12 }}>
            <div className="card-body text-secondary" style={{ lineHeight: 1.8 }}>
              <h3 className="fw-semibold mb-4 text-primary fs-4">Karina Freitas</h3>
              <p>Psicóloga com mais de 8 anos com atuação em clínica, acredito que a terapia é um ato de coragem.</p>
              <p>Meu compromisso é através da terapia gerar acolhimento, fundamentar cada dor e conquista, proporcionando uma imersão em seu bem-estar psicológico.</p>
              <p>Ofereço atendimentos psicológicos online, conte comigo para te apoiar nesta jornada de transformação e crescimento.</p>
            </div>
          </div>
        </section>

        {/* Seção de Contato
            - container: classe do Bootstrap para container responsivo
            - my-5: margem vertical
        */}
        <section id="contato" className="container my-5">
          <h2 className="text-center fw-bold mb-4 text-primary fs-3 fs-md-2">
            Contato
          </h2>
          <div className="card border-0 shadow-sm p-4 text-center" style={{ borderRadius: 12 }}>
            <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn d-flex align-items-center gap-2"
                style={{ 
                  background: "#ddb08f", 
                  color: "#fff", 
                  fontWeight: 600, 
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
              >
                FALAR NO WHATSAPP
              </a>
              <a
                href="https://www.instagram.com/karinafreitaspsicologa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border d-flex align-items-center justify-content-center p-0"
                style={{
                  background: "#fff",
                  color: "#E1306C",
                  border: "1px solid #E1306C",
                  borderRadius: "50%",
                  width: 48,
                  height: 48,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <p className="text-secondary mb-2 fs-6">Ou envie um e-mail para:</p>
            <a
              href="mailto:psicologakarinafreitas@hotmail.com"
              className="fw-medium text-decoration-none"
              style={{ color: "#2b4c6f", fontSize: "1rem" }}
            >
              psicologakarinafreitas@hotmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

{/* Array de especialidades - dados estáticos
    Cada objeto contém:
    - icon: emoji representativo da especialidade
    - title: título da especialidade
    - desc: descrição detalhada dos sintomas/áreas de atuação
*/}
const especialidades = [
  {
    icon: "😰",
    title: "Ansiedade e Estresse",
    desc:
      "Preocupação excessiva com problemas, pânico, insônia e impacto na comunicação interpessoal.",
  },
  {
    icon: "😔",
    title: "Depressão",
    desc:
      "Perda de interesse, fadiga, culpa excessiva, dificuldade em se conectar com os outros.",
  },
  {
    icon: "💼",
    title: "Desafios Profissionais",
    desc:
      "Insatisfação, burnout, problemas de equilíbrio entre vida pessoal e profissional.",
  },
  {
    icon: "🪞",
    title: "Problemas de Autoestima",
    desc:
      "Autocrítica, perfeccionismo, medo de desafios e dificuldades nos relacionamentos.",
  },
  {
    icon: "🤝",
    title: "Problemas de Relacionamento",
    desc:
      "Conflitos, diferenças de valores, ciúmes, inseguranças, e falta de comunicação.",
  },
  {
    icon: "🧠",
    title: "Pensamentos e Emoções",
    desc:
      "Ruminação, pensamento negativo e catastrófico, autocrítica e regulação emocional.",
  },
];

{/* Array de processos - dados estáticos
    Cada objeto contém:
    - title: título do processo/etapa do atendimento
    - desc: descrição detalhada do processo
    Ordem dos processos:
    1. Momento Inicial: primeira conversa e alinhamento
    2. Encontros Semanais: frequência das sessões
    3. Duração do Tratamento: flexibilidade conforme necessidade
    4. Comprometimento: importância da dedicação mútua
*/}
const processos = [
  {
    title: "Momento Inicial",
    desc:
      "Primeira conversa para conhecer suas questões e alinhar expectativas terapêuticas.",
  },
  {
    title: "Encontros Semanais",
    desc:
      "Sessões individuais remotas com duração média de 50 minutos.",
  },
  {
    title: "Duração do Tratamento",
    desc:
      "Varia conforme necessidades e objetivos individuais.",
  },
  {
    title: "Comprometimento",
    desc:
      "Dedicação mútua para reflexões profundas e mudanças significativas.",
  },
];
