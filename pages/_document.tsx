import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import JssProvider from 'react-jss/lib/JssProvider'
import flush from 'styled-jsx/server'
import getPageContext from '../components/functions/getPageContext'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static getInitialProps: (ctx: any) => any

  render() {
    const { pageContext, styleTags } = this.props

    return (
      <html lang="ja-JP" dir="ltr">
        <Head prefix="og: http://ogp.me/ns#">
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
          />
          <meta name="google" value="notranslate" />
          <meta
            name="format-detection"
            content="telephone=no,email=no,address=no"
          />
          <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          />
          <meta
            name="msapplication-TileColor"
            content={pageContext.theme.palette.primary.main}
          />
          <meta
            name="msapplication-TileImage"
            content="/static/images/icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/images/icon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/images/icon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/images/icon-16x16.png"
          />
          <link
            rel="manifest"
            type="application/ld+json"
            href="/static/site.webmanifest"
          />
          {/*
          amp用
          <link rel="canonical" href="xxx.html">
          html用
          <link rel="amphtml" href="xxx.amp.html">
          */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          {styleTags}
          <script
            async
            src={
              'https://www.googletagmanager.com/gtag/js?id=' + process.env.GA_ID
            }
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            function gtagPageview(pathname){gtag('config', '${
              process.env.GA_ID
            }', {'page_path': pathname});}
            window['ga-disable-${process.env.GA_ID}'] = ${process.env
                .NODE_ENV === 'development'};
            gtag('js', new Date());`
            }}
          />
          <script
            async
            src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
          />
          <noscript id="jss-insertion-point" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  const pageContext = getPageContext()
  const sheet = new ServerStyleSheet()
  const page = ctx.renderPage(Component => props =>
    sheet.collectStyles(
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <Component pageContext={pageContext} {...props} />
      </JssProvider>
    )
  )
  const styleTags = sheet.getStyleElement()
  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString()
          }}
        />
        {flush() || null}
      </React.Fragment>
    ),
    styleTags
  }
}

export default MyDocument
