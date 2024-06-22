import { useState } from 'react';
import '../sass/_carousel.scss';
import arrowLeft from '../assets/icons/arrow_left.png';
import arrowRight from '../assets/icons/arrow_right.png';

function Carousel ({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImg= () => {
        let newIndex = currentIndex + 1;
        if (newIndex === pictures.length ) {
            newIndex= 0;
        }
            setCurrentIndex(newIndex)
    }

    const prevImg = () => {
        let newIndex = currentIndex - 1;
        if(newIndex < 0) {
            newIndex = pictures.length - 1;
        }
            setCurrentIndex(newIndex)
    }


    if (pictures.lenght === 1) {
        return (
            <div className="Carousel">
                <img src={pictures[0]} alt={`Slide`} />
            </div>
        )
    }

    console.log(pictures);

    return (
        <div className='Carousel'>
            <img src={arrowLeft} alt="Previous" onClick={prevImg} className='carousel-arrow carousel-arrow-left'>
            </img>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            <img src={arrowRight} alt="Next" onClick={nextImg} className='carousel-arrow carousel-arrow-right'>
            </img>
        </div>
    )
}

export default Carousel;