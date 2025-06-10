import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 mb-4">404 - Página não encontrada</h1>
      <p className="lead mb-4">A página que você procura não existe ou foi movida.</p>
      <Link href="/" className="btn btn-primary">
        Voltar para a página inicial
      </Link>
    </div>
  );
} 