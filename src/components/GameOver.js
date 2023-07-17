import React from 'react'
import styled from 'styled-components'

export default function GameOver({ resetGameHandler }) {
    
    return (
        <GameOverWrapper>
            
                <h1>Game Over</h1>
                <ButtonStyled onClick={resetGameHandler}>Reset Game</ButtonStyled>
            
        </GameOverWrapper> 
    )
}


const GameOverWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center
`

const ButtonStyled = styled.button`
    padding: 10px;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.green}
`