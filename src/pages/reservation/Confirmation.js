import React from "react";
import "./BookingPage.css";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { firstName, lastName, guests, date, time } = location.state || {};

  if (!location.state) {
    return <p className="no-booking">No booking information provided.</p>;
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h2>Your reservation is confirmed!</h2>
        <div>
          <ul>
            <div>
              <p>
                Thank you, {firstName} {lastName} for reserving a table at
                Little Lemon!
                <br />
                Please see the details of your reservation below:
              </p>
              <li>Date: {date} </li>
              <li>Time: {time}</li>
              <li>Number of Guests: {guests} </li>
              {/* {occasion && <li>Occasion: {occasion}</li>} */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
