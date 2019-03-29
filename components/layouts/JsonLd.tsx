import React from 'react'
import Head from 'next/head'
import { checkUndefined } from '../../functions/functions'

const JsonLd = ({ contents }) => {
  const jsonDLObj = []

  if (contents.news_article === true) {
    const news_article = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': checkUndefined(contents.url) || process.env.HOST
      },
      headline: contents.title,
      image: [
        checkUndefined(contents.image) ||
          process.env.IMAGE_ROOT + '/' + process.env.OGP_IMAGE,
        checkUndefined(contents.image) ||
          process.env.IMAGE_ROOT + '/' + process.env.OGP_IMAGE,
        checkUndefined(contents.image) ||
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
      description: contents.description
    }

    jsonDLObj.push(news_article)
  }

  if (contents.bread_crumb === true) {
    let pages = []
    if (contents.bread_crumb_list[0]) {
      let position = 1
      contents.bread_crumb_list.forEach(element => {
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

export { JsonLd }
