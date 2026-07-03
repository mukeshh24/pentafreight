import React from "react";
import Button from "./Button";

const ContactUs = ({ contactUsData }) => {
  console.log(contactUsData);
  return (
    <section className="h-full w-full">
      <div
        className="h-100 w-full bg-fixed bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${contactUsData.img})` }}
      >
        <div className="absolute inset-0 z-1 bg-black/50"></div>
        <div className="absolute inset-0 z-4 py-14 h-full w-full flex items-center justify-center flex-col gap-7 px-5">
          <h3 className="text-white font-bold text-2xl md:text-4xl capitalize text-center md:text-left">
            {contactUsData.title}
          </h3>
          <p className="text-[16px] md:text-lg text-center w-full md:max-w-[70%] text-white">
            {contactUsData.desc}
          </p>
          <Button
            text="Contact Us Today"
            hoverText="Let's go!"
            className="mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
