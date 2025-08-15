'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from "next/link";
import { ASSET_PREFIX } from '../../../../config';

export default function TreatmentSubbnr(){
  const images = [
    '/assets/images/ayur-physic.jpg',
    '/assets/images/ayur-physic.jpg',
    '/assets/images/ayur-physic.jpg',
  ];
  const [activeIndex, setActiveIndex] = useState(0);
   const swiperRef = useRef<SwiperType | null>(null); 
    return(
        // <section className="pb-[100px] max-xxl:pb-[80px] max-xl:pb-[70px] max-mlg:pb-[50px] ">
        <section className="">
            <div className="bg-[#c8e3d2]">
           <div className="w-[90%] mx-auto ">
            <div className="grid grid-cols-1 mlg:grid-cols-2">
                <div className="p-[60px]">
                    <h1 className="text-[var(--secondary)] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-start w-[fit-content]"><span className="text-white">Healing begins in the</span> <br /> lap of Nature</h1>
                    <p className="mt-[40px] mb-[30px]   text-[var(--secondary)] w-full mlg:w-[80%]  text-[18px] leading-[24px]">To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.</p>
                    <div className="btn-wrp flex gap-[20px]  ">
                        <Link className="mt-4 text-[14px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[#fff]  border-1 border-[#fff]  text-[var(--primary)] hover:bg-[transparent] hover:text-[#fff] transition duration-300" href="/">Book Appointment</Link>
                        <Link className="mt-4 text-[14px] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3  hover:bg-[#fff] border-1 border-[var(--secondary)]  hover:text-[var(--primary)] hover:border-[var(--primary)] transition duration-300 text-[var(--secondary)] " href="/">What Customer Says</Link></div>
                </div>
                <div className="relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <Image
                src={`${ASSET_PREFIX}${src}`}
                alt={`Ayurveda Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 right-4 flex gap-[5px] z-10 w-fit ">
        {images.map((_, idx) => (
          <button
            key={idx}
             onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(idx);
                      }
                    }}
            className={`w-[12px] h-[12px] rounded-full transition-all duration-300 cursor-pointer
              ${activeIndex === idx ? "bg-white w-[35px] " : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>

            </div>
           </div>
           </div>

        </section>
    )
}