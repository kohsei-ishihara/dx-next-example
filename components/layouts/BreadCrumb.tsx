import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'
import Link from '@material-ui/core/Link'
import styled from 'styled-components'

const BreadCrumb = () => {
  return (
    <nav aria-label="パンくずリスト">
      <PaperIeul>
        <BreadcrumbsIeul aria-label="Breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link color="inherit" href="/lab/about/" onClick={handleClick}>
            Lab
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </BreadcrumbsIeul>
      </PaperIeul>
    </nav>
  )
}

const BreadcrumbsIeul = styled(Breadcrumbs)`
  background: #e6dfcf;
  color: #000000;
`

const PaperIeul = styled(Paper)`
  box-shadow: none !important;
`

const handleClick = event => {
  event.preventDefault()
  alert('You clicked a breadcrumb.')
}

export { BreadCrumb }
