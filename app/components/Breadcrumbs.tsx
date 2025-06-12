'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    return {
      href,
      label: label === 'Blog' ? 'Blog' : label
    };
  });

  return (
    <nav aria-label="breadcrumb" className="bg-light py-2">
      <div className="container">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <li 
              key={crumb.href} 
              className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
            >
              {index === breadcrumbs.length - 1 ? (
                crumb.label
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
} 