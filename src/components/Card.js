

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
        <div className="card" onClick={cardHandleClick} id={id}>
            {number}
        </div>
    )
}