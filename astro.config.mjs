// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TÄRKEÄ: käytä tuotannon täyttä URL:ia https-skeemalla
  site: 'https://smokewins.com',

  integrations: [
    sitemap({
      // (valinnainen) Sulje pois reittejä sitemäpistä
      // filter: (page) => !['/404', '/dev-notes'].includes(page),
      // (valinnainen) Jos haluat lisätä myös manuaalisia sivuja:
      // customPages: ['https://smokewins.com/some-external-page'],
      // (valinnainen) i18n-asetukset, jos lisäät useita kieliä myöhemmin.
    })
  ],
});
