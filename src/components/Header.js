import Nav from "./Nav";
import Logo from "../images/Logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
