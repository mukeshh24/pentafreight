import React from "react";
import { motion } from "motion/react";
import { industries } from "../../json";

const HeroTitle = () => {
  return (
    <section className="w-full h-full">
      <div className="max-w-300 mx-auto px-5">
        <div className="pt-30 flex flex-col items-center justify-center">
          <h3 className="text-black text-[24px] md:text-[26px] lg:text-4xl">
            Industries
          </h3>
          <p className="text-[16px] md:text-lg text-center">
            Over the past two decades we have been coming up with innovative
            ways to enable global trade across various industries.
          </p>
        </div>
        <div className="drag-wala-code relative flex flex-wrap gap-6 justify-center py-10 md:py-20">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                drag
                dragConstraints={{
                  top: -120,
                  left: -120,
                  right: 120,
                  bottom: 120,
                }}
                dragElastic={0.15}
                whileDrag={{
                  scale: 1.05,
                  rotate: 8,
                  zIndex: 100,
                  cursor: "grabbing",
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="w-90 rounded-3xl border border-[#f06c30] bg-[#f06d30ca] p-8 cursor-grab select-none shadow-md"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#f06c30] p-3 flex items-center justify-center rounded-full">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white text-[16px]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroTitle;
