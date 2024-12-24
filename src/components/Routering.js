import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/Homepage";
import About from "../pages/homepage/About";
import BookingPage from "../pages/reservation/BookingPage";
import Confirmation from "../pages/reservation/Confirmation";
import OrderOnline from "../pages/homepage/OrderOnline";
import MenuPage from "../pages/MenuPage";

function Routering() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/reservation" element={<BookingPage />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/orderonline" element={<OrderOnline />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routering;
