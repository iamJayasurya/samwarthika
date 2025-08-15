import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import Link from "next/link";

export default function Aboutus() {
  return (
    <>
      <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="w-[80%] m-auto max-2xl:w-[80%] max-lg:w-[90%]">
          <div className="grid  grid-cols-[45%_30%] max-2xl:grid-cols-[45%_35%] max-xl:grid-cols-[50%_40%] max-md:grid-cols-[55%_35%]  max-[767px]:grid-cols-[100%]! justify-center gap-[120px] max-2xl:gap-[100px] max-xl:gap-[0px]  max-xl:justify-between">
            <div>
              <h2 className="uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-start w-[fit-content]">
                THE AYURVEDIC Hospital
              </h2>
              <h3 className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-start w-[fit-content]">
                Naturally effective <br className="max-[767px]:hidden  max-sm:block" /> Health Solutions
              </h3>
               <div
                className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] max-md:rounded-[70px_70px_0px_0px] overflow-hidden">
                  <Image
                    width={450}
                    height={600}
                    className="w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.png`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden p-[10px] max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[80px] max-md:h-[80px]  left-[-25%] bottom-[-3%]  bg-[#fff] p-[10px]">
                  <div className="bg-[#527729] rounded-[50%] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      className="w-[100%] h-[auto]"
                      alt="abt-img"
                      src={`${ASSET_PREFIX}/assets/images/shape.ico`}
                    />
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-[24xpx]  text-[#341903]  my-[20px]">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <ul>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#341903]  max-md:leading-[18px]">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#49301b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.3"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  The Ayurveda Hospital in Ernakulam offers therapies
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#341903]  max-md:leading-[18px]">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#49301b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.3"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Including panchakarma, abhyanga, elakizhi, nasyam
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#341903]  max-md:leading-[18px]">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#49301b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.3"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Njavarakizhi, sirodhara, sirovasthi, kativasthi,
                </li>
                <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#341903]  max-md:leading-[18px]">
                  <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#ffab6b] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#49301b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.3"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                  Rejuvenation for healthy life, rasayana chikitsa.
                </li>
              </ul>
              <h3 className="text-[22px] leading-[26px] max-xl:text-[20px] max-xl:leading-[24px] max-md:text-[18px] max-md:leading-[22px]  text-[#e36300]  font-[source,serif4]  mt-[40px] mb-[30px] max-xl:mt-[30px] max-xl:mb-[20px]">
                Recognized By
              </h3>
              <div className="flex gap-[30px] my-[20px] max-xl:gap-[20px] flex-wrap items-center">
                <div className="group">
                  <Image
                    width={90}
                    className="w-[100px] h-[auto]  max-xl:w-[70px]  max-md:w-[55px]"
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/logo-nabh.webp`}
                    alt="logo nabh"
                  />
                </div>
                <div className="group">
                  <Image
                    width={90}
                    className="w-[100px] h-[auto]  max-xl:w-[70px]  max-md:w-[55px]"
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/logo-ayur.webp`}
                    alt="logo nabh"
                  />
                </div>
                <div className="group">
                  <Image
                    width={100}
                    className="w-[100px] h-[auto]  max-xl:w-[70px]  max-md:w-[55px]"
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/elephant-logo.webp`}
                    alt="logo nabh"
                  />
                </div>
                <div className="group">
                  <Image
                    width={90}
                    className="w-[100px] h-[auto]  max-xl:w-[70px]"
                    height={90}
                    src={`${ASSET_PREFIX}/assets/images/kerala.webp`}
                    alt="logo nabh"
                  />
                </div>
              </div>
              <Link
                href={""}
                className="text-[var(--primary)] border-[var(--primary)] mt-[30px] max-xl:mt-[20px] uppercase border-1  py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[14px] max-md:leading-[18px] flex  w-[fit-content]">
                View More
              </Link>
            </div>
            <div>
              <div
                className=" mt-[20px] relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                  after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] after:border-[#ed9b5d] after:z-[-4] sticky top-[30px] max-[767px]:hidden">
                <div className="rounded-[120px_120px_0px_0px] max-xl:rounded-[90px_90px_0px_0px] overflow-hidden">
                  <Image
                    width={450}
                    height={600}
                    className=" w-[100%] h-[auto]"
                    alt="abt-img"
                    src={`${ASSET_PREFIX}/assets/images/caucasian-woman.png`}
                  />
                </div>
                <div className="absolute rounded-[50%] overflow-hidden p-[10px] max-lg:p-[6px] w-[180px] h-[180px] max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[100px] max-lg:h-[100px] left-[-25%] bottom-[-3%]  bg-[#fff] p-[10px]">
                  <div className="bg-[#527729] rounded-[50%] overflow-hidden">
                    <Image
                      width={50}
                      height={50}
                      className="w-[100%] h-[auto]"
                      alt="abt-img"
                      src={`${ASSET_PREFIX}/assets/images/shape.ico`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
