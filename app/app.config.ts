export default defineAppConfig({
  ui: {
    icons: {
      loading: 'i-lucide-loader-circle',
    },
    button: {
      defaultVariants: {
        color: 'neutral',
      },
      slots: {
        base: 'cursor-pointer',
      },
    },
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
  },
  seo: {
    title: 'Supersaas - The fastest way to build fullstack apps with Nuxt 4',
    description:
      'Everything you need to build scalable SaaS applications: Auth, Teams, Storage, Admin, and more - pre-configured and production-ready.',
    image: 'https://supersaas.dev/banner.png',
    url: 'https://supersaas.dev',
  },
});
