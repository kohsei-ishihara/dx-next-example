import App, { Container } from 'next/app'
import { MuiThemeProvider, jssPreset } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../components/functions/getPageContext'
import '../css/custom.min.css'
import CounterProvider from '../components/CounterProvider'
import NextSeo from 'next-seo'
import SEO from '../next-seo.config'

import { create } from 'jss'
import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'


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
    const { Component, pageProps } = this.props
    return (
      <Container>
        <NextSeo config={SEO} />
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
            <CounterProvider>
              <Component pageContext={this.pageContext} {...pageProps} />
            </CounterProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default MyApp
