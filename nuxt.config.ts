// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  app: {
    baseURL: '/mysandbox/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/mysandbox/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css', integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV', crossorigin: 'anonymous'}
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js', defer: true, integrity: 'sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8', crossorigin: 'anonymous'}
      ]
    }
  },
  content: {
    experimental: {
      search: true,
    },
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ],
    },
    highlight: {
      theme: 'github-light'
    }
  }
})
