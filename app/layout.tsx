import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import Breadcrumbs from "./components/Breadcrumbs";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.karinafreitaspsicologa.com.br'),
  title: "Karina Freitas - Psicóloga - CRP 06/156482",
  description: "Atendimento psicológico online para ajudar você a encontrar equilíbrio emocional e qualidade de vida. Especialista em ansiedade, depressão e relacionamentos.",
  keywords: "psicóloga, psicologia online, terapia online, ansiedade, depressão, relacionamentos, CRP 06/156482",
  authors: [{ name: "Karina Ribeiro de Freitas" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.karinafreitaspsicologa.com.br",
    title: "Karina Freitas - Psicóloga - CRP 06/156482",
    description: "Atendimento psicológico online para ajudar você a encontrar equilíbrio emocional e qualidade de vida.",
    siteName: "Karina Freitas - Psicóloga",
    images: [
      {
        url: "/psicologa_karina.png",
        width: 1200,
        height: 630,
        alt: "Karina Freitas - Psicóloga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karina Freitas - Psicóloga - CRP 06/156482",
    description: "Atendimento psicológico online para ajudar você a encontrar equilíbrio emocional e qualidade de vida.",
    images: ["/psicologa_karina.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "googleb1c361154939a5c2.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={poppins.className}>
        <JsonLd />
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
        <Header />
        <Breadcrumbs />
        <div style={{ marginTop: 80 }}>
          {children}
        </div>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
