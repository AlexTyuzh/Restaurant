import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import About from "./About";

function Routering() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/orderOnline" element={<OrderOnline />}></Route> */}
      <Route path="/about" element={<About />}></Route>
      {/* <Route path="/logIn" element={<LogIn />}></Route> */}
    </Routes>
  );
}

export default Routering;
