import React, { Component } from 'react'
import { SkipToContent, Header, Footer } from '../components/layouts/Layouts'
import { CounterConsumer } from '../components/CounterProvider'
import Grid from '@material-ui/core/Grid'
import NextSeo from 'next-seo'
import CheckUndefined from '../components/functions/CheckUndefined'
import { IndexMain } from '../components/index/IndexMain'
import { withRouter } from 'next/router'
import { BreadCrumb } from '../components/layouts/BreadCrumb'
import { JsonLd } from '../components/layouts/JsonLd'

class Index extends Component {
  render() {
    console.log(this.props.router.query.page)

    const contents = CheckUndefined(this.props.router.query.page)
      ? {
          title: `ページタイトルだよ ページ${this.props.router.query.page}`,
          description: `ページ説明だよ ページ${this.props.router.query.page}`
        }
      : {
          title: `ページタイトルだよ`,
          description: `ページ説明だよ`
        }

    const SEO = {
      noindex: true,
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
      <CounterConsumer>
        {({ count, increase, decrease }) => (
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
              <section>
                <p>Counter: {count}</p>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
              </section>
              <Footer />
            </Grid>
          </Grid>
        )}
      </CounterConsumer>
    )
  }
}

export default withRouter(Index)