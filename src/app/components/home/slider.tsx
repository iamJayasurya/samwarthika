"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import { useState, useRef } from "react";
import Link from "next/link";

export default function CustomSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const slides = [
    {
      img: "/assets/images/ayurvedic.jpg",
      title: "Healing begins in the lap of nature",
      desc: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
      button1: "Book Appointment",
      button2: "What Customer Says",
      subtitle: "Ayurvedic Panchakarma",
    },
    {
      img: "/assets/images/ayur-cosmetology.jpg",
      title: "Healing begins in the lap of nature",
      desc: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
      button1: "Book Appointment",
      button2: "What Customer Says",
      subtitle: "Ayur Cosmetology",
    },
    {
      img: "/assets/images/yoga-therapy.jpg",
      title: "Healing begins in the lap of nature",
      desc: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
      button1: "Book Appointment",
      button2: "What Customer Says",
      subtitle: "Yoga & Meditations",
    },
    {
      img: "/assets/images/ayur-physio.jpg",
      title: "Healing begins in the lap of nature",
      desc: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
      button1: "Book Appointment",
      button2: "What Customer Says",
      subtitle: "Ayur Physio",
    },
    // Add more slides...
  ];
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="">
      <Swiper
        loop={true} // IMPORTANT for slideToLoop
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-slider relative">
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className=" container-start h-[800px] max-xxl:h-[700px]  max-2xl:h-[650px] max-mlg:h-[600px] max-sm:h-[550px] bg-cover bg-center relative text-white object-cover object-center"
              style={{ backgroundImage: `url(${slide.img})` }}>
              <div className=" p-6 rounded text-start  absolute  bottom-[10%]  left-[10%] max-2xl:left-[5%] max-w-[530px]  max-md:w-[70%]  max-sm:w-[90%]">
                <h2 className="text-[60px] leading-[65px] max-xxl:text-[55px] max-xxl:leading-[65px] max-2xl:text-[50px] max-2xl:leading-[58px]  max-mlg:text-[45px] max-mlg:leading-[48px] max-sm:text-[38px] max-sm:leading-[40px] font-normal font-[source,serif4]">
                  {slide.title}
                </h2>
                <p className="my-[20px] max-mlg:my-[10px] text-[#fff]/80  text-[18px] leading-[24px] max-mlg:text-[16px] max-mlg:leading-[22pxz]">
                  {slide.desc}
                </p>
                <div className="btn-wrp flex gap-[20px] max-sm:gap-[10px]  flex-wrap mt-4">
                  <Link
                    href={"/"}
                    className=" text-[14px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[#fff]  border-1 border-[#fff]  text-[var(--primary)] hover:bg-[transparent] hover:text-[#fff] transition duration-300">
                    {slide.button1}
                  </Link>
                  <Link
                    href={"/"}
                    className=" text-[14px] leading-[18px] tracking-[2px] uppercase font-light px-5 py-3  hover:bg-[#fff] border-1 border-[#fff]  hover:text-[var(--primary)] transition duration-300">
                    {slide.button2}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-[150px] right-[5%] flex gap-[5px] z-10">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className={`w-[15px] h-[15px] rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === i ? "bg-[#d6d2cf] w-[45px]" : "bg-[#d6d2cf]/50"
            }`}
          />
        ))}
      </div>
      <div className="w-[90%] m-[auto]">
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          modules={[Thumbs]}
          className="my-4 mx-auto ">
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="text-center relative rounded-[30px]  overflow-hidden  ">
                <img
                  src={slide.img}
                  alt=""
                  className="h-90 max-xxl:h-[300px] max-2xl:h-[250px] max-xl:h-[200px] max-mlg:h-[150px] max-md:h-[100px] w-full object-cover rounded"
                />
                <p className="absolute bottom-[8%] text-[24px] leading-[26px] max-xxl:text-[22px] max-xxl:leading-[24px] max-2xl:text-[20px] max-2xl:leading-[22px]  max-mlg:text-[18px] max-mlg:leading-[20px] text-start text-white mt-1 left-[10%]  w-[95%] max-w-[180px] max-sm:hidden">
                  {slide.subtitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
