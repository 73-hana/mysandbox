// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  app: {
    baseURL: '/myblog/'
  },
  content: {
    experimental: {
      search: true,
    },
    markdown: {
      anchorLinks: false,
    }
  }
})
