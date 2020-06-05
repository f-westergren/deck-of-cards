import React, { useState, useEffect } from 'react'
import { uuid } from 'uuidv4';
import axios from 'axios'
import Card from './Card'
import styled from 'styled-components'
import Button from './Button'

const Board = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 800px;
  height: 600px;
  background-color: seagreen;
  border-radius: 5px;
`

const Deck = () => {
  const [deck, setDeck] = useState('')
  const [cards, setCards] = useState([])
  const [toggle, setToggle] = useState(false)
  const [deckNum, setDeckNum] = useState(1)

  useEffect(() => {
    async function loadDeck() {
      const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      setCards([])
      setDeck(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    }
    loadDeck()
  }, [deckNum])

  const randomDegree = () => Math.random() * (90 - -90) + -90

  const getCard = async () => {
    const res = await axios.get(deck)
    if (res.data.success) {
      setCards(cards => [...cards, {image: res.data.cards[0].image, angle: randomDegree(), id: uuid()}])
    } else {
      setToggle(false)
      alert('No more cards in the deck!')
    }
  }

  useEffect(() => {
    if (toggle) {
    const timerId = setInterval(getCard, 1000)
    return () => clearInterval(timerId)
  }})


  return (
    <Board>
      {cards.map(c => <Card img={c.image} angle={`${c.angle}deg`} key={c.id} />)}
      <Button onClick={() => setToggle(!toggle)}>{toggle? 'Stop drawing' : 'Start drawing'}</Button>
      <Button onClick={() => setDeckNum(deckNum => deckNum + 1)}>Shuffle deck</Button>
    </Board>
  )
}

export default Deck