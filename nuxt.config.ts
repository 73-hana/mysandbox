// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  app: {
    baseURL: '/myblog/'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  content: {
    experimental: {
      search: true,
    },
    markdown: {
      anchorLinks: false,
    }
  }
})
