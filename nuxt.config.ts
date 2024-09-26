// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/eslint-module",
    "@formkit/auto-animate",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Amatic SC": true,
      latin: true,

      // specific font weights
      Lato: [400, 700],
    },
  },
});
