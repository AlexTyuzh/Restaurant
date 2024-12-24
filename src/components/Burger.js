import { useState } from "react";
import "./Burger.css";

export function Burger({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger">
      <button className="burger-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`mobile-nav-wrapper ${isOpen ? "visible" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
}
