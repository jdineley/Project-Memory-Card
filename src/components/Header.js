import React from 'react'
import styled from 'styled-components'
import Score from './Score'


export default function Header({ score }) {
    
    return (
        <HeaderWrapper>
            <h1>Meme Memory Card Game</h1>
            <ScoreWrapper>
                <p>Score: {score.currentScore}</p>
                <p>Best score: {score.bestScore}</p>
            </ScoreWrapper>
            
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`
    width: 100%;
    z-index: 1;
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.green};
    padding: 30px;
`
const ScoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
`