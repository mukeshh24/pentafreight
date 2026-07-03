import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const topData = [
  "Tailored Freight Solutions",
  "Robust Load Security",
  "Expert Logistics Support",
];

const bottomData = [
  "End-to-End Supply Chain Management",
  "Flexible Shipping Schedules",
  "Volume Discounts",
];

const Features = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const topX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const bottomX = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={ref} className="h-full w-full pt-20 pb-5 overflow-hidden">
      <motion.div style={{ x: topX }} className="flex w-max">
        {topData.concat(topData).map((item, i) => (
          <div
            key={i}
            className="w-[320px] h-20 xl:h-25 border border-gray-300 flex items-center justify-center text-center text-xl xl:text-2xl font-semibold shrink-0"
          >
            {item}
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: bottomX }} className="flex w-max mt-7">
        {bottomData.concat(bottomData).map((item, i) => (
          <div
            key={i}
            className="w-[320px] h-20 xl:h-25 border border-gray-300 flex items-center justify-center text-center text-xl xl:text-2xl font-semibold shrink-0"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
