import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mahesa AI',
    short_name: 'Mahesa',
    description: 'Nisi est minim nulla culpa elit dolore consectetur dolore ex minim.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#528BFF',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}