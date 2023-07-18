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
  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0
  })

  // createScore()
  useEffect(() => {
     let currentScore = cardArray.reduce((prev, cur) => {
        if(cur.clicked){
        return prev+1
      } return prev
    }, 0)
    console.log(currentScore)
    // let bestScore = currentScore > score.bestScore ? currentScore : score.bestScore
    setScore(prevScore => {
      return (
        {
          
          ...prevScore,
          currentScore: currentScore,
          // bestScore: bestScore

        }
      )
      

    })
  },[cardArray])

  console.log(cardArray)

  let cardArrayElements = cardArray.map(cardItem => {
    return <Card key={cardItem.number} id={cardItem.number} number={cardItem.number} isClicked={cardItem.clicked} handleClick={handleClick} handleGameOver={handleGameOver}/>
  })

  function handleGameOver() {
    console.log('make game over')
    setIsPlay(false)
  }


  function handleClick(id) {
    console.log(id)
    
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
    // createScore()
  }

  function resetGameHandler() {
    setScore(prevScore => {
      let bestScore = prevScore.currentScore > prevScore.bestScore ? prevScore.currentScore : prevScore.bestScore
      return (
        {
          ...prevScore,
          bestScore: bestScore
        }
      )
    })
    setIsPlay(true);
    setCardArray(createInitialCardArray())
  }

  return (
    // <div className="App">
    //   {/* <h1>React App</h1> */}
    //   <div className='card-container'>
    //     {isPlay ? cardArrayElements : <h1>Game Over</h1>}
    //     {!isPlay && <button onClick={resetGame}>Start game</button>}
    //   </div>
    // </div>
    <>
      <Header score={score}/>
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
