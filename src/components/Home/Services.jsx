import React, { useRef } from "react";
import CardOne from "../../assets/images/card-one.png";
import CardTwo from "../../assets/images/card-two.png";
import CardThree from "../../assets/images/card-three.png";
import CardFour from "../../assets/images/card-four.png";
import CardFive from "../../assets/images/card-five.jpg";
import CardSixe from "../../assets/images/card-six.png";
import Button from "../common/Button";
import { services } from "../../json";
import ServicesCard from "./ServicesCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { MdOutlineVerified } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import { GrDeliver } from "react-icons/gr";

const serviceBgColors = [
  "#e9ac70",
  "#4f9ad5",
  "#77906b",
  "#6a5d4e",
  "#7c6ebd",
  "#4e5a7b",
];

const Services = () => {
  const wrapper = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".service-card");

    gsap.set(cards, {
      position: "absolute",
      inset: 0,
    });

    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: i + 1,
        yPercent: i === 0 ? 0 : 100,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top top",
        end: `+=${cards.length * window.innerHeight}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    cards.slice(1).forEach((card) => {
      tl.to(card, {
        yPercent: 0,
        duration: 1,
        ease: "none",
      });
    });
  }, []);

  return (
    <section className="min-h-screen w-full">
      <div className="pt-10 pb-15 md:max-w-300 mx-auto px-5">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <h3 className="text-black border border-gray-300 rounded-full px-5 py-1 max-w-fit text-[16px] md:text-[20px]">
              Services
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-start justify-between mt-7">
            <p className="text-2xl md:text-4xl lg:leading-[4vw] xl:leading-[3vw]">
              Seamless Solutions for <br className="hidden md:block" />{" "}
              <span className="text-[#808080]">Every Logistics Need</span>
            </p>
            <p className="text-[16px] md:text-lg text-[#425462] w-full md:max-w-[40%]">
              Tailored logistics solutions for timely, cost-effective deliveries
              across air, sea, and multimodal transport.
            </p>
          </div>
        </div>
        <div ref={wrapper} className="services-wrapper relative">
          <div className="cards">
            {services.map((service, index) => (
              <ServicesCard
                key={service.id}
                index={index}
                bgColor={serviceBgColors[index]}
                {...service}
              />
            ))}
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <h3 className="text-black border border-gray-300 rounded-full px-5 py-1 max-w-fit text-[16px] md:text-[20px]">
                  Why us
                </h3>
              </div>
              <p className="text-2xl md:text-4xl lg:leading-[4vw] xl:leading-[3vw]">
                Why choose <br className="hidden md:block" />{" "}
                <span className="text-[#808080]">Penta Freight.</span>
              </p>
            </div>
            <div className="border-none md:border-l border-gray-300 flex flex-col gap-1 p-0 md:pl-3">
              <MdOutlineVerified className="w-15 h-15" />
              <h3 className="text-black text-[20px] mt-3">
                Comprehensive Solutions
              </h3>
              <p className="text-[16px] md:text-lg text-[#808080]">
                Full-spectrum logistics services including air, sea, and
                multimodal transport for seamless handling of your cargo.
              </p>
            </div>
            <div className="border-none md:border-l border-gray-300 flex flex-col gap-1 p-0 md:pl-3">
              <SiExpensify className="w-13 h-13" />
              <h3 className="text-black text-[20px] mt-3">
                Expertise and Experience
              </h3>
              <p className="text-[16px] md:text-lg text-[#808080]">
                Over 30+ years of experience with skilled customs agents
                ensuring accurate clearance and secure delivery.
              </p>
            </div>
            <div className="border-none md:border-l border-gray-300 flex flex-col gap-1 p-0 md:pl-3">
              <GrDeliver className="w-13 h-13" />
              <h3 className="text-black text-[20px] mt-3">
                State-of-the-Art Facilities
              </h3>
              <p className="text-[16px] md:text-lg text-[#808080]">
                Advanced transit warehouse with specialized storage and a fleet
                of reefer and general trucks for efficient nationwide transport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
