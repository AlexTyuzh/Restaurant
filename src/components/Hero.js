// import { Link } from "react-router-dom";
import HeroPic from "../images/HeroPic.jpg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <div className="hero-p">
            <p>
              Little Lemon is a family-owned Mediterranean restaurant that
              focuses on traditional recipes served with a modern twist.
            </p>
            <p>
              The establishment offers a warm and inviting atmosphere,
              reminiscent of gathering places found in Greece, with old-world
              flavors and rustic roots.
            </p>
          </div>
          {/* <Link to="/reservation">
            <button id="button" to="/reservation">
              Reserve a Table
            </button>
          </Link> */}
        </div>

        <div className="hero-pic">
          <img src={HeroPic} alt="Little Lemon Restaurant welcome food" />
        </div>
      </div>
    </>
  );
}

export default Hero;
