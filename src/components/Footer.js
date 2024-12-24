import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../images/LogoFooter.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import X from "../images/X.png";

const Footer = () => {
  return (
    <footer>
      <img src={LogoFooter} alt="Little Lemon Logo" className="logo-footer" />
      {/* <Nav className="nav-footer" /> */}
      <div className="div-footer">
        <h5 className="footer-head">Navigation</h5>
        <ul className="ul-footer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/orderonline">Order online</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Log in</Link>
          </li>
        </ul>
      </div>
      <div className="div-footer">
        <h5 className="footer-head">Contacts</h5>
        <ul className="ul-footer">
          <li>Adsress: North Michigan Avenue, Chicago</li>
          <li>Phone number: +312-000-0000</li>
          <li>Email: email@email.com</li>
        </ul>
      </div>
      <div className="div-footer">
        <h5 className="footer-head">Social Media</h5>
        <ul className="ul-footer">
          <li className="li-footer-socials">
            <a href="https://www.instagram.com/" title="instagram logo icons">
              <img src={Instagram} alt="instagram" width="20px" />
            </a>
          </li>
          <li className="li-footer-socials">
            <a href="https://www.facebook.com/" title="facebook logo icons">
              <img src={Facebook} alt="facebook" width="20px" />
            </a>
          </li>
          <li className="li-footer-socials">
            <a href="https://www.twitter.com/" title="twitter logo icons">
              <img src={X} alt="twitter" width="20px" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
