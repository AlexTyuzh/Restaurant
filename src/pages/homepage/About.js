import MarioAdrianA from "../../images/MarioAdrianA.jpg";
import MarioAdrianB from "../../images/MarioAdrianB.jpg";
import "./HomePage.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <div className="about-p">
            <p>
              Little Lemon is a family-owned Mediterranean restaurant that
              focuses on traditional recipes served with a modern twist.
            </p>
            <p>
              The establishment offers a warm and inviting atmosphere,
              reminiscent of gathering places found in Greece, with old-world
              flavors and rustic roots.
            </p>
            <p>
              The menu features a wide selection of authentic Mediterranean
              cuisine, including the famous Greek salad made with crispy
              lettuce, peppers, olives, and Chicago-style feta cheese, garnished
              with crunchy garlic and rosemary croutons.
            </p>
          </div>
        </div>

        <div className="about-img">
          <img className="chefs1" src={MarioAdrianB} alt="Mario and Adrian" />
          <img className="chefs2" src={MarioAdrianA} alt="Mario and Adrian" />
        </div>
      </div>
    </>
  );
}

export default About;
