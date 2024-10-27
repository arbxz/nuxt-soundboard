// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s %separator %siteName'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/eslint-module',
    '@formkit/auto-animate',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@nuxthub/core'
  ]
})
