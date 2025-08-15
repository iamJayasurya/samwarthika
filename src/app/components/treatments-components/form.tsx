import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";

export default function Form() {
  return (
    <>
      <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="w-[90%] m-auto">


          <div className="mt-[0px] w-[90%] m-auto grid grid-cols-[61%_38%] justify-between">
            <div className="bg-[#e9f9d4] p-[60px]  rounded-[0px_150px_0px_0px]">
              <h3 className="text-[#314a10] font-[source,serief4]  text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center m-auto w-[fit-content]">
                Let's consult with a Doctor
              </h3>
              <p className="text-[#314a10]">Please fill out the form below to submit your requirements</p>
              <div className="mt-[60px]  mb-[30px]">
                <div className="grid grid-cols-2 gap-[30px]">
                  {/* Left Column */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Phone No</label>
                      <input
                        type="text"
                        className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Company*</label>
                      <input
                        type="text"
                        className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Country</label>
                      <input
                        type="text"
                        className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Services</label>
                      <select
                        className="w-full border-b border-gray-400 bg-transparent outline-none py-1 appearance-none"
                      >
                        <option value="">Select</option>
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                      </select>
                    </div>
                  </div>
                </div>


              </div>
              <div className="flex  justify-between">
                <p className="text-[#314a10] text-[13px] leading-[16px]">By clicking the "Enquiry" button, I agree and accept <br /> the privacy policy of Samwarthika.</p>
                <Link
                  href={""}
                  className="text-[var(--primary)] border-[var(--primary)] mt-[30px] max-xl:mt-[20px] uppercase border-1  py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[14px] max-md:leading-[18px] flex  w-[fit-content]">
                  View More
                </Link>
              </div>
            </div>
            <div className="grid gap-[8px]">
              <div className="rounded-[130px_130px_0px_0px] h-[400px] w-[auto] overflow-hidden relative after:-top-[20px] after:content-['']  after:w-[100%] after:left-[1%]  after:border-1 after:rounded-[130px_130px_0px_0px]  after:h-[100%] after:border-[#ea8c42]">

              <Image
                src={`${ASSET_PREFIX}/assets/images/ayur-physio.jpg`}
                height={700}
                width={300}
                alt="Form"
                className="w-[100%] h-[100%] object-cover object-center  rounded-[130px_130px_0px_0px]"
                />
                </div>
              <div className="bg-[#ffdcc0] w-full h-[100%]  border-1 border-[#ffb175] rounded-[0px_0px_30px_30px] p-[30px]">
                <p className="flex gap-[40px]"><span className="text-[#e36707]">e:</span> <Link href={''} className="text-[#000000]">samwarthika@gmail.com</Link> </p>
                <p className="flex gap-[40px] my-[10px]"><span className="text-[#e36707]">m:</span> <Link href={''} className="text-[#000000]">+91 7356 62 22 01</Link> </p>
                <div className="w-[100%] my-[20px] h-[1px] bg-[#c3a893]"></div>
                <div className="flex justify-between gap-[10px] items-center">
                  <p className="text-[18px]  leading-[23px] text-[#000]"><span className="font-semibold">Monday </span>to <span className="font-semibold"><br /> Sunday</span></p>
                  <div className="flex justify-between gap-[60px] items-center">
                    <p className="text-[26px] leading-[30px] text-[#e36300]">24x7</p>
                    <p className="text-[12px] leading-[14px] text-[#000] text-center">We are open <br /><span className="text-[20px] leading-[26px]"> 365</span> <br /> Days</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}