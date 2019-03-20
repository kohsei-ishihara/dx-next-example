import React from 'react'
import styled from 'styled-components'

function Footer({}) {
  return (
    <CustomFooter className={'col-12'}>
      footer
    </CustomFooter>
  )
}


const CustomFooter = styled.footer`
  background: #e6dfcf;
  color: #000000;
  min-height: 300px;
  margin-top:30px;
`

export default Footer
