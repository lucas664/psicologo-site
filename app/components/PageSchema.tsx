'use client';

interface PageSchemaProps {
  type: 'WebPage' | 'BlogPosting' | 'Service' | 'Person';
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url: string;
  };
}

export default function PageSchema({
  type,
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: PageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    ...(datePublished && {
      datePublished,
    }),
    ...(dateModified && {
      dateModified,
    }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author.name,
        url: author.url,
      },
    }),
    publisher: {
      '@type': 'Organization',
      name: 'Karina Freitas - Psicóloga',
      url: 'https://www.karinafreitaspsicologa.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.karinafreitaspsicologa.com.br/psicologa_karina.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 