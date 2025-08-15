import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";

export default function BalanceDiet(){
    return(
        <>
        <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
            <div className="w-[90%] m-auto">
                <h3 className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center m-auto w-[fit-content]">
                    Balance your body, mind, and spirit - <br />the
                    Ayurvedic way.
                </h3>
                <div className="mt-[40px]  w-[80%] m-auto grid grid-cols-[49%_49%] justify-between">
                    <div className="group">
                        <Image
                        width={300}
                        height={600}
                        className="w-full h-[100%] object-cover object-center"
                        alt="Balance"
                        src={`${ASSET_PREFIX}/assets/images/balance-diet.png`}
                        />

                    </div>
                    <div className="bg-[#e3ecd9]  rounded-[0px_120px_40px_0px]  p-[40px]">
                        <h2 className="uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-start w-[fit-content]">
                                        THE AYURVEDIC Hospital
                                      </h2>
                                      <h3 className="text-[#314a10] font-[source,serief4] mb-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
                                   leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-start w-[fit-content]">
                                       Highlights</h3>
                                       <div
                                        className="relative w-[100%] h-[auto]   relative  z-[1] after:absolute  after:content-[] after:w-[100%] after:h-[100%]
                                          after:top-[-15px] after:left-[0px] after:border-[1px_1px_0px_1px]  after:rounded-[120px_120px_0px_0px]  max-xl:after:rounded-[90px_90px_0px_0px] max-md:after:rounded-[70px_70px_0px_0px] after:border-[#ed9b5d] after:z-[-4]  hidden max-[767px]:block  max-[767px]:max-w-[400px] max-[767px]:m-[auto] max-[767px]:mt-[60px] max-sm:mt-[40px] max-[700px]:w-[70%]">
                                        <div className=" overflow-hidden">
                                          <Image
                                            width={450}
                                            height={600}
                                            className="w-[100%] h-[auto]"
                                            alt="abt-img"
                                            src={`${ASSET_PREFIX}/assets/images/balance-diet.png`}
                                          />
                                        </div>
                                      
                                      </div>
                                      <p className="text-[16px] leading-[24xpx]  text-[#314a10]  my-[20px]">
                                        Our mission is to popularize the holistic approach of Ayurveda worldwide which heals the body, mind and soul, we seek to provide qualified practitioners, state-of-the-art facilities and affordable quality healthcare to the society at large.
                                      </p>
                                      <ul>
                                        <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#314a10]  max-md:leading-[18px]">
                                          <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#bcd59b] flex justify-center items-center">
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
                                        <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#314a10]  max-md:leading-[18px]">
                                          <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#bcd59b] flex justify-center items-center">
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
                                        <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#314a10]  max-md:leading-[18px]">
                                          <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#bcd59b] flex justify-center items-center">
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
                                        <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[10px] gap-[8px] text-[#314a10]  max-md:leading-[18px]">
                                          <div className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[3px] bg-[#bcd59b] flex justify-center items-center">
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
                    </div>
                </div>

            </div>

        </section>
        </>
    )
}