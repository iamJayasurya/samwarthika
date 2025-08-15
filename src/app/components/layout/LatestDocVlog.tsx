'use client'
import React from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export default function LatestDocVlog() {
  const DoctorVlogSwiper = () => {
  const images = [
    { src: `${ASSET_PREFIX}/assets/images/doc-vlog-1.jpg`, alt: "Doctor Vlog 1" },
    { src: `${ASSET_PREFIX}/assets/images/doc-vlog-2.jpg`, alt: "Doctor Vlog 2" },
    { src: `${ASSET_PREFIX}/assets/images/doc-vlog-3.jpg`, alt: "Doctor Vlog 3" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop={true} // enables infinite scroll
      loopAdditionalSlides={images.length} // adds duplicates for smoother loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      style={{ width: "100%", margin: "0 auto" }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {images.concat(images).map((img, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-[30px] overflow-hidden">
            <Link href="">
              <Image
                width={560}
                height={315}
                alt={img.alt}
                src={img.src}
              />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
  return (
    <>
      <section className="pb-[100px]  max-2xl:pb-[80px]   max-xl:pb-[60px]  max-md:pb-[40px]">
        <div className="w-[90%] m-[auto]">
          <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </h2>
          <h3 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center w-[fit-content]">
            Latest Doctors Talk
          </h3>
          <div className="grid grid-cols-3 max-mlg:grid-cols-2 max-sm:grid-cols-1 gap-[30px] max-2xl:gap-[20px]   mt-[60px]">
            <div className="rounded-[30px] overflow-hidden ">
              <Link href={""}>
                <Image
                  width={560}
                  height={315}
                  alt="Doctor Vlog 1"
                  src={`${ASSET_PREFIX}/assets/images/doc-vlog-1.jpg`}
                />
              </Link>
            </div>
            <div className="rounded-[30px] overflow-hidden ">
              <Link href={""}>
                <Image
                  width={560}
                  height={315}
                  alt="Doctor Vlog 2"
                  src={`${ASSET_PREFIX}/assets/images/doc-vlog-2.jpg`}
                />
              </Link>
            </div>
            <div className="rounded-[30px] overflow-hidden ">
              <Link href={""}>
                <Image
                  width={560}
                  height={315}
                  alt="Doctor Vlog 3"
                  src={`${ASSET_PREFIX}/assets/images/doc-vlog-3.jpg`}
                />
              </Link>
            </div>
          </div>
          {/* <DoctorVlogSwiper/> */}
        </div>
      </section>
    </>
  );
}
