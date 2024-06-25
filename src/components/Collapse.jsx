import '../sass/_collapse.scss';
import arrow from '../assets/icons/arrow_up.png';
import { useState } from 'react'; //importer le Hook pour gérer l'état du composant//


function Collapse ({title, content, children}) {
    const [isOpen, setIsOpen] = useState(false);
/** évènement qui permets de passer d'un état à un autre */
    const toggleCollapse  =() => {setIsOpen(!isOpen);} 

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>             {/** si 'isOpen' est true alors le classname sera collapse open, si false alors le classname sera collapse*/}
            <div className= "header-collapse" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img className='collapse-arrow'  src={arrow} alt="Flèche de direction" /> {/** si isOpen est true alors arrowDown mais si false alors arrowUp  */}
            </div>
            
                <div className='collapse-content'>
                    {content || children}
                </div>
            
        </div>
    )

}

export default Collapse;