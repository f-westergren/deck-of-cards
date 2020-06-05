import React from 'react';
import Deck from './Deck'
import Button from './Button'
import styled from 'styled-components'

const MainWrapper = styled.section`
display: flex;
justify-content: center;
text-align: center;
height: 100vh;
align-items: center;
margin: 0 auto;

`


function App() {
  return (
    <MainWrapper>
      <Deck />
    </MainWrapper>
  );
}

export default App;
