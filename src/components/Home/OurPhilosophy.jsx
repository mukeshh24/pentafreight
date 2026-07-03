import React from "react";
import Button from "../common/Button";
import Lines from "../../assets/images/lineas.png";

const OurPhilosophy = () => {
  return (
    <section className="h-full w-full">
      <div
        className="h-full w-full bg-[#425462] bg-cover bg-no-repeat py-10 md:py-14 flex items-center justify-center flex-col gap-7 px-5"
        style={{ backgroundImage: `url(${Lines})` }}
      >
        <h3 className="text-[#f06c30] font-bold text-2xl md:text-4xl capitalize">
          Our Philosophy
        </h3>
        <p className="text-[16px] md:text-lg text-white w-full lg:max-w-[70%] text-center">
          Customer satisfaction drives everything we do. Every shipment is a
          promise, and we deliver it with precision, care, and professionalism.
          With expert resources, we ensure safe, timely transport, building
          lasting partnerships founded on trust and excellence
        </p>
        <Button
          text="Read More"
          hoverText="Let's Go!"
          className="mx-auto lg:mx-0"
        />
      </div>
    </section>
  );
};

export default OurPhilosophy;
