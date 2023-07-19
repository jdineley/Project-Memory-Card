import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card';
import GameOver from './GameOver';
import Header from './Header';
import CardGrids from './CardsGrid'

export default function Main() {
  const numberOfCards = 16;

  // State
  const [isPlay, setIsPlay] = useState(true)
  const [memes, setMemes] = React.useState([])
  
  // Refs
  const initialMemesCache = useRef(null) 
  let score = useRef( 
    {
    currentScore: 0,
    bestScore: 0
    }
  )

  // Reassigned variables
  let cardArrayElements
  let currentScore
  
  // Api call
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(memeData => {
        const memesData = memeData.data.memes.slice(0,numberOfCards)
        const memes = []
        memesData.forEach(meme => {
          memes.push({
            id: meme.id,
            name: meme.name,
            url: meme.url,
            isClicked: false
          })
        })
        initialMemesCache.current = memes
        setMemes(memes)
        
      })
  },[])

  // Don't break if api call hasn't populated state yet
  if(memes.length > 0) {
    currentScore = memes.reduce((prev, cur) => {
      if(cur.isClicked){
      return prev+1
    } return prev
  }, 0)

  }
    
  score.current = 
      {
        ...score.current,
        currentScore: currentScore,
      }



  // Handlers
  function handleGameOver() {
    setIsPlay(false)
  }

  function handleClick(id, isClicked) {
    if(isClicked) {
      handleGameOver();
      return
    }
    setMemes(prevArray => {
      return prevArray.map(item => {
        if(item.id === id){
          return {
            ...item,
            isClicked: true
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
    setMemes(initialMemesCache.current)
  }

  return (
    <>
      <Header score={score.current}/>
      <MainWrapper>
          {
            isPlay ? <CardGrids memes={memes} handleClick={handleClick}/> : <GameOver resetGameHandler={resetGameHandler}/>
          }
      </MainWrapper>
    </>
  );
}


const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
// display: grid;
// justify-content: space-around;
// justify-items: center;
// align-items: center;
// gap: 30px;

// @media (min-width: 400px){
//   grid-template-columns: repeat(2, auto);
// }
// @media (min-width: 900px){
//   grid-template-columns: repeat(4, auto);
// }

// @media (min-width: 1600px){
//   grid-template-columns: repeat(8, auto);
// }

// display: flex;
// gap: 5px;
// flex-wrap: wrap;