import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.karinafreitaspsicologa.com.br';
  
  // Páginas estáticas
  const staticPages = [
    '',
    '/sobre',
    '/especialidades',
    '/contato',
    '/blog',
    '/blog/autoconhecimento',
    '/blog/ansiedade',
    '/blog/depressao',
    '/blog/relacionamentos',
    '/blog/desenvolvimento-pessoal',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticPages];
} 