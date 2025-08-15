"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Therapyofchoice() {
  const sliderImages = [
    "/assets/images/home-2.jpg",
    "/assets/images/home-2.jpg",
    "/assets/images/home-2.jpg",
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        {/* Section 2 */}
        <div className="w-[90%] m-[auto]">
          <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </h2>
          <h3 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center w-[fit-content]">
            Get a Therapy of your <br />
            Choice
          </h3>

          <div className="grid grid-cols-[55%_45%]  max-lg:grid-cols-[50%_50%] max-[850px]:flex max-[850px]:flex-col-reverse  mt-[50px]">
            <div>
              <Image
                src="/assets/images/home.jpg"
                alt="Front view of Ayurvedic Hospital"
                width={1000}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#708B4E] flex items-center justify-center p-8 text-white border-l-[2px] border-white">
              <div  className="py-[40px]   max-xl:py-[30px]  max-mlg:py-[20px]" >
                <p className=" uppercase tracking-[4px] text-gray-200 mb-3 m-auto text-center text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
                  The Ayurvedic Hospitality
                </p>
                <h2 className="text-[#fff] m-auto  font-[source,serief4] my-[20px] text-[40px] leading-[46px] max-2xl:text-[38px]   leading-[42px] max-xl:text-[34px] max-xl:leading-[40px] max-lg:text-[28px] max-lg:leading-[32px] max-mlg:text-[24px] max-mlg:leading-[30px] max-sm:text-[20px] max-sm:leading-[24px] font-normal   text-center w-[fit-content]">
                  Get a Traditional Accommodation <br className="max-mlg:hidden" /> of your Choice
                </h2>
                <div className="w-20 h-[2px] bg-white opacity-70 mb-5 mx-auto mt-[10px]"></div>
                <p className="text-[20px] leading-[24px] max-2xl:text-[18px] max-2xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px] mt-[50px] max-xl:mt-[35px] max-lg:mt-[25px] text-center">
                  The Ayurveda Hospital in Ernakulam offers therapies including
                  panchakarma, abhyanga, elakizhi, nasyam, pizhichil, njavarakizhi,
                  sirodhara, sirovasthi, kativasthi, detoxification and rejuvenation
                  for healthy life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-[90%] m-[auto]">
          <div className="grid grid-cols-[50%_50%] max-[850px]:grid-cols-[100%] mt-[50px]">
            <div className="bg-[#cc6214] flex items-center justify-center p-8 text-white">
              <div className="py-[40px]   max-xl:py-[30px]  max-mlg:py-[20px]">
                <p className=" uppercase tracking-[4px] text-gray-200 mb-3 m-auto text-center text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
                  The Ayurvedic Hospitality
                </p>
                <h2 className="text-[#fff] m-auto  font-[source,serief4] my-[20px] text-[40px] leading-[46px] max-2xl:text-[38px]
           leading-[42px] max-xl:text-[34px] max-xl:leading-[40px] max-lg:text-[28px] max-lg:leading-[32px] max-mlg:text-[24px] max-mlg:leaing-[30px] max-sm:text-[20px] max-sm:leading-[24px] font-normal   text-center w-[fit-content]">
                  Get a Traditional Accommodation <br className="max-mlg:hidden"/> of your Choice
                </h2>
                <div className="w-20 h-[2px] bg-white opacity-70 mb-5 mx-auto mt-[10px]"></div>
                <p className="text-[20px] leading-[24px] max-2xl:text-[18px] max-2xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px] mt-[50px] max-xl:mt-[35px] max-lg:mt-[25px] text-center">
                  The Ayurveda Hospital in Ernakulam offers therapies including
                  panchakarma, abhyanga, elakizhi, nasyam, pizhichil, njavarakizhi,
                  sirodhara, sirovasthi, kativasthi, detoxification and rejuvenation
                  for healthy life.
                </p>
              </div>
            </div>
            <div className="text-white border-l-[2px] border-white">
              <Image
                src="/assets/images/home-2.jpg"
                alt="Front view of Ayurvedic Hospital"
                width={1000}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 4 - Swiper with custom dots */}
        <div className="w-[90%] m-auto mt-[50px] grid grid-cols-[55%_45%]  max-lg:grid-cols-[50%_50%]                max-[850px]:flex! max-[850px]:flex-col-reverse ">
          {/* Left column - Swiper */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="w-full max-h-[500px]"
            >
              {sliderImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Dots (left side) */}
            <div className="absolute bottom-5 left-[5%] flex gap-[5px] z-10">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                  className={`w-[15px] h-[15px] rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "bg-[#4d8a01]" : "bg-[#d9d9d9]"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Right column - text */}
          <div className="bg-[#43230c] flex items-center justify-center p-8 text-white border-l-[2px] border-white h-full">
            <div className="py-[40px]   max-xl:py-[30px]  max-mlg:py-[20px]">
              <p className=" uppercase tracking-[4px] text-gray-200 mb-3 m-auto text-center text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
                The Ayurvedic Hospitality
              </p>
              <h2 className="text-[#fff] m-auto  font-[source,serief4] my-[20px] text-[40px] leading-[46px] max-2xl:text-[38px]   leading-[42px] max-xl:text-[34px] max-xl:leading-[40px] max-lg:text-[28px] max-lg:leading-[32px] max-mlg:text-[24px] max-mlg:leading-[30px] max-sm:text-[20px] max-sm:leading-[24px] font-normal   text-center w-[fit-content]">
                Get a Traditional Accommodation <br className="max-mlg:hidden"/> of your Choice
              </h2>
              <div className="w-20 h-[2px] bg-white opacity-70 mb-5 mx-auto mt-[10px]"></div>
              <p className="text-[20px] leading-[24px] max-2xl:text-[18px] max-2xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px] mt-[50px] max-xl:mt-[35px] max-lg:mt-[25px] text-center">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil, njavarakizhi,
                sirodhara, sirovasthi, kativasthi, detoxification and rejuvenation
                for healthy life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
