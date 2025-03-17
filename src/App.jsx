import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import Schedule from "./Pages/Schedule";
import { useState } from "react";
import Nav from "./Components/Home/Nav";
import RegistrationForm from "./Components/RegistrationForm";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [popUp, setPopUp] = useState(false);
  return (
    <>
    <Nav setPopUp={setPopUp} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      {popUp && (
        <div className="w-full sm:h-full flex sm:justify-center justify-end items-center absolute top-0 left-0">
          <RegistrationForm setPopUp={setPopUp} />
        </div>
      )}
    </>
  );
};

export default App;
