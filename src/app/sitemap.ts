import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ideasassemble.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/build',
    '/logo-design',
    '/website-design',
    '/animation',
    '/brand',
    '/ecommerce',
    '/portfolio',
    '/privacy-policy',
    '/terms-of-service',
    '/chatbot-development',
  ]
 
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
