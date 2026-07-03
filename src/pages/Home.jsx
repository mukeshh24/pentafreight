import React, { useRef } from "react";
import HeroVideo from "../components/Home/HeroVideo";
import AboutUs from "../components/Home/AboutUs";
import OurPhilosophy from "../components/Home/OurPhilosophy";
import Services from "../components/Home/Services";
import Achievements from "../components/Home/Achievements";
import Reviews from "../components/Home/Reviews";
import Certifications from "../components/Home/Certifications";
import Awards from "../components/Home/Awards";
import OurGlobalFootPrint from "../components/Home/OurGlobalFootPrint";

const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen w-full">
      <HeroVideo scrollToAbout={scrollToAbout} />
      <AboutUs aboutRef={aboutRef} />
      <OurPhilosophy />
      <Services />
      <Achievements />
      <Reviews />
      <Certifications />
      <Awards />
      <OurGlobalFootPrint />
    </main>
  );
};

export default Home;
