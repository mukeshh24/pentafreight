import React from "react";
import Lines from "../../assets/images/lineas.png";
import WorldMap from "../../assets/images/world-map.webp";

const OurGlobalFootPrint = () => {
  return (
    <section
      className="w-full bg-[#425462] bg-cover bg-no-repeat py-12 md:py-20 overflow-hidden"
      style={{ backgroundImage: `url(${Lines})` }}
    >
      <div className="max-w-300 mx-auto px-5">
        <div
          className="h-full w-full bg-[#425462] bg-cover bg-no-repeat flex items-center justify-center flex-col"
          style={{ backgroundImage: `url(${Lines})` }}
        >
          <h3 className="text-[#f06c30] font-bold text-2xl md:text-4xl capitalize">
            Our Global Footprint
          </h3>
          <img
            src={WorldMap}
            alt="Our Global Footprint"
            className="mt-10 w-full max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurGlobalFootPrint;
