import bruchetta from "../../images/bruchetta.svg";
import salad from "../../images/greek-salad.jpg";
import dessert from "../../images/lemon-dessert.jpg";
import SpecialCard from "./SpecialsCard";
import "./HomePage.css";
import { Link } from "react-router-dom";

function Specials() {
  const cardData = [
    {
      title: "Greek Salad",
      description:
        "Greek salad is a refreshing and vibrant dish featuring ripe tomatoes, crisp cucumbers, green bell peppers, red onions, Kalamata olives, and creamy feta cheese, dressed with olive oil.",
      image: salad,
      price: "$12.99",
      delivery: "Order Delivery",
      altText: "Greek Salad",
    },
    {
      title: "Bruschetta",
      description:
        "Bruschetta is an Italian appetizer consisting of toasted bread slices topped with a fresh mixture of diced tomatoes, garlic, basil, and olive oil, seasoned with a hint of balsamic vinegar.",
      image: bruchetta,
      price: "$12.99",
      delivery: "Order Delivery",
      altText: "Bruschetta",
    },
    {
      title: "Lemon Dessert",
      description:
        "A lemon dessert is a delightful treat with a bright, zesty flavor that balances sweetness, sourness and tartness. The vibrant lemon flavor is the light and satisfying finish to any meal.",
      image: dessert,
      price: "$12.99",
      delivery: "Order Delivery",
      altText: "Lemon Dessert",
    },
  ];

  return (
    <section className="specials">
      <h2>This Week Specials!</h2>
      <div className="specials-card">
        {cardData.map((card, index) => (
          <SpecialCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            price={card.price}
            delivery={card.delivery}
            altText={card.altText}
          />
        ))}
      </div>
      <Link className="button" to="/">
        <button id="button" to="/">
          Order Online
        </button>
      </Link>
    </section>
  );
}

export default Specials;
