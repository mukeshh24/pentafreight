import React, { useRef } from "react";
import ProductLeftImgOne from "../../assets/images/product-left-img-one.png";
import ProductLeftImgTwo from "../../assets/images/product-left-img-two.png";
import ProductLeftImgThree from "../../assets/images/product-left-img-three.png";
import ProductRightImgOne from "../../assets/images/product-right-img-one.png";
import ProductRightImgTwo from "../../assets/images/product-right-img-two.png";
import ProductRightImgThree from "../../assets/images/product-right-img-three.png";
import ProductRightImgFour from "../../assets/images/product-right-img-four.png";
import Button from "../common/Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

const Products = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      md: gsap.fromTo(
        ".left-product-card",
        {
          x: -180,
          rotate: -12,
          opacity: 0,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".product-cards",
            start: "top 70%",
            end: "top 25%",
            scrub: 1,
          },
        },
      );
      gsap.fromTo(
        ".right-product-card",
        {
          x: 180,
          rotate: 12,
          opacity: 0,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".product-cards",
            start: "top 70%",
            end: "top 25%",
            scrub: 1,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen w-full overflow-hidden">
      <div className="md:max-w-400 mx-auto px-5">
        <div className="flex items-center justify-center w-full xl:h-[15vh] mb-5 md:mb-15 xl:mb-30">
          <h3 className="text-black text-[24px] md:text-[32px] lg:text-6xl mt-25 md:mt-30 xl:mt-50">
            Product Solutions
          </h3>
        </div>
        <div className="product-cards flex items-start flex-col md:flex-row gap-10 md:gap-15 w-full h-full md:h-[130vh] lg:h-[90vh] xl:h-[75vh]">
          <div className="left-product-card w-full md:w-1/2 md:opacity-0">
            <div className="flex flex-col items-center gap-5 md:gap-10 p-4 md:p-8 shadow">
              <h3 className="text-black text-[24px] md:text-3xl lg:text-4xl xl:texl-5xl">
                Parcel Shippers
              </h3>
              <p className="text-[16px] md:text-lg xl:text-2xl text-center">
                We understand the unique challenges faced by parcel shippers and
                offer tailored solutions for seamless shipping.
              </p>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-3 lg:gap-1 shadow p-2">
                <h3 className="text-black text-[20px] xl:text-3xl font-semibold text-center lg:text-left">
                  Single Use
                </h3>
                <div className="border-0 lg:border-l border-gray-300 flex items-center justify-center">
                  <img
                    src={ProductLeftImgOne}
                    alt="coolguard pcm"
                    className=" h-14 object-contain"
                  />
                </div>
                <div className="border-0 lg:border-l border-gray-300 flex items-center justify-center">
                  <img
                    src={ProductLeftImgTwo}
                    alt="coolguard advance"
                    className=" h-14 object-contain"
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-3 lg:gap-1 shadow p-2">
                <h3 className="text-black text-[20px] xl:text-3xl font-semibold text-center lg:text-left">
                  Reusable
                </h3>
                <div className="border-0 lg:border-l border-gray-300 flex items-center justify-center">
                  <img
                    src={ProductLeftImgThree}
                    alt="credo cube"
                    className=" h-14 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center"></div>
              </div>
              <Button
                text="Parcel Shippers"
                hoverText="Let's go!"
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>
          <div className="right-product-card w-full md:w-1/2 md:opacity-0">
            <div className="flex flex-col items-center gap-5 md:gap-10 p-4 md:p-8 shadow">
              <h3 className="text-black text-[24px] md:text-3xl lg:text-4xl xl:texl-5xl">
                Pallet Shippers
              </h3>
              <p className="text-[16px] md:text-lg xl:text-2xl text-center">
                We provide tailored services for pallet shippers, ensuring your
                cargo arrives safely and efficiently.
              </p>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-3 lg:gap-1 shadow p-2">
                <h3 className="text-black text-[20px] xl:text-3xl font-semibold text-center lg:text-left">
                  Single Use
                </h3>
                <div className="border-0 lg:border-l border-gray-300 flex items-center justify-center">
                  <img
                    src={ProductRightImgOne}
                    alt="cool pall vectors"
                    className=" h-14 object-contain"
                  />
                </div>
                <div className="border-0 lg:border-l border-gray-300 flex items-center justify-center">
                  <img
                    src={ProductRightImgTwo}
                    alt="cool pall vectors advance"
                    className=" h-14 object-contain"
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-3 lg:gap-1 shadow p-2">
                <h3 className="text-black text-[20px] xl:text-3xl font-semibold text-center lg:text-left">
                  Reusable
                </h3>
                <div className="border-0 lg:border-l border-gray-300 flex items-center justify-center">
                  <img
                    src={ProductRightImgThree}
                    alt="credo x-treme"
                    className=" h-14 object-contain"
                  />
                </div>
                <div className="border-0 lg:border-l border-gray-300 flex items-center justify-center">
                  <img
                    src={ProductRightImgFour}
                    alt="credo cargo"
                    className=" h-14 object-contain"
                  />
                </div>
              </div>
              <Button
                text="Pallet Shippers"
                hoverText="Let's go!"
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
