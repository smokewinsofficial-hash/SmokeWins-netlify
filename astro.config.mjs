// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smokewins.com',
  trailingSlash: 'always', // vaihtoehdot: 'always' | 'never' | 'ignore'
  integrations: [sitemap()],
});
