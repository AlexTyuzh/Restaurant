import React from "react";
import LogoFooter from "../images/LogoFooter.png";

const Footer = () => {
  return (
    <footer>
      <img src={LogoFooter} alt="Little Lemon Logo" className="logo-footer" />
      {/* <Nav className="nav-footer" /> */}
      <div className="div-footer">
        <h5 className="footer-head">Navigation</h5>
        <ul className="ul-footer">
          <li>Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>About</li>
          <li>Log In</li>
        </ul>
      </div>
      <div className="div-footer">
        <h5 className="footer-head">Contacts</h5>
        <ul className="ul-footer">
          <li>Adsress</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="div-footer">
        <h5 className="footer-head">Social Media</h5>
        <ul className="ul-footer">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
