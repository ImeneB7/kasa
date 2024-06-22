import '../sass/_tag.scss';

const Tags = ({tags}) => {
    return (
        <div>
            {tags.map((tag, index) => (
                <span className="tags" key={index}>
                    {tag}</span>
            )
        )}
        </div>
    )
}

export default Tags;