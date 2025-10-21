// @ts-check
import { defineConfig } from 'astro/config';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import preact from '@astrojs/preact';

process.env.ASTRO_TELEMETRY_DISABLED = '1';

// https://astro.build/config
export default defineConfig({
  site: "https://eltrevii.github.io/megathread",
  integrations: [sentry({
    telemetry: false
  }), spotlightjs(), preact()]
});