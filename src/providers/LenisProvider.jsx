import Lenis from "lenis";
import React, { useEffect } from "react";
import { ScrollTrigger } from "../lib/gsap";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
};

export default LenisProvider;
