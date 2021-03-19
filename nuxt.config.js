export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'senseitime',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/composition-api.ts' },
    { src: '~/plugins/firebase.ts' },
  ],
  env: {
    FIREBASE_API_KEY: 'AIzaSyA3PqKsxdRHSdbO6IuferqfKC7rMXuZCCU',
    FIREBASE_AUTH_DOMAIN: 'senseitime-a0c8d.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'senseitime-a0c8d',
    FIREBASE_STORAGE_BUCKET: 'senseitime-a0c8d.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '409589300715',
    FIREBASE_APP_ID: '1:409589300715:web:985f3841adca55c273adae',
    FIREBASE_MEASUREMENT_ID: 'G-MYE9M95JJ2',
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
}
