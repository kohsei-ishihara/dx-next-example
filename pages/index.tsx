import React, { Component } from 'react'
import { SkipToContent, Header, Footer } from '../components/layouts/Layouts'
import Grid from '@material-ui/core/Grid'
import NextSeo from 'next-seo'
import { checkUndefined } from '../components/functions/functions'
import { IndexMain } from '../components/index/IndexMain'
import { withRouter } from 'next/router'
import { BreadCrumb } from '../components/layouts/BreadCrumb'
import { JsonLd } from '../components/layouts/JsonLd'

class Index extends Component {
  render() {
    const contents = checkUndefined(this.props.router.query.page)
      ? {
          title: `ページタイトルだよ ページ${this.props.router.query.page}`,
          description: `ページ説明だよ ページ${this.props.router.query.page}`
        }
      : {
          title: `ページタイトルだよ`,
          description: `ページ説明だよ`
        }

    const SEO = {
      ...contents,
      openGraph: {
        ...contents
      }
    }

    const json_contents = {
      news_article: true,
      bread_crumb: true,
      bread_crumb_list: [{ name: 'Index page', item: 'index' }],
      ...contents
    }

    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <NextSeo config={SEO} />
        <JsonLd contents={json_contents} />
        <Grid item xs={12}>
          <SkipToContent />
          <Header />
          <BreadCrumb />
          <IndexMain
            title={contents.title}
            description={contents.description}
          />
          <Footer />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(Index)
