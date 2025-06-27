import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemapPlugin from 'vite-plugin-sitemap'
import { webSlugs, gameSlugs } from './src/data/projectSlugs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin({
    hostname: 'https://www.marcbasas.com',
    dynamicRoutes: ["/about"]
    .concat(
      ...webSlugs.map(slug => `/project/${slug}`),
      ...gameSlugs.map(slug => `/project/${slug}`)
    ),
    exclude: ['/404',
        '/404.html',
        '/games/Constelations/build/web',
        '/games/ProbaWeb/build/web'],
  })],
  server: {
    host: true,
    port: 5173, 
  },
  base: '/',
})
