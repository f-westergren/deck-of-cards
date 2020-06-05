import React from 'react'
import styled, {css} from 'styled-components'

const StyledCard = styled.div`
    transform: rotate(${({angle}) => angle});
    position: absolute;
    left: 50%;
    margin-left: -113px;
    top: 50%;
    margin-top: -157px;
`

const Card = ({img, angle}) => {

  return (
    <StyledCard angle={angle}>
      {img && <img src={img} alt='card'/>} 
    </StyledCard>
  )
}

export default Card