import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Card from './Card'

const Deck = () => {
  const [url, setUrl] = useState('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  const [deck, setDeck] = useState('')
  const [card, setCard] = useState('')
  const [toggle, setToggle] = useState(false)
  const timerId = useRef();

  useEffect(() => {
    async function loadDeck() {
      const res = await axios.get(url)
      setDeck(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    }
    loadDeck()
    
  }, [url])

  useEffect(() => {
    timerId.current = setInterval(async function drawDecks() {
      const res = await axios.get(deck)
      if (res.data.success && toggle) {
        setCard(res.data.cards[0].image)
      } else if (!res.data.success) {
        clearInterval(timerId.current)
        alert('No more cards in the deck!')
      } else {
        clearInterval(timerId.current)
      }
    }, 1000)
    return () => clearInterval(timerId.current)
  }, [deck, toggle])
  

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>{toggle? 'Stop drawing' : 'Start drawing'}!</button>
      <Card img={card} />
    </div>
  )
}

export default Deck