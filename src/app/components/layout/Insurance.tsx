"use client";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
export default function Insurance() {
  const logos = [
    { src: "/paramount.webp", alt: "Paramount Health" },
    { src: "/sbi_gen.webp", alt: "SBI General Insurance" },
    { src: "/Bajaj_Allianz_Insurance.webp", alt: "Bajaj Allianz" },
    { src: "/volo.webp", alt: "Volo Insurance" },
    { src: "/link_k.webp", alt: "Link Insurance" },
    { src: "/star.webp", alt: "Star Health Insurance" },
    { src: "/Care_health_insurance.webp", alt: "Care Health Insurance" },
    { src: "/icici.webp", alt: "ICICI Lombard" },
    { src: "/hdfc.webp", alt: "HDFC Ergo" },
    { src: "/magma-hdi-logo.webp", alt: "Magma HDI" },
    { src: "/aditiya-logo.webp", alt: "Aditya Birla Capital" },
    {
      src: "/reliance-health-insurance.webp",
      alt: "Reliance Health Insurance",
    },
  ];

  return (
    <>
      <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="">
          <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </h2>
          <h3 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center w-[fit-content]">
            Insurance
          </h3>
          <div className="w-full px-4 py-8  mt-[40px]">
            <Swiper
              modules={[Autoplay, Grid]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              grid={{ rows: 2, fill: "row" }}
              slidesPerView={5}
              spaceBetween={80}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
              }}>
              {logos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center">
                  <img
                    src={`${ASSET_PREFIX}/assets/images/${logo.src}`}
                    alt={logo.alt}
                    className="h-14 w-auto object-contain m-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
