import "./HomePage.css";
import { Link } from "react-router-dom";
import Delivery from "../../images/delivery.png";

function SpecialsCard({ image, title, price, description, delivery, altText }) {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={altText} />
      <div className="card-body">
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">{price}</p>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-delivery">
          <Link className="button" to="/orderonline">
            {delivery}
            <img src={Delivery} alt="delivery img" className="delivery-img" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpecialsCard;
