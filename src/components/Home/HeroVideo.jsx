import React from "react";
import Video from "../../assets/videos/homevideo.mp4";
import { HiArrowLongDown } from "react-icons/hi2";

const HeroVideo = ({ scrollToAbout }) => {
  return (
    <section className="w-full h-[60vh] lg:h-full relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        src={Video}
        className="w-full h-full md:h-screen aspect-video object-cover"
      ></video>
      <div
        onClick={scrollToAbout}
        className="h-25 md:h-50 w-25 md:w-50 border border-gray-500 rounded-full absolute left-1/2 -bottom-15 md:-bottom-30 -translate-x-1/2 flex justify-center cursor-pointer"
      >
        <HiArrowLongDown className="w-5 h-5 text-gray-500 mt-3 md:mt-10" />
      </div>
    </section>
  );
};

export default HeroVideo;
