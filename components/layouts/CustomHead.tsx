import React from 'react'
import Head from 'next/head'
import CheckUndefined from '../functions/CheckUndefined'

class CustomHead extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Head>
        <title>{this.props.contents.title}</title>
        {/* 必須 */}
        <meta name="description" content={this.props.contents.description} />
        <meta name="keywords" content="" />
        <meta property="og:title" content={this.props.contents.title} />
        <meta
          property="og:type"
          content={
            CheckUndefined(this.props.contents.type) || process.env.OGP_TYPE
          }
        />
        <meta
          property="og:url"
          content={CheckUndefined(this.props.contents.url) || process.env.HOST}
        />
        <meta
          property="og:image"
          content={
            CheckUndefined(this.props.contents.image) ||
            process.env.IMAGE_ROOT + '/' + process.env.OGP_IMAGE
          }
        />

        {/* 任意 */}
        <meta property="og:site_name" content={process.env.OGP_SITE_NAME} />
        <meta
          property="og:description"
          content={this.props.contents.description}
        />
        <meta property="og:locale" content={process.env.OGP_LOCALE} />
        {generateLocaleALt(process.env.OGP_LOCALE_ALT)}

        {/* FB、twitter */}
        {(() => {
          if (process.env.OGP_FB_APP_ID) {
            return (
              <meta property="fb:app_id" content={process.env.OGP_FB_APP_ID} />
            )
          }
          if (process.env.OGP_FB_ADMINS) {
            return (
              <meta property="fb:admins" content={process.env.OGP_FB_ADMINS} />
            )
          }
        })()}
        <meta name="twitter:card" content={process.env.OGP_TWITTER_CARD} />
        {(() => {
          if (process.env.OGP_TWITTER_ID) {
            return (
              <>
                <meta
                  name="twitter:site"
                  content={process.env.OGP_TWITTER_ID}
                />
                <meta
                  name="twitter:creator"
                  content={process.env.OGP_TWITTER_ID}
                />
              </>
            )
          }
        })()}
      </Head>
    )
  }
}

const generateLocaleALt = locales => {
  if (locales) {
    const value = JSON.parse(locales).map(locale => (
      <meta property="og:locale:alternative" content={locale} />
    ))
    return <>{value}</>
  }
}

export default CustomHead
