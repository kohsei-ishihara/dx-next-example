import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions/actions'
import CustomHead from '../components/layouts/CustomHead'
import JsonLd from '../components/layouts/JsonLd'
import BreadCrumb from '../components/layouts/BreadCrumb'
import { SkipToContent, Header, Footer } from '../components/layouts/Layouts'
import IndexMain from '../components/index/IndexMain'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'next/router'
import { inspect } from 'util'
import checkUndefined from '../components/functions/CheckUndefined'
import NextSeo from 'next-seo'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
    return { isServer, pageLog: inspect(query.page, true, 0) }
  }

  state = {
    open: false
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  }
  handleOpenLink = (href: string) => {
    window.open(href)
    return false
  }

  render() {
    {
      /* type|url|image はデフォルト値有り*/
    }
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
export default withRouter(connect()(Index))
