import SpecialsCards from "./SpecialsCards";
import Button from "../../components/Button";

function Specials() {
  return (
    <section className="specials">
      <div className="announcement">
        <h2>This weeks specials!</h2>
      </div>
      <SpecialsCards />
      <Button color="orderButtonColor" id="button" text="Order online" />
    </section>
  );
}

export default Specials;
