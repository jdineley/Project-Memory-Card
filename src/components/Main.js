import React, { useState, useRef, useEffect } from 'react'
import Card from './Card';

export default function Main() {
  const numberOfCards = 30;
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


  console.log(cardArray)

  let cardArrayElements = cardArray.map(cardItem => {
    // console.log(item)
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
  }

  function resetGame() {
    setIsPlay(true);
    setCardArray(createInitialCardArray())
  }

  return (
    <div className="App">
      {/* <h1>React App</h1> */}
      <div className='card-container'>
        {isPlay ? cardArrayElements : <h1>Game Over</h1>}
        {!isPlay && <button onClick={resetGame}>Start game</button>}
      </div>
    </div>
  );
}

