import BookingLogo from "../../images/BookingLogo.png";
import BookingForm from "./BookingForm";
import { useState } from "react";
import { fetchAPI } from "../../api/BookingAPI";
import "./BookingPage.css";

export default function BookingPage() {
  const [availableTime, setAvailableTime] = useState(fetchAPI(new Date()));

  const updateTime = (date) => {
    const times = fetchAPI(date);
    setAvailableTime(times);
  };

  return (
    <>
      <section className="booking-page">
        <header className="booking-header">
          {/* <img
            className="booking-img"
            src={BookingLogo}
            alt="Little Lemon IngredientsLittle Lemon Logo"
          ></img> */}
          <div className="booking-head">
            <h1>Reserve a table</h1>
          </div>
        </header>
        <BookingForm availableTime={availableTime} updateTime={updateTime} />
      </section>
    </>
  );
}
