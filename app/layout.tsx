import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Karina Freitas - Psicóloga",
  description: "Atendimento psicológico online para ajudar você a encontrar equilíbrio emocional e qualidade de vida.",
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
      </head>
      <body className={poppins.className}>
        <Header />
        <div style={{ marginTop: 80 }}>
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
