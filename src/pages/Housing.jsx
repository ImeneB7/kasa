import '../sass/_housing.scss';
import data from '../data/data';
import Collapse from '../components/Collapse';
import NotFound404 from './NotFound404';
import { useParams } from 'react-router-dom';
import Tags from '../components/Tag';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Carousel from '../components/Carousel';



function Housing() {

     const {id} = useParams(); // je recupére l'id de l'url actuelle
     console.log('ID récupéré:', id)

     const logement = data.find((item)  => item.id === id); 
     console.log('Logement trouvé:', logement)


     if (!logement) {
        return <NotFound404></NotFound404>
     }
     console.log('Description:', logement.description)
     console.log('Équipements:', logement.equipments)
console.log('logement:', logement);
     return (
        
        <div className='logement_wrapper'>
            <Carousel pictures={logement.pictures}></Carousel>
            <div className='house-info'>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <Tags tags={logement.tags}></Tags>
            </div>
            <div className='host'>
                <Host className='host-img' host={logement.host}></Host>
                <Rating rating={parseInt(logement.rating)}></Rating>
                </div> 
        <div className='logement_collapse' >
            <div className='collapse-group'>
                <Collapse title={'Description'} headerClassName='custom-header-collapse' contentClassName='custom-collapse-content'>
                <p>{logement.description}</p>
                </Collapse>
                <Collapse title={'Équipements'} headerClassName='custom-header-collapse' contentClassName='custom-collapse-content'>
                <div className='custom-collapse-content'> 
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