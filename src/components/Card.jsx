import '../sass/_card.scss'

function Card({id, title, cover}) {
    return (
        <div className="card" id={id}>
            <img src={cover} alt={title} />
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Card;