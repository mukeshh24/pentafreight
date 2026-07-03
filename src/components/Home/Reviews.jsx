import React from "react";
// import { testimonials } from "../../json";
import ClientOne from "../../assets/images/client-one.png";
import ClientTwo from "../../assets/images/client-two.png";
import ClientThree from "../../assets/images/client-three.png";
import ClientFour from "../../assets/images/client-four.png";

const Reviews = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="py-20 md:max-w-300 mx-auto px-5">
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="w-full md:w-2/5 mb-10 relative">
            <div className="relative md:sticky md:top-[30%]">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <h3 className="text-black border border-gray-300 rounded-full px-5 py-1 max-w-fit text-[16px] md:text-[20px]">
                  Reviews
                </h3>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 items-start justify-between mt-5">
                <p className="text-2xl md:text-4xl lg:leading-[4vw] xl:leading-[3vw]">
                  Hear From Our Satisfied <br className="hidden md:block" />{" "}
                  <span className="text-[#808080]">Clients Worldwide.</span>
                </p>
                <p className="text-[16px] md:text-lg">
                  Explore what industry leaders and long-term partners say about
                  our commitment to excellence and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 md:mt-50">
            <div className="flex flex-col gap-10">
              <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img src={ClientOne} alt="client" className="object-cover" />
                </div>
                <p className="text-gray-600 md:leading-8 text-[16px] text-center">
                  "Penta Freight India was founded 25 years ago and has been a
                  highly valued and reliable partner of Lufthansa Cargo since
                  then. We know that they always stand by their commitment,
                  which makes a meaningful difference to our business. Their
                  continuous high focus on customer service and their strive
                  towards individual solutions are key to staying dynamic and
                  competitive in the market. Penta Freight is a pioneer in
                  various ways. They were amongst the first forwarders to become
                  our Premium Partner and so far they are the only one in
                  India."
                </p>
                <div className="mt-6">
                  <h4 className="text-2xl font-semibold text-center">
                    Frank Naeve
                  </h4>
                  <p className="text-gray-500 mt-1 text-center">
                    Vice President Asia Pacific
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={ClientThree}
                    alt="client"
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 md:leading-8 text-[16px] text-center">
                  "Penta Freight has been one of our export logistics service
                  providers for several years and our experience with them has
                  been consistently good. Besides having strong relationships
                  with airlines to obtain competitive rates, Penta Freight has
                  the ability to get things done in a compliant manner. In
                  addition, an excellent service level and professional
                  relationship was maintained throughout the course of export
                  operations. Best wishes for all success."
                </p>
                <div className="mt-6">
                  <h4 className="text-2xl font-semibold text-center">
                    Ryan Veigas
                  </h4>
                  <p className="text-gray-500 mt-1 text-center">
                    Vice President - Supply Chain & Procurement
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 md:mt-75">
              <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img src={ClientTwo} alt="client" className="object-cover" />
                </div>
                <p className="text-gray-600 md:leading-8 text-[16px] text-center">
                  "We highly regard Penta Freight's professionalism and
                  knowledge in the freight field. Their team takes the workload
                  and worry off our shoulders. For about two decades we have
                  been satisfied by the flexible, reliable and trustworthy
                  service and excellent quality of work. One key feature that
                  Penta Freight portrays is that they understand our needs and
                  put their best efforts in making things possible. They have
                  continued to innovate and change with the freight industry."
                </p>
                <div className="mt-6">
                  <h4 className="text-2xl font-semibold text-center">
                    Makarand Sane
                  </h4>
                  <p className="text-gray-500 mt-1 text-center">
                    General Manager Head - Export Logistics
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img src={ClientFour} alt="client" className="object-cover" />
                </div>
                <p className="text-gray-600 md:leading-8 text-[16px] text-center">
                  "Penta Freight India was founded 25 years ago and has been a
                  highly valued and reliable partner of Lufthansa Cargo since
                  then. We know that they always stand by their commitment,
                  which makes a meaningful difference to our business. Their
                  continuous high focus on customer service and their strive
                  towards individual solutions are key to staying dynamic and
                  competitive in the market. Penta Freight is a pioneer in
                  various ways. They were amongst the first forwarders to become
                  our Premium Partner and so far they are the only one in
                  India."
                </p>
                <div className="mt-6">
                  <h4 className="text-2xl font-semibold text-center">
                    Frank Naeve
                  </h4>
                  <p className="text-gray-500 mt-1 text-center">
                    Vice President Asia Pacific
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
