const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const compression = require('compression')
const path = require('path')
const { join } = require('path')

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(
      compression({
        threshold: 0,
        level: 9,
        memLevel: 9
      })
    )

    server.get('/service-worker.js', (req, res) => {
      const filePath = join(__dirname, '.next', 'service-worker.js')
      app.serveStatic(req, res, filePath)
    })

    server.get('/:page', (req, res) => {
      if (!isNaN(req.params.page)) {
        const actualPage = '/index'
        const queryParams = { page: req.params.page }
        app.render(req, res, actualPage, queryParams)
      } else {
        const rootStaticFiles = [
          'sitemap.xml',
          'robots.txt',
          'browserconfig.xml'
        ]
        if (rootStaticFiles.indexOf(req.params.page) > -1) {
          const actualPage = path.resolve('./static/' + req.params.page)
          app.serveStatic(req, res, actualPage)
        } else {
          handle(req, res)
        }
      }
    })

    server.get('/:app/:page', (req, res) => {
      if (!isNaN(req.params.page)) {
        const actualPage = '/' + req.params.app
        const queryParams = { page: req.params.page }
        app.render(req, res, actualPage, queryParams)
      } else {
        handle(req, res)
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
