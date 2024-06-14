import '../sass/_gallery.scss';
import data from '../data/data';
import Card from './Card';

function Gallery() {
    return (
        <main className='gallery_container'>
            {data.map(data => {
                return (
                    <Card 
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
              
            })}
        </main>
    )
}

export default Gallery;