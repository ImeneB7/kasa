import '../sass/_host.scss';

const Host = ({host}) => {
    return (
        <div className='host-info'>
            <p className='host-name'>{host.name}</p>
            <img src={host.picture} alt={host.name} className='host-img'/>
        </div>
    )
}

export default Host;