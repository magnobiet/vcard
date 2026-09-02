import type { MetadataRoute } from 'next';
import { environment } from '~/environment';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: environment.APP_TITLE,
    short_name: environment.APP_SHORT_TITLE,
    description: environment.APP_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
