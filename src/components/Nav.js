import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Log In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
