const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

const nextConfig = {
  workboxOpts: {
    swDest: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /.(png|jpg|jpeg|svg|gif)$/,
        handler: 'cacheFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [...config.plugins]
    return config
  }
}

module.exports = withOffline(withCSS(withTypescript(nextConfig)))
