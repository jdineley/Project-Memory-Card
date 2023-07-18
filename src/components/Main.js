import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card';
import GameOver from './GameOver';
import Header from './Header';

export default function Main() {
  const numberOfCards = 10;
  function createInitialCardArray() {
    let initialArray = [];
    for(let i = 0; i < numberOfCards; i++) {
      initialArray.push({
        number: i,
        clicked: false
      })
    }
    return initialArray;
  }
  const [cardArray, setCardArray] = React.useState(() => {
    return createInitialCardArray()
  })
  const [isPlay, setIsPlay] = useState(true)
  let score = useRef( {
    currentScore: 0,
    bestScore: 0
  }
  )

  let currentScore = cardArray.reduce((prev, cur) => {
      if(cur.clicked){
      return prev+1
    } return prev
  }, 0)
    
  score.current = 
      {
        ...score.current,
        currentScore: currentScore,
      }

  let cardArrayElements = cardArray.map(cardItem => {
    return <Card key={cardItem.number} id={cardItem.number} number={cardItem.number} isClicked={cardItem.clicked} handleClick={handleClick} handleGameOver={handleGameOver}/>
  })

  function handleGameOver() {
    setIsPlay(false)
  }


  function handleClick(id) {
    setCardArray(prevArray => {
      return prevArray.map(item => {
        if(item.number === id){
          return {
            ...item,
            clicked: true
          }
        }
        return item
      }).sort((a,b) => 0.5 - Math.random())
    })
  }

  function resetGameHandler() {
    let bestScore = score.current.currentScore > score.current.bestScore ? score.current.currentScore : score.current.bestScore
    score.current = 
      {
        ...score.current,
        bestScore: bestScore
      }
      
    setIsPlay(true);
    setCardArray(createInitialCardArray())
  }

  return (
    <>
      <Header score={score.current}/>
      <MainWrapper>
          {
            isPlay ? cardArrayElements : <GameOver resetGameHandler={resetGameHandler}/>
          }
      </MainWrapper>
    </>
  );
}


const MainWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`
