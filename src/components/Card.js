import styled from 'styled-components'

export default function Card({meme, handleClick, handleGameOver}) {
    // console.log(id)
    const { id, name, url, isClicked } = meme
    function cardHandleClick(e) {
        console.log('clicked', isClicked)
        if(isClicked) {
            handleGameOver()
            return
        } else {
            handleClick(id)
        }
    }
    return (
        <ImageStyled src={url} onClick={cardHandleClick} id={id}/>

    )
}    

const ImageStyled = styled.img`
    width: 200px;    
`