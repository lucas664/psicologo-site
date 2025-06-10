'use client';

import Script from 'next/script';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Karina Ribeiro de Freitas - Psicóloga',
    image: 'https://www.karinafreitaspsicologa.com.br/psicologa_karina.png',
    description: 'Atendimento psicológico online para ajudar você a encontrar equilíbrio emocional e qualidade de vida.',
    url: 'https://www.karinafreitaspsicologa.com.br',
    telephone: '+5511976027447',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'SP',
      addressLocality: 'São Paulo'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5505',
      longitude: '-46.6333'
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.instagram.com/psicologakarinafreitas'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Brasil'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Psicologia',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Psicoterapia Online',
            description: 'Atendimento psicológico online para ansiedade, depressão e relacionamentos.'
          }
        }
      ]
    }
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 