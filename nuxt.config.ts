// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  app: {
    baseURL: '/mysandbox/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/mysandbox/favicon.ico' }
      ],
    }
  },
  content: {
    experimental: {
      search: true,
    },
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: 'github-light'
    }
  }
})
