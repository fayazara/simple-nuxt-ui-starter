// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/ui-pro',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      {
        name: 'Bricolage Grotesque',
        provider: 'google',
        weights: ['600', '700', '800'],
      },
      {
        name: 'Geist',
        provider: 'google',
        weights: ['400', '500', '600', '700', '800'],
      },
    ],
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
        highlight: {
          theme: 'github-light',
        },
      },
    },
  },

  icon: {
    clientBundle: {
      scan: true,
    },
    serverBundle: 'local',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './app/assets/icons',
      },
    ],
  },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ['/docs/*'],
        },
      },
    },
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started' },
    '/docs/**': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/': { prerender: true },
  },

  mdc: {
    highlight: {
      noApiRoute: false,
    },
  },

  site: {
    url: 'https://supersaas.dev',
    name: 'Supersaas',
    description:
      'Supersaas is a fullstack SaaS starter kit made with Nuxt 4, Tailwind CSS v4, Nuxt UI, Typescript, Drizzle ORM and Postgres, Drizzle ORM, Stripe for payments, and more.',
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-27',
});
