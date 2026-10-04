// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // %siteName was referenced but never defined (it came from
      // @nuxtjs/seo, which was never enabled), so tabs showed it literally.
      title: 'soundboard',
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        siteName: 'arbxz',
        separator: '|',
      },
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@formkit/auto-animate',
    '@nuxt/icon',
  ],
})
