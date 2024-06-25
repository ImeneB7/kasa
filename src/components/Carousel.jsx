import { useState } from 'react';
import '../sass/_carousel.scss';
import arrowLeft from '../assets/icons/arrow_left.png';
import arrowRight from '../assets/icons/arrow_right.png';

function Carousel ({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImg= () => {
        let newIndex = currentIndex + 1;
        if (newIndex === pictures.length ) {
            newIndex= 0;  // retour à la première image du carousel
        }
            setCurrentIndex(newIndex)
    }

    const prevImg = () => {
        let newIndex = currentIndex - 1;
        if(newIndex < 0) {
            newIndex = pictures.length - 1; // retour de la première à la dernière image du carousel
        }
            setCurrentIndex(newIndex)
    }


    if (pictures.lenght === 1) { // si le carousel contient une seule image il n'affiche que celle ci
        return (
            <div className="Carousel">
                <img src={pictures[0]} alt={`Slide`} />
            </div>
        )
    }

    console.log(pictures);

    return (
        <div className='Carousel'>
            {pictures.length > 1 && ( // les flèches de navigation dans le carousel apparaissent que si il y a plusieurs images
                <>
            <img 
            src={arrowLeft} 
            alt="Previous" 
            onClick={prevImg} 
            className='carousel-arrow carousel-arrow-left'>
            </img>
            <img 
            src={arrowRight} 
            alt="Next" 
            onClick={nextImg} 
            className='carousel-arrow carousel-arrow-right'>
            </img>
            </>
            
        )} 
        <div className='counter'>
            {currentIndex + 1} / {pictures.length}
        </div>
        {/** image actuelle dans le carousel */}
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} /> 
        </div>
    )
}

export default Carousel;