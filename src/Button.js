import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: 1rem;
  padding: .5rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 5px;

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`

const Button = ({primary, children, onClick}) => {
  return (
    <>
      <div>
        <StyledButton primary={primary} onClick={onClick}>{children}</StyledButton>
      </div>
    </>
    )

}

export default Button