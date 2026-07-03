import React, { useState } from "react";
import { awards } from "../../json";
import { motion } from "motion/react";

const Awards = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="min-h-screen w-full">
      <div className="pt-10 pb-15 md:max-w-300 mx-auto px-5">
        <div className="mb-15">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <h3 className="text-black border border-gray-300 rounded-full px-5 py-1 max-w-fit text-[16px] md:text-[20px]">
              Awards
            </h3>
          </div>
          <div className="flex items-start justify-between mt-5">
            <p className="text-2xl md:text-4xl lg:leading-[4vw] xl:leading-[3vw]">
              Proudly Recognized with Prestigious{" "}
              <br className="hidden md:block" />{" "}
              <span className="text-[#808080]">Awards and Accolades.</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {awards.map((award) => {
            const isActive = activeCard === award.id;
            const hasActive = activeCard !== null;

            return (
              <motion.div
                key={award.id}
                onHoverStart={() => setActiveCard(award.id)}
                onHoverEnd={() => setActiveCard(null)}
                animate={{
                  opacity: hasActive ? (isActive ? 1 : 0.35) : 1,
                  scale: hasActive ? (isActive ? 1.04 : 0.96) : 1,
                  filter: hasActive
                    ? isActive
                      ? "blur(0px)"
                      : "blur(2px)"
                    : "blur(0px)",
                  y: isActive ? -10 : 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                whileHover={{
                  rotateX: 6,
                  rotateY: 6,
                }}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-2xl flex flex-col items-start"
              >
                <motion.img
                  src={award.image}
                  alt="Award"
                  className="w-full object-cover"
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                />
                <div className="mt-5">
                  {award.titles.map((title, index) => (
                    <motion.p
                      key={index}
                      animate={{
                        color: isActive ? "#111827" : "#808080",
                        y: isActive ? -2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[16px]"
                    >
                      {title}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
