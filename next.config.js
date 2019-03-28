const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

const nextConfig = {
  crossOrigin: 'anonymous',
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
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    return config
  }
}

module.exports = withOffline(withCSS(withTypescript(nextConfig)))
