export default {
    head: {
      titleTemplate: '%s hariswb',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ]
    },
    components: true,
    css: [
        '@/assets/css/index.css',
      ],
    modules: [
        '@nuxt/content'
    ],
    content: {
    },
    target: 'static',
    generate: {
      fallback: '404.html'
    }
}