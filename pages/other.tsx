import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions/actions'
import { SkipToContent, Header, Footer } from '../components/layouts/Layouts'

import { BreadCrumb } from '../components/layouts/BreadCrumb'
import { OtherMain } from '../components/other/OtherMain'
import { withRouter } from 'next/router'
import Grid from '@material-ui/core/Grid/Grid'
import { JsonLd } from '../components/layouts/JsonLd'
import checkUndefined from '../components/functions/CheckUndefined'

class Other extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
    return { isServer }
  }

  render() {
    {
      /* type|url|image はデフォルト値有り*/
    }
    const contents = checkUndefined(this.props.router.query.page)
      ? {
          title: `ページタイトルだよ Other ページ${
            this.props.router.query.page
          }`,
          description: `ページ説明だよ Other ページ${
            this.props.router.query.page
          }`
        }
      : {
          title: `ページタイトルだよ Other`,
          description: `ページ説明だよ Other`
        }

    const json_contents = {
      news_article: true,
      bread_crumb: true,
      bread_crumb_list: [{ name: 'Other page', item: 'other' }],
      ...contents
    }

    return (
      <Grid container direction="row" justify="center" alignItems="center">
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
export default withRouter(connect()(Other))
