import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-light" style={{ minHeight: "100vh" }}>
      {/* INÍCIO */}
      <section
        id="inicio"
        className="d-flex flex-column justify-content-start align-items-start"
        style={{
          minHeight: "100vh",
          background:
            "url(/psicologa_karina.png) top center / cover no-repeat, var(--background)",
          position: "relative",
        }}
      >
        <div className="container mt-4 px-3 px-md-5 text-white" style={{ maxWidth: 700 }}>
          <h1 className="fw-bold fs-4 fs-md-1 mb-3">
            Muitas vezes o que mais nos machuca são os pensamentos e não o que de fato vivemos.
          </h1>
          <a
            href="http://wa.me/5511976027447"
            target="_blank"
            rel="noopener"
            className="btn text-white fw-semibold mb-3"
            style={{ background: "#ddb08f", fontSize: 16 }}
          >
            AGENDAR CONVERSA INICIAL
          </a>
          <p className="text-white" style={{ color: "#ddb08f", fontSize: "1rem" }}>
            Karina Freitas<br />
            PSICÓLOGA CLÍNICA<br />
            CRP 06/156482
          </p>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="container my-5">
        <h2 className="text-center text-md-end fw-bold mb-5" style={{ color: "#2b4c6f", fontSize: 32 }}>
          Especialidades
        </h2>
        <div className="row g-4">
          {especialidades.map(({ icon, title, desc }, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-sm ps-3"
                style={{ borderLeft: "4px solid #2b4c6f", borderRadius: 16 }}
              >
                <div className="card-body">
                  <span style={{ fontSize: 32 }}>{icon}</span>
                  <h3 className="fw-semibold mt-3" style={{ color: "#2b4c6f", fontSize: 22 }}>
                    {title}
                  </h3>
                  <p className="text-secondary mt-2">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="container my-5">
        <h2 className="text-center text-md-end fw-bold mb-5" style={{ color: "#2b4c6f", fontSize: 32 }}>
          Benefícios que a Psicoterapia pode te ajudar a alcançar
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="card border-0 shadow-sm ps-3"
              style={{ borderLeft: "4px solid #2b4c6f", borderRadius: 16 }}
            >
              <div className="card-body fs-5 text-secondary">
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

      {/* PROCESSOS */}
      <section id="processos" className="container my-5">
        <h2 className="text-center text-md-end fw-bold mb-5" style={{ color: "#2b4c6f", fontSize: 32 }}>
          Como funciona meu Atendimento
        </h2>
        <div className="row g-4">
          {processos.map(({ title, desc }, index) => (
            <div key={index} className="col-md-3 col-12">
              <div className="card h-100 border-0 shadow-sm text-center" style={{ borderRadius: 12 }}>
                <div className="card-body">
                  <h3 className="fw-semibold mb-3" style={{ color: "#2b4c6f", fontSize: 24 }}>{title}</h3>
                  <p className="text-secondary">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="container my-5">
        <h2 className="text-center text-md-end fw-bold mb-4" style={{ color: "#2b4c6f", fontSize: 32 }}>
          Sobre mim
        </h2>
        <div className="card border-0 shadow-sm p-4" style={{ borderRadius: 12 }}>
          <div className="card-body text-secondary" style={{ lineHeight: 1.8 }}>
            <h3 className="fw-semibold mb-4" style={{ color: "#2b4c6f", fontSize: 28 }}>
              Karina Freitas
            </h3>
            <p>
              Com mais de 6 anos de formação em Psicologia e uma trajetória marcada por constante
              aperfeiçoamento em Psicanálise, acredito que a terapia é um ato de coragem e
              autocompaixão.
            </p>
            <p>
              Meu compromisso é proporcionar uma psicoterapia ética, acolhedora e fundamentada, onde cada
              encontro é uma oportunidade para o autoconhecimento.
            </p>
            <p>
              Será uma honra caminhar ao seu lado nessa jornada de transformação e crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="container my-5">
        <h2 className="text-center text-md-end fw-bold mb-4" style={{ color: "#2b4c6f", fontSize: 32 }}>
          Contato
        </h2>
        <div className="card border-0 shadow-sm p-4 text-center" style={{ borderRadius: 12 }}>
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <a
              href="https://wa.me/5511976027447"
              target="_blank"
              className="btn d-flex align-items-center gap-2"
              style={{ background: "#25D366", color: "#fff", fontWeight: 600, fontSize: 18 }}
            >
              FALAR NO WHATSAPP
            </a>
            <a
              href="https://www.instagram.com/karinafreitaspsicologa"
              target="_blank"
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
              {/* Ícone Instagram */}
            </a>
          </div>
          <p className="text-secondary mb-2 fs-5">Ou envie um e-mail para:</p>
          <a
            href="mailto:lucas.gamez@hotmail.com"
            className="fw-medium"
            style={{ color: "#2b4c6f", fontSize: 18, textDecoration: "none" }}
          >
            lucas.gamez@hotmail.com
          </a>
        </div>
      </section>
    </main>
  );
}

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
