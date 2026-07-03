import React, { useState } from "react";
import { seriesData } from "../../json";

const SeriesGuide = () => {
  const [active, setActive] = useState(seriesData[0]);

  return (
    <section className="max-w-7xl mx-auto py-20 px-5">
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-black text-[24px] md:text-[26px] lg:text-4xl">
          Series <span className="text-[#425462c9]">Guide</span>
        </h3>
        <p className="text-[16px] md:text-lg text-center">
          This guide outlines temperature-controlled packaging solutions
          designed for the safe transport and storage of sensitive products,
          like vaccines and biologics, across various thermal conditions, from
          refrigerated to deep-freeze.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 shadow p-3">
        {seriesData.map((item) => (
          <button
            key={item.id}
            onMouseEnter={() => setActive(item)}
            onClick={() => setActive(item)}
            className={`py-5 text-lg font-medium transition-all duration-300 md:border-r md:border-gray-300 md:last:border-r-0 cursor-pointer
            ${
              active.id === item.id
                ? "text-[#f06c30]"
                : "text-black hover:text-[#f06c30]"
            }`}
          >
            {item.title.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="mt-8 rounded-xl shadow p-5 md:p-10">
        <p className="text-gray-600 md:leading-8 text-[16px] lg:text-[18px] mb-1">
          <strong>Temperature Range:</strong> {active.temp}
        </p>
        <p className="text-gray-600 md:leading-8 text-[16px] lg:text-[18px] mb-1">
          <strong>Usage & Applications:</strong> {active.usage}
        </p>
        <p className="text-gray-600 md:leading-8 text-[16px] lg:text-[18px]">
          <strong>Ideal For:</strong> {active.ideal}
        </p>
      </div>
    </section>
  );
};

export default SeriesGuide;
