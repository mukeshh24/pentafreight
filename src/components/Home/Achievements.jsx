import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lines from "../../assets/images/lineas.png";
import { stats } from "../../json";
import Button from "../common/Button";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-[#425462] bg-cover bg-no-repeat py-20"
      style={{ backgroundImage: `url(${Lines})` }}
    >
      <div className="md:max-w-300 mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center md:items-start gap-7">
            <h3 className="text-[#f06c30] font-bold text-2xl md:text-4xl capitalize">
              Our Achievements
            </h3>
            <p className="text-[16px] md:text-lg text-center md:text-left text-white">
              Over 31+ years of excellence, trusted globally, delivering
              reliable logistics solutions with precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl flex flex-col items-center md:items-start"
              >
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-3">
                  {item.text ? (
                    item.text
                  ) : (
                    <>
                      {inView ? <Counter end={item.number} /> : 0}
                      {item.suffix}
                    </>
                  )}
                </h3>
                <p className="text-white/70 text-lg leading-7">{item.title}</p>
              </div>
            ))}
          </div>
          <Button
            text="Read More"
            hoverText="Let's Go"
            className="block md:hidden mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
