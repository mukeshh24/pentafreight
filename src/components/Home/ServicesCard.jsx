import React, { useEffect, useState } from "react";
import Button from "../common/Button";

const ServicesCard = ({
  title,
  image,
  position,
  description1,
  description2,
  tags,
  index,
  bgColor,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      className="service-card rounded-3xl overflow-hidden bg-cover md:bg-center mb-5"
      style={{
        backgroundImage: window.innerWidth >= 768 ? `url(${image})` : "none",
        backgroundColor: bgColor,
        zIndex: index + 1,
      }}
    >
      <div
        className={`flex items-center justify-center h-full w-full py-12 ${
          position === "left" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="hidden md:block md:w-1/2" />
        <div className="w-full lg:w-1/2 px-4 md:px-12 flex items-center text-white md:text-black">
          <div className="w-full md:max-w-md">
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-6">{title}</h2>
            <p className="mb-1 md:mb-5 text-[16px] leading-7">{description1}</p>
            <p className="mb-8 text-[16px] md:leading-7">{description2}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-gray-300 text-[14px] md:text-[16px] rounded-full px-4 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button
              text="Read More"
              hoverText="Let's Go!"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
