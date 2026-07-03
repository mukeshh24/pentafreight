import React from "react";
import Button from "../common/Button";
import Lines from "../../assets/images/lineas.png";
import BioThermalImng from "../../assets/images/biothermal.png";

const BioThermal = () => {
  return (
    <section className="h-full w-full">
      <div
        className="h-full w-full bg-[#425462] bg-cover bg-no-repeat py-10 md:py-14 lg:py-20 flex items-center justify-center flex-col gap-7 px-5"
        style={{ backgroundImage: `url(${Lines})` }}
      >
        <div className="w-35 md:w-50 bg-white rounded-2xl flex items-center justify-center p-6">
          <img
            src={BioThermalImng}
            alt="bio thermal"
            className="object-contain"
          />
        </div>
        <p className="text-[16px] md:text-xl lg:text-3xl text-white w-full lg:max-w-[70%] text-center">
          Authorized Distributors for Pelican BioThermal<sup>tm</sup> Products
        </p>
        <Button text="Read More" hoverText="Let's Go" />
      </div>
    </section>
  );
};

export default BioThermal;
