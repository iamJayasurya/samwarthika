"use client";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
export default function Ourdoctors() {
  const doctors = [
    {
      img: "/assets/images/dr-k-n-subramanian-namboothiri.jpg",
      name: "Dr. K. N. Subramanian Namboothiri",
      degree: "BAMS, MD(Ay) - Medical Director",
    },
    {
      img: "/assets/images/dr-jeevan-k-jose.jpg",
      name: "Dr. Jeevan K Jose",
      degree: "BAMS, MD(Ay), PGDCFT, MBA(Hrm) - Senior Medical Officer",
    },
    {
      img: "/assets/images/dr-valsaladevi-k.jpg",
      name: "Dr. Valsaladevi K",
      degree: "BAMS, FAGE, YIC, CNAD, MBA - Senior Consultant",
    },
    {
      img: "/assets/images/dr-jomy-joseph.jpg",
      name: "Dr. Jomy Joseph",
      degree: "BAMS, MD(Ay) - Senior Consultant",
    },
    {
      img: "/assets/images/dr-k-n-subramanian-namboothiri.jpg",
      name: "Dr. K. N. Subramanian Namboothiri",
      degree: "BAMS, MD(Ay) - Medical Director",
    },
    {
      img: "/assets/images/dr-jeevan-k-jose.jpg",
      name: "Dr. Jeevan K Jose",
      degree: "BAMS, MD(Ay), PGDCFT, MBA(Hrm) - Senior Medical Officer",
    },
    {
      img: "/assets/images/dr-valsaladevi-k.jpg",
      name: "Dr. Valsaladevi K",
      degree: "BAMS, FAGE, YIC, CNAD, MBA - Senior Consultant",
    },
    {
      img: "/assets/images/dr-jomy-joseph.jpg",
      name: "Dr. Jomy Joseph",
      degree: "BAMS, MD(Ay) - Senior Consultant",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="bg-[#e8f5d9] py-[100px]  max-2xl:py-[80px]   max-xl:py-[60px]  max-md:py-[40px]">
        <div className="w-[90%] m-auto">
          <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC DOCTORS
          </h2>
          <h3 className=" text-[#314a10] m-auto  font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center w-[fit-content]">
            Our Ayurvedic Consultants
          </h3>
          <div className="flex gap-[20px] w-[85%] m-[auto] py-[50px] relative">
            <Swiper
              modules={[Navigation]}
              navigation={
                prevRef.current && nextRef.current
                  ? { prevEl: prevRef.current, nextEl: nextRef.current }
                  : undefined
              }
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                767:{slidesPerView:3},
                999: { slidesPerView: 4 },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation = {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                };
              }}
              className="w-full  mx-[10%]  max-mlg:mx-[13%]">
              {doctors.map((doc, index) => (
                <SwiperSlide key={index} className="flex h-full">
                  <div className="doc-div flex flex-col justify-start p-3 bg-white rounded-2xl w-full border border-transparent hover:border-[#b4d191] cursor-pointer h-full">
                    <div>
                      <img
                        alt={doc.name}
                        className="w-full h-auto rounded-2xl overflow-hidden"
                        src={doc.img}
                      />
                    </div>
                    <div className="p-3 pb-10 h-[100%]">
                      <h3 className="text-lg leading-6 text-[#593e29] pt-2 font-semibold">
                        {doc.name}
                      </h3>
                      <p className="text-[#b98c68] pt-1">{doc.degree}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div
              ref={prevRef}
              className="prev-nav absolute top-1/2 -translate-y-1/2 left-[-4.5rem] max-md:left-[-2.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200  border-1 border-[#553e2b]">
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
            <div
              ref={nextRef}
              className="next-nav absolute top-1/2 -translate-y-1/2 right-[-4.5rem] max-md:right-[-2.5rem] z-10 cursor-pointer bg-white hover:bg-[#f4f4f4] p-3 rounded-full shadow-lg transition duration-200 border-1 border-[#553e2b]">
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

            {/* <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-k-n-subramanian-namboothiri.jpg`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. K. N. Subramanian Namboothiri
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS, MD(Ay) -Medical Director
                </p>
              </div>
            </div>
            <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-jeevan-k-jose.jpg`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. Jeevan K Jose
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS, MD(Ay), PGDCFT, MBA(Hrm) Senior Medical Officer --
                </p>
              </div>
            </div>
            <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-valsaladevi-k.jpg`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. Valsaladevi K
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS,FAGE,YIC, CNAD,MBA -Senior Consultant
                </p>
              </div>
            </div>
            <div className="doc-div  p-[10px] bg-[#fff] rounded-[30px] w-[fit-content] border-1 border-[transparent] hover:border-[#b4d191]  cursor-pointer">
              <div>
                <Image
                  alt="dr-k-n-subramanian-namboothiri"
                  width={342}
                  height={100}
                  className="w-[100%] h-[auto] rounded-[30px] overflow-hidden"
                  src={`${ASSET_PREFIX}/assets/images/dr-jomy-joseph.jpg`}
                />
              </div>
              <div className="p-[10px] pb-[40px]">
                <h3 className="text-[18px] leading-[22px] text-[#593e29] pt-[10px] font-semibold">
                  Dr. Jomy Joseph
                </h3>
                <p className="text-[#b98c68] pt-[3px]">
                  BAMS,MD(Ay) -Senior Consultant
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
