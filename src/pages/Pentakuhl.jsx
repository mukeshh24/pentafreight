import React, { useRef } from "react";
import PHeroVideo from "../components/Pentakuhl/PHeroVideo";
import PAboutUs from "../components/Pentakuhl/PAboutUs";
import BioThermal from "../components/Pentakuhl/BioThermal";
import Products from "../components/Pentakuhl/Products";
import SeriesGuide from "../components/Pentakuhl/SeriesGuide";
import Features from "../components/Pentakuhl/Features";
import FAQ from "../components/common/FAQ";
import ContactUs from "../components/common/ContactUs";
import ContactUsImg from "../assets/images/contact-us-two.jpeg";

const Pentakuhl = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const contactUsData = {
    img: ContactUsImg,
    title: "Protecting What Matters Most",
    desc: `Get in touch to ensure safe and temperature-stable transit for your sensitive products.`,
  };

  return (
    <main className="min-h-screen w-full">
      <PHeroVideo scrollToAbout={scrollToAbout} />
      <PAboutUs aboutRef={aboutRef} />
      <BioThermal />
      <Products />
      <SeriesGuide />
      <Features />
      <FAQ />
      <ContactUs contactUsData={contactUsData} />
    </main>
  );
};

export default Pentakuhl;
