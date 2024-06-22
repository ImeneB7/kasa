import '../sass/_card.scss';
import { Link } from 'react-router-dom';



function Card({id, title, cover}) {
    return (
        <Link to= {`/housing/${id}`} className='card_link' >
        <div className="card" id={id}>
            <img src={cover} alt={title} />
            <div>
                <h2>{title}</h2>
            </div>
        </div>
        </Link>
    )
}

export default Card;