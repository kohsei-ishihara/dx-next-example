import React from 'react'
import { connect } from 'react-redux'
import {
  loadData2,
  startClock,
  tickClock,
  setPageNumber
} from '../actions/actions'
import CustomHead from '../components/layouts/CustomHead'
import JsonLd from '../components/layouts/JsonLd'
import SkipToContent from '../components/layouts/SkipToContent'
import Header from '../components/layouts/Header'
import BreadCrumb from '../components/layouts/BreadCrumb'
import Footer from '../components/layouts/Footer'
import IndexMain from '../components/index/IndexMain'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'next/router'
import { inspect } from 'util'
import checkUndefined from '../components/functions/CheckUndefined'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx
    store.dispatch(tickClock(isServer))
    store.dispatch(setPageNumber(query.page || '1'))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData2())
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

  componentDidMount() {
    this.props.dispatch(startClock())
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

    const json_contents = {
      news_article: true,
      bread_crumb: true,
      bread_crumb_list: [{ name: 'Index page', item: 'index' }],
      ...contents
    }

    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <CustomHead contents={contents} />
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
