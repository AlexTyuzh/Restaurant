import RestarantMenu from "../images/Restaurant-Menu.jpg";
import "./MenuPage.css";

export default function MenuPage() {
  return (
    <div className="menu-container">
      <img
        className="menu-img"
        src={RestarantMenu}
        alt="menu of the little lemon restaurant"
      />
    </div>
  );
}
