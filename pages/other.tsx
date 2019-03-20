import React from 'react'
import { connect } from 'react-redux'
import {loadData, setPageNumber, startClock, tickClock} from '../actions/actions'
import SkipToContent from '../components/layouts/SkipToContent'
import Header from '../components/layouts/Header'
import BreadCrumb from '../components/layouts/BreadCrumb'
import Footer from '../components/layouts/Footer'
import OtherMain from '../components/other/OtherMain'
import CustomHead from "../components/layouts/CustomHead";
import { withRouter } from 'next/router'
import Grid from "@material-ui/core/Grid/Grid";
import JsonLd from "../components/layouts/JsonLd";
import checkUndefined from "../components/functions/CheckUndefined";

class Other extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx
    store.dispatch(tickClock(isServer))
    store.dispatch(setPageNumber(query.page || '1'))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }
    return { isServer }
  }

  componentDidMount() {
    this.props.dispatch(startClock())
  }

  render() {
    {/* type|url|image はデフォルト値有り*/}
    const contents = checkUndefined(this.props.router.query.page)
      ? {
        title: `ページタイトルだよ Other ページ${this.props.router.query.page}`,
        description: `ページ説明だよ Other ページ${this.props.router.query.page}`
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
        <CustomHead contents={contents} />
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
