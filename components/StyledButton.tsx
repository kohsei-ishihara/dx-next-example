import React from 'react';
import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'

const StyleBtn = ({ className, color, children, ...props }) => (
  <Button {...props} className={className}>
    {children}
  </Button>
)

const StyledButton = styled(StyleBtn)`
${props =>
  props.color === 'red' &&
  css`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    color: white !important;
  `}
${props =>
  props.color === 'blue' &&
  css`
    background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
    color: white !important;
  `}
`
export default StyledButton
