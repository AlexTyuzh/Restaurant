import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../images/Logo.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
