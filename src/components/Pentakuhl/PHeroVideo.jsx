import React from "react";
import Video from "../../assets/videos/homevideo.mp4";
import Button from "../common/Button";

const PHeroVideo = ({ scrollToAbout }) => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        src={Video}
        className="w-full h-full md:h-screen aspect-video object-cover"
      ></video>
      <div className="absolute inset-0 bg-black/30 z-1" />
      <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center px-5">
        <div className="lg:w-1/2 flex flex-col gap-8">
          <h3 className="text-[24px] md:text-[28px] lg:text-3xl xl:text-5xl font-semibold leading-[12vw] md:leading-[6vw] lg:leading-[4vw] text-white text-center lg:text-left">
            Ensuring Safe Transport for <br className="hidden lg:block" />{" "}
            Temperature-Sensitive Products
          </h3>
          <div className="border-t-3 border-white"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <p className="text-[16px] md:text-[20px] md:text-lg text-white w-full lg:max-w-[65%] text-center lg:text-left">
              Explore our frequently asked questions to gain clarity about Penta
              Kuhl’s services and features
            </p>
            <Button
              text="Explore"
              hoverText="Explore"
              className="mx-auto lg:mx-0"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PHeroVideo;
