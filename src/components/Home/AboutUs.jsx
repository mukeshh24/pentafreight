import React from "react";
import AboutImg from "../../assets/images/aboutImg.jpg";
import BlankImg from "../../assets/images/blank.png";

const AboutUs = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="h-full lg:h-screen w-full">
      <div
        className="h-[70vh] lg:h-full w-full bg-cover bg-top relative"
        style={{
          backgroundImage: `url(${AboutImg})`,
        }}
      >
        <img
          src={BlankImg}
          alt="about us"
          className="w-full h-[120vh] lg:h-full absolute inset-0"
        />
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-[80%] xl:w-[60%]  absolute top-0 left-1/2 -translate-x-1/2 py-10 z-3 px-5 lg:gap-2">
          <div className="flex items-center flex-col w-full lg:w-[25%]">
            <h3 className="uppercase text-[#f06c30] font-bold py-2">
              About us
            </h3>
            <h3 className="uppercase text-[#f06c30] font-bold border-t-[3px] border-[#f06c30] py-2 w-fit">
              Penta freight
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-[16px] md:text-lg text-[#425462] text-center lg:text-left">
              Penta Freight provides reliable{" "}
              <span className="font-bold">logistics solutions</span>,
              specializing in temperature-sensitive shipments. We ensure safe,
              <span className="font-bold">on-time delivery</span> worldwide.
              Trust us for seamless supply chain management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
