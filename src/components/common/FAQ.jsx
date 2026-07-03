import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqs } from "../../json";

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full h-full">
      <div className="max-w-300 mx-auto px-5">
        <div className="pt-5 md:pt-30 flex flex-col items-center justify-center">
          <h3 className="text-black text-[24px] md:text-[26px] lg:text-4xl">
            FAQ's
          </h3>
          <p className="text-[16px] md:text-lg text-center">
            Find answers to common industry questions, ensuring clarity on our
            services, processes, and solutions.
          </p>
        </div>
        <div className="mt-5 mb-15">
          {faqs.map((item, index) => (
            <div
              key={item.id}
              className={`border-b border-gray-300 py-5 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <h3 className="font-medium text-[20px]">{item.question}</h3>
                <FiChevronDown
                  className={`text-2xl text-[#808080] transition-all duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-[16px]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
