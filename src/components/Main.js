import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card';
import GameOver from './GameOver';
import Header from './Header';

export default function Main() {
  const numberOfCards = 10;
  // function createInitialCardArray() {
  //   let initialArray = [];
  //   for(let i = 0; i < numberOfCards; i++) {
  //     initialArray.push({
  //       number: i,
  //       clicked: false
  //     })
  //   }
  //   return initialArray;
  // }
  // const [cardArray, setCardArray] = React.useState(() => {
  //   return createInitialCardArray()
  // })
  const [isPlay, setIsPlay] = useState(true)
  const [memes, setMemes] = React.useState([])


  function makeCardArrayElements(memes) {
    console.log('make array', memes)
   return memes.map(meme => {
      return <Card key={meme.id} meme={meme} isClicked={meme.clicked} handleClick={handleClick} handleGameOver={handleGameOver}/>
    })
  }

  

  const cardArrayElements = useRef(null)

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
        console.log('api', memes)
        setMemes(memes)
        
      })
  },[])

  useEffect(() => {
    console.log('memes changed')
    cardArrayElements.current = makeCardArrayElements(memes)
    currentScore.current = memes.reduce((prev, cur) => {
      if(cur.clicked){
      return prev+1
    } return prev
  }, 0)
  },[memes])

  console.log(memes)

  // function getMemeImage() {
  //   const memeArray = allMemes.data.allMemes
  //   const randomIndex = Math.floor(Math.random()*memeArray.length)
  //   const randomImage = memeArray[randomIndex]

  // }

  let score = useRef( 
    {
    currentScore: 0,
    bestScore: 0
    }
  )

  const currentScore = useRef(0)
    
  score.current = 
      {
        ...score.current,
        currentScore: currentScore.current,
      }

  // let cardArrayElements = memes.map(meme => {
  //   return <Card meme={meme} isClicked={meme.clicked} handleClick={handleClick} handleGameOver={handleGameOver}/>
  // })

  function handleGameOver() {
    setIsPlay(false)
  }


  function handleClick(id) {
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
    setMemes(prevMemes => {
      return  [...prevMemes]
    })
  }

  return (
    <>
      <Header score={score.current}/>
      <MainWrapper>
          {
            isPlay ? cardArrayElements.current : <GameOver resetGameHandler={resetGameHandler}/>
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
