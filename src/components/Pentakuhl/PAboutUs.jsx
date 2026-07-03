import React from "react";

const PAboutUs = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="h-90 md:h-75 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-[80%] xl:w-[60%] py-10 lg:py-20 px-5 lg:gap-5 mx-auto">
        <div className="flex items-center flex-col w-full lg:w-[25%]">
          <h3 className="uppercase text-[#f06c30] font-bold py-2">About us</h3>
          <h3 className="uppercase text-[#f06c30] font-bold border-t-[3px] border-[#f06c30] py-2 w-fit">
            Penta freight
          </h3>
        </div>
        <div className="flex-1">
          <p className="text-[16px] md:text-lg text-[#425462] text-center lg:text-left">
            At <span className="font-bold">Pentakuhl</span> , we specialize in
            providing durable, effective packaging solutions that maintain
            temperature <span className="font-bold">stability</span> during
            transit, <span className="font-bold">protecting</span> your valuable
            products. Our innovative designs cater to various industries,
            including pharmaceuticals, food, and biotechnology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PAboutUs;
