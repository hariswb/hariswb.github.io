export default {
    components: true,
    css: [
        '@/assets/css/index.css',
      ],
    
    modules: [
        '@nuxt/content'
    ],
    content: {
    // Options
    },
    target: 'static',
    generate: {
      fallback: '404.html'
    }
  }