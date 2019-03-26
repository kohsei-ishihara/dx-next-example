import React from 'react'
import Head from 'next/head'
import CheckUndefined from '../functions/CheckUndefined'

class JsonLd extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const jsonDLObj = []

    if (this.props.contents.news_article === true) {
      const news_article = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': CheckUndefined(this.props.contents.url) || process.env.HOST
        },
        headline: this.props.contents.title,
        image: [
          CheckUndefined(this.props.contents.image) ||
            process.env.IMAGE_ROOT + '/' + process.env.OGP_IMAGE,
          CheckUndefined(this.props.contents.image) ||
            process.env.IMAGE_ROOT + '/' + process.env.OGP_IMAGE,
          CheckUndefined(this.props.contents.image) ||
            process.env.IMAGE_ROOT + '/' + process.env.OGP_IMAGE
        ],
        datePublished: '2015-02-05T08:00:00+08:00',
        dateModified: '2015-02-05T09:20:00+08:00',
        author: {
          '@type': 'Organization',
          name: 'Speee, Inc.'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Speee, Inc.',
          logo: {
            '@type': 'ImageObject',
            url: 'https://google.com/logo.jpg'
          }
        },
        description: this.props.contents.description
      }

      jsonDLObj.push(news_article)
    }

    if (this.props.contents.bread_crumb === true) {
      let pages = []
      if (this.props.contents.bread_crumb_list[0]) {
        let position = 1
        this.props.contents.bread_crumb_list.forEach(element => {
          position++
          pages.push({
            '@type': 'ListItem',
            position: position,
            name: element.name,
            item: process.env.HOST + '/' + element.item
          })
        })
      }
      const bread_crumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: process.env.HOST
          },
          ...pages
        ]
      }
      jsonDLObj.push(bread_crumb)
    }

    return (
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonDLObj)}</script>
      </Head>
    )
  }
}

export { JsonLd }
