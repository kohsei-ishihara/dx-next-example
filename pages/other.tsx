import React, { Component } from 'react'
import { SkipToContent, Header, Footer } from '../components/layouts/Layouts'
import Grid from '@material-ui/core/Grid'
import NextSeo from 'next-seo'
import { checkUndefined } from '../functions/functions'
import { OtherMain } from '../components/other/OtherMain'
import { withRouter } from 'next/router'
import { BreadCrumb } from '../components/layouts/BreadCrumb'
import { JsonLd } from '../components/layouts/JsonLd'

class Other extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    console.log(this.props.router.query.page)

    const contents = checkUndefined(this.props.router.query.page)
      ? {
          title: `Otherページタイトルだよ ページ${
            this.props.router.query.page
          }`,
          description: `Otherページ説明だよ ページ${
            this.props.router.query.page
          }`
        }
      : {
          title: `Otherページタイトルだよ`,
          description: `Otherページ説明だよ`
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
      bread_crumb_list: [{ name: 'Other page', item: 'other' }],
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
          <OtherMain
            title={contents.title}
            description={contents.description}
          />
          <Footer />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(Other)
