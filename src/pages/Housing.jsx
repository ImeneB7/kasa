import '../sass/_housing.scss';
import data from '../data/data';
import Collapse from '../components/Collapse';

import { useParams, useNavigate } from 'react-router-dom';
import Tags from '../components/Tag';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Carousel from '../components/Carousel';
import { useState, useEffect} from 'react';


function Housing() {

     const {id} = useParams(); // je recupére l'id de l'url actuelle
     console.log('ID récupéré:', id)
     const navigate = useNavigate();

     /*const [collapseOpen, setCollapseOpen] = useState(false);*/
     const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
     const [isEquipmentsOpen, setIsEquipmentsOpen]= useState(false);

     const logement = data.find((item)  => item.id === id); 
     
    useEffect (() => {
            if (!logement) {
            navigate('/NotFound404');
        }
        }, [logement, navigate]);

        if (!logement) {
            return null;
        }

     
     console.log('Description:', logement.description)
     console.log('Équipements:', logement.equipments)
     console.log('logement:', logement);
    console.log('Logement trouvé:', logement)
    


     const isAnyCollapseOpen = isDescriptionOpen || isEquipmentsOpen;
     return (

        <div className={`logement_wrapper ${isAnyCollapseOpen ? 'with-open-collapse' : ''}`}>
            <div >
            <Carousel pictures={logement.pictures}></Carousel>
            <div className='house-info'>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <Tags tags={logement.tags}></Tags>
            </div>
            <div className='host'>
                <Host className='host-img host-name' host={logement.host}></Host>
                <Rating rating={parseInt(logement.rating)}></Rating>
            </div>
            </div> 
        <div className='logement_collapse' >
            <div className='logement_group'>
                <Collapse title='Description' setCollapseOpen={setIsDescriptionOpen}>
                <p>{logement.description}</p>
                </Collapse>
                <Collapse title='Équipements' setCollapseOpen={setIsEquipmentsOpen}>
                <div> 
                <ul>
                    {logement.equipments.map((equipment, index) => (
                       <li key={index}>{equipment}</li> 
                    ))}
                </ul>
                </div> 
                </Collapse> 
            </div>
        </div>
        </div>

     )
}


export default Housing;