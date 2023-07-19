import styled from 'styled-components'

export default function Card({meme, handleClick}) {
    
    const { id, name, url, isClicked } = meme
    
    return (
        <CardWrapper onClick={() => handleClick(id, isClicked)}>
            <ImageStyled src={url}/>
            <Text>{name}</Text>
        </CardWrapper>

    )
}   


const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
`

const ImageStyled = styled.img`
    padding: 0.5rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;   
`

const Text = styled.p`
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`