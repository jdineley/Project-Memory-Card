import React, { useState, useRef, useEffect } from 'react'
import Card from './components/Card';
import './App.css';

function App() {
  const [cardArray, setCardArray] = React.useState([2,5,3,9,6,1])
  const clickedCards = useRef([])
  console.log(cardArray, clickedCards)
  useEffect(() => {

  },[])
  let cardArrayElements = cardArray.map(element => <Card id={element} number={element} handleClick={handleClick}/>)

  function handleClick(id) {
    console.dir(id)
    clickedCards.current.push(id)
    setCardArray(prevArray => {
      return [...prevArray.sort((a,b) => 0.5 - Math.random())]
    })
    
    
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <div className='card-container' onClick={handleClick}>
        {cardArrayElements}
      </div>
    </div>
  );
}

export default App;
