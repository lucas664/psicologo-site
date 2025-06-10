'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 mb-4">500 - Erro interno do servidor</h1>
      <p className="lead mb-4">Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</p>
      <div className="d-flex justify-content-center gap-3">
        <button onClick={reset} className="btn btn-primary">
          Tentar novamente
        </button>
        <Link href="/" className="btn btn-outline-primary">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
} 