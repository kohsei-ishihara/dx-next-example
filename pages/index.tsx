import React, { Component } from 'react'
import { SkipToContent, Header, Footer } from '../components/layouts/Layouts'
import Grid from '@material-ui/core/Grid'
import NextSeo from 'next-seo'
import { checkUndefined } from '../components/functions/functions'
import { IndexMain } from '../components/index/IndexMain'
import { withRouter } from 'next/router'
import { BreadCrumb } from '../components/layouts/BreadCrumb'
import { JsonLd } from '../components/layouts/JsonLd'
import fetch from 'isomorphic-unfetch'

class Index extends Component {
  static async getInitialProps() {
    const fetchData = { data: null, error: null, loading: true }

    try {
      fetchData.data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then(r => r.json())
    } catch (err) {
      fetchData.error = err
    }
    fetchData.loading = false

    return {
      fetchData: fetchData
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const contents = {
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
            page={checkUndefined(this.props.router.query.page) ? this.props.router.query.page : 1}
            title={contents.title}
            description={contents.description}
            fetchData={this.props.fetchData}
          />
          <Footer />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(Index)
