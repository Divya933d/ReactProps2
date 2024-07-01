
import './styles.css'; 
const Card = (props) => {
    const { name, imageUrl, price } = props;

    return (
        <div className="card">
            <img src={imageUrl} alt={name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-description">{price}</p>
            </div>
        </div>
    );
};

export default Card;
