

export default function Card({number, handleClick, id}) {

    return (
        <div className="card" onClick={() => handleClick(id)} id={id}>
            {number}
        </div>
    )
}