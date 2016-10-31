require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Golgi Studio',
    description: 'Crafting software to help you make the world a better place.',
    head: {
      titleTemplate: 'Golgi Studio: %s',
      meta: [
        {name: 'description', content: 'Crafting software to help you make the world a better place.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Golgi Studio'},
        {property: 'og:image', content: '/favicon.ico'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Golgi Studio'},
        {property: 'og:description', content: 'All the modern best practices in one example.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@erikras'},
        {property: 'og:creator', content: '@erikras'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
