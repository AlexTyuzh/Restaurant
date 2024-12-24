import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../images/Logo.svg";
import { Burger } from "./Burger";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
      </Link>
      <Nav className="desktop-nav" />
      <Burger>
        <Nav className="mobile-nav" />
      </Burger>
    </header>
  );
}

export default Header;
