import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../stores/store'
import '../css/custom.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome as faHomeLight } from '@fortawesome/pro-light-svg-icons'
import { faHome as faHomeRegular } from '@fortawesome/pro-regular-svg-icons'
import { faHome } from '@fortawesome/pro-solid-svg-icons'
import { createGlobalStyle } from 'styled-components'
config.autoAddCss = false
library.add(fab, faHomeLight, faHomeRegular, faHome)

import App, { Container } from 'next/app'
import { MuiThemeProvider, jssPreset } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../components/functions/getPageContext'
import { create } from 'jss'
import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import NextSeo from 'next-seo'
import SEO from '../next-seo.config'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa285',
      main: '#DF3400',
      dark: '#862000',
      contrastText: '#fff'
    },
    secondary: pink
  }
})

const jss = create({
  ...jssPreset(),
  insertionPoint: process.browser
    ? window.document.getElementById('jss-insertion-point')
    : null
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  pageContext = getPageContext()

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <NextSeo config={SEO} />
        <Provider store={store}>
          <JssProvider
            jss={jss}
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    )
  }
}
const GlobalStyle = createGlobalStyle`
`

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp))
