import styled from 'styled-components'

export default function Card({number, handleClick, id, isClicked, handleGameOver}) {
    // console.log(id)
    function cardHandleClick(e) {
        if(isClicked) {
            handleGameOver()
            return
        } else {
            handleClick(id)
        }
    }
    return (
        <div style={{width: '70px'}} className="card" onClick={cardHandleClick} id={id}>
            {number}
        </div>
        // <ImageStyled scr={} />

    )
}    

const ImageStyled = styled.img`
    width: 70px;
`