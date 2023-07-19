import React from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function CardsGrid( { memes, handleClick }) {

    const cardArrayElements = memes.map(meme => {
        return <Card key={meme.id} meme={meme}  handleClick={handleClick}/>
      })
    
    return (
        <CardGridsWrapper>{ cardArrayElements }</CardGridsWrapper>
    )

}

const CardGridsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`