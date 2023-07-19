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
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.light};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
`

const ImageStyled = styled.img`
    padding: 0.5rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;   
`

const Text = styled.p`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`