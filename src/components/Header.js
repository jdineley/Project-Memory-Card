import React from 'react'
import styled from 'styled-components'
import Score from './Score'


export default function Header({ score }) {
    
    return (
        <HeaderWrapper>
            <h1>Memory Card Game</h1>
            <ScoreWrapper>
                <p>Score: {score.currentScore}</p>
                <p>Best score: {score.bestScore}</p>
            </ScoreWrapper>
            
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ScoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
`