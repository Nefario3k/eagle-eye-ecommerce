import colors from 'vuetify/es5/util/colors'
export default {
  target: 'static',
  router: {
    base: '/eagle-eye-ecommerce/'
  },
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - EagleEye',
    title: 'EagleEye',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap", rel: "stylesheet" }
    ],
    script: [
      {
        src: "/scripts/jquery-3.3.1.min.js",
        type: "text/javascript",
        body: true,
        defer: true,
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/main.css',
    '~/static/css/responsive.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/helpers.js',
    '~/plugins/OwlCarousel.js',
    '~/plugins/AOS.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
