import fullStar from  '../assets/icons/VectorFull.png';
import emptyStar from '../assets/icons/VectorEmpty.png';


function Rating ({rating}) {

    const maxStar = 5;
    
    return (
        <div className='rating'> 
            {[...Array(maxStar)].map((_, index) => (
                <img key={index} src={index < rating ? fullStar : emptyStar} alt="Star" />
            ))}
        </div>
    )
}

export default Rating;