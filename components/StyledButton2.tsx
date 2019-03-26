import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from 'styled-button-component'

const StyleBtn = ({ className, color, children, ...props }) => (
  <Button {...props} className={className}>
    {children}
  </Button>
)

const StyledButton2 = styled(StyleBtn)`
  ${props =>
    props.color === 'red' &&
    css`
      background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
      border: transparent;

      &:hover {
        background: linear-gradient(45deg, #fe6b8b 30%, #fe6b8b 90%);
        border: transparent;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem #ff8e53;
      }
      &:hover:focus,
      &:focus:focus,
      &:hover:hover,
      &:focus:hover {
        border: transparent;
      }
    `}
  ${props =>
    props.color === 'blue' &&
    css`
      background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
      border-color: transparent;

      &:active,
      &:hover {
        background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
        border-color: transparent;
      }
      &:hover:focus {
        background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
      }
    `}
`
export { StyledButton2 }
