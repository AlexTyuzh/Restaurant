import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookingPage.css";

export default function BookingForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("None");
  const [preferences, setPreferences] = useState("");
  const [additional, setAdditional] = useState("");

  const [finalTime, setFinalTime] = useState([]);

  useEffect(() => {
    setFinalTime(
      props.availableTime.map((time, index) => (
        <option key={index}>{time}</option>
      ))
    );
  }, [props.availableTime]);

  function handleDateChange(e) {
    setDate(e.target.value);
    const selectedDate = new Date(e.target.value);
    props.updateTime(selectedDate);
  }

  return (
    <form className="booking-form">
      <div className="booking-content">
        <label htmlFor="firstName">First Name</label> <br />
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="booking-content">
        <label htmlFor="lastName">Last Name</label> <br />
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="booking-content">
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="booking-content">
        <label htmlFor="phone">Phone Number</label> <br />
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number"
          value={phone}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="booking-content">
        <label htmlFor="date">Select Date</label> <br />
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div className="booking-content">
        <label htmlFor="guests">Number of Guests</label> <br />
        <input
          type="number"
          id="guests"
          placeholder="Number of guests"
          value={guests}
          required
          min={1}
          max={100}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      <div className="booking-content">
        <label htmlFor="time">Select Time</label> <br />
        <select
          id="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select time</option>
          {finalTime}
        </select>
      </div>

      <div className="booking-content">
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </div>

      {/* <div className="booking-content">
        <label htmlFor="preferences">Seating preferences</label> <br />
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Terrace </option>
        </select>
      </div> */}

      <div className="booking-content">
        <label htmlFor="additional">Additional Information</label> <br />
        <textarea
          id="additional"
          rows={8}
          cols={50}
          placeholder="Additional Information..."
          value={additional}
          onChange={(e) => setAdditional(e.target.value)}
        />
      </div>

      <div className="booking-content">
        <Link
          className="button"
          to="/confirmation"
          state={{
            firstName,
            lastName,
            guests,
            date,
            time,
          }}
        >
          <button id="button" to="/reservation">
            Reserve a table
          </button>
        </Link>
        <p className="note">
          Note: You cannot edit your reservation after submission. Please
          double-check your answer before submitting your reservation request.
        </p>
      </div>
    </form>
  );
}
