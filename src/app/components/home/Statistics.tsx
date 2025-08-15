"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  end: number;
  suffix?: string;
};

const Counter = ({ end, suffix = "+" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <p
      ref={ref}
      className="text-[60px] leading-[60px] max-2xl:text-[50px] max-2xl:leading-[50px]  max-lg:text-[45px] max-lg:leading-[45px] max-sm:text-[30px] max-sm:leading-[34px]  text-[#e36300] font-medium mb-[20px]  max-lg:mb-[15px]  max-mlg:mb-[10px] max-md:mb-[8px]">
      {count}
      {suffix}
    </p>
  );
};

export default function Statistics() {
  return (
    <>
      <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="w-[90%] m-auto">
          <h3 className="text-[#314a10] font-[source,serief4] mb-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal m-auto text-center w-[fit-content]">
            Balance your body, mind, and spirit - <br />
            <span className="text-[#472e19]">the Ayurvedic way</span>
            <span className="text-[#e36300]">.</span>
          </h3>
          <div
            className="
  my-[120px] max-xxl:my-[100px] max-2xl:my-[80px] max-lg:my-[60px]  max-md:my-[40px]
  grid grid-cols-[150px_150px_150px_150px] max-lg:grid-cols-[120px_120px_120px_120px] max-mlg:grid-cols-[100px_100px_100px_100px] max-sm:grid-cols-2 max-sm:gap-[30px]  max-sm:justify-evenly 
  gap-[60px] w-[60%] max-2xl:w-[70%]  max-xl:w-[80%]  max-mlg:w-[85%] h-full m-auto 
  justify-between px-[40px] max-lg:px-[20px] max-lg:pr-[10px] max-sm:px-[25px] max-sm:pr-[0px]
  relative  bg-[#fff] 
  after:absolute after:content-[''] after:inset-0
  after:top-[50px] after:left-[-10%] after:w-[120%]
  after:h-full  
  after:border after:border-[#a5978d] after:rounded-[50px] max-sm:after:rounded-[30px]
  after:-z-4
">
            <div className="max-sm:max-w-[120px]">
              <Counter end={25} />
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
                Years of <br /> experience
              </p>
            </div>
            <div className="max-sm:max-w-[120px]">
              <Counter end={20} />
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
                Doctors in <br /> the Team
              </p>
            </div>
            <div className="max-sm:max-w-[120px]">
              <Counter end={12} />
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
                Packages <br /> available
              </p>
            </div>
            <div className="max-sm:max-w-[120px]">
              <Counter end={50} />
              <p className="text-[22px] leading-[26px] max-lg:text-[20px] max-lg:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  max-sm:text-[16px] max-sm:leading-[20px] text-[#472e19] font-[source,serif4] font-normal">
                Variety of <br /> Treatments
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
