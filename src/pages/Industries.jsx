import React from "react";
import HeroTitle from "../components/Industries/HeroTitle";
import FAQ from "../components/common/FAQ";
import ContactUs from "../components/common/ContactUs";
import ContactUsImg from "../assets/images/contact-us.jpeg";

const Industries = () => {
  const contactUsData = {
    img: ContactUsImg,
    title: "Tailored Logistics for Every Industry",
    desc: `Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.`,
  };

  return (
    <main className="min-h-screen w-full">
      <HeroTitle />
      <FAQ />
      <ContactUs contactUsData={contactUsData} />
    </main>
  );
};

export default Industries;
