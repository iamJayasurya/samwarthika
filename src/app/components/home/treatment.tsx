"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import { Swiper as SwiperClass } from "swiper";

const tabs = [
  {
    id: "tab1",
    title: (
      <>
        <p>
          General Medicine /<br /> Neurology
        </p>
      </>
    ),
    banner: "/assets/images/banner1.png",
    content: "Ayurvedic Treatments in Samwarthika",
    para: "The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam, pizhichil, njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification and rejuvenation for healthy life, rasayana chikitsa.",
    sideImages: [
      { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
      { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ],
  },
  {
    id: "tab2",
    title: (
      <>
        <p>
          Orthopaedics & Sports <br />
          Medicines
        </p>
      </>
    ),
    banner: "/assets/images/banner1.png",
    content: "Providing exceptional service for over 10 years.",
    sideImages: [
      { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
      { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ],
  },
  {
    id: "tab3",
    title: (
      <>
        <p>
          Women’s <br /> Healthcare
        </p>
      </>
    ),
    banner: "/assets/images/banner1.png",
    content: "Innovation meets excellence.",
    sideImages: [
      { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
      { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ],
  },
  {
    id: "tab4",
    title: (
      <>
        <p>
          Ayurvedic <br /> Paediatrics
        </p>
      </>
    ),
    banner: "/assets/images/banner1.png",
    content: "Innovation meets excellence.",
    sideImages: [
      { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
      { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ],
  },
  {
    id: "tab5",
    title: (
      <>
        <p>
          Ayurvedic
          <br />
          Cosmetology
        </p>
      </>
    ),
    banner: "/assets/images/banner1.png",
    content: "Innovation meets excellence.",
    sideImages: [
      { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
      { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ],
  },
  {
    id: "tab6",
    title: (
      <>
        <p>Rehabilitation</p>
      </>
    ),
    banner: "/assets/images/banner1.png",
    content: "Innovation meets excellence.",
    sideImages: [
      { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
      { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ],
  },
  {
    id: "tab7",
    title: (
      <>
        <p>
          Ayurvedic Retreat &
          <br />
          Panchakarma
        </p>
      </>
    ),
    banner: "/assets/images/banner1.png",
    content: "Innovation meets excellence.",
    sideImages: [
      { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
      { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
      { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
      { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
      { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
      { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
      { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ],
  },
];

export default function BannerWithTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [navReady, setNavReady] = useState(false); // 👈 ensures refs are ready
  const swiperRef = useRef<SwiperClass | null>(null);
  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="">
      <div className="container-start relative">
        {/* Banner */}
        <div className="relative w-full h-[500px] max-xl:h-[450px]  z-[0]">
          <Image
            src={activeTab.banner}
            alt="Banner"
            fill
            className="object-cover  object-top"
            priority
          />
          <div className="absolute left-1/2 max-xl:left-[auto] max-xl:right-[5%] top-[50%] -translate-x-[35%] -translate-y-1/2 max-xl:translte-0 text-left text-white z-[35]">
            <h1 className="text-white text-3xl font-extralight max-w-[800px] font-[source,serief4] font-[source,serief4]  text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-start w-[fit-content]">
              {activeTab.content}
            </h1>
            <p className="text-[#fff]/70  mt-[40px] my-[30px] max-w-[750px]  max-xl:w-[600px]">
              {activeTab.para}
            </p>
            <Link
              href=""
              className="uppercase   border-[#fff] border-1  block  max-xl:mt-[20px] uppercase border-1  py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[14px] max-md:leading-[18px] flex  w-[fit-content]">
              View More
            </Link>
          </div>
        </div>

        {/* Tabs & Image Section */}

        <div className="w-[80%] max-xl:w-[90%] mx-auto grid grid-cols-[380px_auto]  max-2xl:grid-cols-[300px_auto]   max-xl:grid-cols-[250px_auto] gap-8  relative z-[20] top-[-80px]">
          {/* Left side - Tabs */}
          <div>
            <div className="bg-[#c8e3d2] rounded-[90px_90px_0px_0px] pl-[30px] pt-[90px] max-2xl:pl-[20px] max-2xl:pt-[80px]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`block w-full text-left text-[#465b2f] text-[20px] leading-[26px] max-xl:text-[18px] max-xl:leading-[24px]  max-lg:text-[16px] max-lg:leading-[22px] py-3 px-4  max-lg:pr-[0px] rounded-[15px_0px_0px_15px] relative  after:absolute after:bottom-[0px] after:w-[100%] after:h-[1px] after:bg-[#fff] after:left-[13px] cursor-pointer ${activeTab.id === tab.id
                    ? "bg-[#fff]"
                    : "bg-transparent hover:bg-[#fff+]"
                    }`}
                  onClick={() => setActiveTab(tab)}>
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="border-2    border-[#c8e3d2] relative">
              <Image
                src={`${ASSET_PREFIX}/assets/images/spices-watercolor-set.jpg`}
                width={100}
                alt="tab-img"
                height={100}
                className="w-[180px] h-[auto] m-[auto] mt-[20px]"
              />
              <div className="absolute bottom-[-10px]  bg-[#fff] h-[20px] w-[80%] left-[10%]"></div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex items-center justify-center w-full  relative max-w-[900px] w-[100%]">
            <Swiper
  modules={[Pagination, Navigation]}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  spaceBetween={20}
  slidesPerView={1}
  observer={true} // auto re-measure
  observeParents={true}
  style={{
    width: "100%",
    maxWidth: "1000px", // limit so it won’t overflow
    margin: "0 auto", // center it
  }}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  }}
>
  {[...Array(Math.ceil(activeTab.sideImages?.length / 9))].map(
    (_, slideIndex) => (
      <SwiperSlide key={slideIndex}>
        <div className="grid grid-rows-3 gap-4 max-md:grid-rows-none max-lg:grid-cols-1 max-md:grid-cols-1">
          {[...Array(3)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1"
            >
              {activeTab.sideImages
                ?.slice(
                  slideIndex * 9 + rowIndex * 3,
                  slideIndex * 9 + rowIndex * 3 + 3
                )
                .map(({ img, imgtitle }, i) => (
                  <div
                    key={i}
                    className="text-center w-full h-[180px] max-xl:h-[150px] m-auto flex justify-center flex-col p-[10px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
                  >
                    <img
                      src={img}
                      alt={imgtitle}
                      className="object-contain mx-auto"
                    />
                    <p className="mt-2 text-[#31936d] text-[16px] leading-[24px] font-normal">
                      {imgtitle}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </SwiperSlide>
    )
  )}
</Swiper>






            {/* Custom Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-[5px] z-10 w-fit">
              {Array.from({
                length: Math.ceil(activeTab.sideImages?.length / 9),
              }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                  className={`h-[12px] rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                    ? "bg-[#d9d9d9] w-[35px]"
                    : "bg-[#9a8a80] w-[12px]"
                    }`}
                />
              ))}
            </div>

            {/* Prev Button */}
            <div
              ref={prevRef}
              className="prev-nav absolute bottom-0 -translate-y-1/2 left-[4.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200 border border-[#553e2b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#553e2b"
                className="w-6 h-6 text-gray-700">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>

            {/* Next Button */}
            <div
              ref={nextRef}
              className="next-nav absolute bottom-0 -translate-y-1/2 right-[4.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200 border border-[#553e2b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#553e2b"
                className="w-6 h-6 text-gray-700">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
