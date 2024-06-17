import '../sass/_collapse.scss';
import arrowDown from '../assets/icons/arrow_down.png';
import arrowUp from '../assets/icons/arrow_up.png';
import { useState } from 'react'; //importer le Hook pour gérer l'état du composant//


function Collapse ({title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse  =() => {setIsOpen(!isOpen);}

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className= "header-collapse" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img className='collapse-arrow'  src={isOpen ? arrowUp : arrowDown} alt="Flèche de direction" />
            </div>
            
                <div className='collapse-content'>
                    {content}
                </div>
            
        </div>
    )

}

export default Collapse;