import { Link } from "react-router-dom";
import React, { useState } from "react";
import Hamburger from "../images/Hamburger.png";
function Nav() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="nav">
      {/* <div className="hamburger" onClick={toggleMenu}>
        <img src={Hamburger} alt="Menu" className="hamburger-img" />
      </div> */}
      <ul /*className={`nav-links ${isOpen ? "open" : ""}`}*/>
        <li>
          <Link to="/" /*onClick={() => setIsOpen(false)}*/>Home</Link>
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
