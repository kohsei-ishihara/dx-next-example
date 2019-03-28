import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

const HeaderStyles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const HeaderComponent = styles => {
  return (
    <header>
      <nav className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              {process.env.SITE_NAME}
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
    </header>
  )
}

const Header = withStyles(HeaderStyles)(HeaderComponent)

const CustomFooter = styled.footer`
  background: #e6dfcf;
  color: #000000;
  min-height: 300px;
  margin-top: 30px;
`

const Footer = () => {
  return <CustomFooter className={'col-12'}>footer</CustomFooter>
}

const SkipToContent = () => {
  return (
    <a href="#main" className="sr-only sr-only-focusable">
      {/* bootstrapをつかってるので、後でどうにかする */}
      メインコンテンツへ
    </a>
  )
}

export { Header, Footer, SkipToContent }
