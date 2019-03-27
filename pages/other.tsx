import React, { Component } from 'react'
import { SkipToContent, Header, Footer } from '../components/layouts/Layouts'
import { CounterConsumer } from '../components/CounterProvider'
import Grid from '@material-ui/core/Grid'
import NextSeo from 'next-seo'
import CheckUndefined from '../components/functions/CheckUndefined'
import { OtherMain } from '../components/other/OtherMain'
import { withRouter } from 'next/router'
import { BreadCrumb } from '../components/layouts/BreadCrumb'
import { JsonLd } from '../components/layouts/JsonLd'

class Other extends Component {
  render() {
    console.log(this.props.router.query.page)

    const contents = CheckUndefined(this.props.router.query.page)
      ? {
        title: `Otherページタイトルだよ ページ${this.props.router.query.page}`,
        description: `Otherページ説明だよ ページ${this.props.router.query.page}`
      }
      : {
        title: `Otherページタイトルだよ`,
        description: `Otherページ説明だよ`
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
      bread_crumb_list: [{ name: 'Other page', item: 'other' }],
      ...contents
    }

    return (
      <CounterConsumer>
        {({ count, increaseBy, reset }) => (
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
              <section>
                <p>Counter: {count}</p>
                <button onClick={reset}>reset</button>
                <button onClick={() => {
                  increaseBy(15)
                }}>Increase By 15</button>
              </section>
              <Footer />
            </Grid>
          </Grid>
        )}
      </CounterConsumer>
    )
  }
}

export default withRouter(Other)

