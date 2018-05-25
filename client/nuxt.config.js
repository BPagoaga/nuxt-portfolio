module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Bernard Pagoaga, Javascript Front-End Web Developer'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/pwa'],
  css: [
    'bulma',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ]
}
