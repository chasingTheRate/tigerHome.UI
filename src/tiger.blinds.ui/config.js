
module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV,
  development: {
    server: {
      host: '104.187.102.97',
      port: '8081'
    }
  },
  production: {
    server: {
      host: '104.187.102.97',
      port: '8081'
    }
  }
}