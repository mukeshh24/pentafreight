import React from "react";
import { motion } from "motion/react";
import Lines from "../../assets/images/lineas.png";
import { certifications } from "../../json";

const Certifications = () => {
  return (
    <section
      className="w-full bg-[#425462] bg-cover bg-no-repeat py-20 overflow-hidden"
      style={{ backgroundImage: `url(${Lines})` }}
    >
      <div className="max-w-300 mx-auto px-5">
        <div
          className="h-full w-full bg-[#425462] bg-cover bg-no-repeat pb-10 flex items-center justify-center flex-col gap-7"
          style={{ backgroundImage: `url(${Lines})` }}
        >
          <h3 className="text-[#f06c30] font-bold text-2xl md:text-4xl capitalize">
            Certifications
          </h3>
          <p className="text-[16px] md:text-lg text-white w-full md:max-w-[70%] text-center">
            Certified excellence, ensuring compliance, quality, and global
            logistics reliability.
          </p>
        </div>
        <div className=" overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...certifications, ...certifications].map((item, index) => (
              <div
                key={index}
                className="w-35 md:w-60 h-35 md:h-60 bg-white rounded-2xl flex items-center justify-center p-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
