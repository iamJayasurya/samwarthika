"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const timelineData = [
  {
    year: "2015",
    img: "/images/timeline/2015.png",
    text: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
  },
  {
    year: "2018",
    img: "/images/timeline/2018.png",
    text: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
  },
  {
    year: "2020",
    img: "/images/timeline/2020.png",
    text: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
  },
  {
    year: "2023",
    img: "/images/timeline/2023.png",
    text: "To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.",
  },
];

export default function TimelineSwiper() {
  return (
    <section className="py-16 bg-white relative">
      <div className="w-[90%] mx-auto">
        {/* Timeline horizontal line */}
        <div className="absolute w-[90%]   top-1/2 h-[2px] bg-green-900 z-0"></div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={60}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="relative z-10"
        >
          {timelineData.map((item, index) => {
            const isTop = index % 2 === 0; // alternate top/bottom
            return (
              <SwiperSlide key={index} className="flex flex-col items-center relative">
                <div
                  className={`flex flex-col items-center w-[300px] ${
                    isTop ? "mb-20" : "mt-20"
                  }`}
                >
                  {isTop && (
                    <>
                     <div className="w-[250px] h-[250px] rounded-full overflow-hidden mb-[16px] border-4 border-green-900 relative 
    after:absolute after:content-[''] after:h-[30px] after:w-[1px] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[var(--secondary)]">


                        <Image
                          src={item.img}
                          alt={item.year}
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-3xl font-bold text-green-900 mt-[60px]">{item.year}</h3>
                      <p className="mt-4 text-gray-700 text-center px-4">{item.text}</p>
                      
                    </>
                  )}

                  {!isTop && (
                    <>
                      
                      <p className="mb-[16px] text-gray-700 text-center px-4">{item.text}</p>
                      <h3 className="text-3xl font-bold text-green-900 mb-4 mb-[80px]">{item.year}</h3>
                      <div className="w-[250px] h-[250px] rounded-full overflow-hidden  border-4 border-green-900">
                        <Image
                          src={item.img}
                          alt={item.year}
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
