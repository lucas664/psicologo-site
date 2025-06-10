'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Remove a barra inicial e divide o caminho em segmentos
  const segments = pathname.split('/').filter(segment => segment);
  
  // Cria o array de breadcrumbs
  const breadcrumbs = segments.map((segment, index) => {
    // Constrói o caminho até este segmento
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    
    // Formata o texto do breadcrumb
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      label,
      path,
      isLast: index === segments.length - 1
    };
  });

  // Adiciona a página inicial
  breadcrumbs.unshift({
    label: 'Início',
    path: '/',
    isLast: segments.length === 0
  });

  return (
    <nav aria-label="breadcrumb" className="bg-light py-2">
      <div className="container">
        <ol className="breadcrumb mb-0">
          {breadcrumbs.map(({ label, path, isLast }, index) => (
            <li
              key={path}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                <span>{label}</span>
              ) : (
                <Link href={path} className="text-decoration-none">
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
} 