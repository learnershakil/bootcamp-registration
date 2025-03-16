import Nav from "../Components/Home/Nav";
import Stats from "../Components/Home/Stats";
import Hero from "../Components/Home/Hero";
import WhyUs from "../Components/Home/WhyUs";
import Footer from "../Components/Home/Footer";
import Faq from "../Components/Home/Faq";
import RegistrationForm from "../Components/RegistrationForm";
import { useState } from "react";
import Show from "../Components/Home/Show";

const Home = () => {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className={`w-full overflow-hidden ${popUp ? "h-screen" : ""}`}>
      <Nav />
      <div className="py-2">
      <Hero setPopUp={setPopUp} />
      </div>
      <Stats setPopUp={setPopUp} />
      <WhyUs setPopUp={setPopUp} />
      <Show/>
      <Faq />
      <Footer setPopUp={setPopUp} />

      {popUp && (
        <div className="w-full sm:h-full flex sm:justify-center justify-end items-center absolute top-0 left-0">
          <RegistrationForm setPopUp={setPopUp} />
        </div>
      )}
    </div>
  );
};

export default Home;
