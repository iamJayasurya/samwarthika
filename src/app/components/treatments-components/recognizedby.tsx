import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";

export default function Recognized() {
    return (
        <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
            <div className="w-[90%] m-[auto]">
                <h3 className="text-center m-auto text-[#000] text-[28px] leading-[32px]  max-xl:text-[24px] max-xl:leading-[28px]  max-mlg:text-[20px] max-mlg:leading-[24px]  mb-[40px]  max-xl:mb-[30px]  max-md:mb-[20px]">Recognized By</h3>
                <div className="flex gap-[80px] justify-center items-center flex-wrap max-2xl:gap-[60px]  max-lg:gap-[40px]  max-mlg:gap-[30px]  max-md:gap-[20px]  max-sm:gap-[0px]">
                    <div className="group">
                        <Image
                            width={200}
                            className="w-[100px] h-[auto]  max-xl:w-[80px]  max-md:w-[60px]"
                            height={200}
                            src={`${ASSET_PREFIX}/assets/images/logo-nabh.webp`}
                            alt="logo nabh"
                        />
                    </div>
                    <div className="group">
                        <Image
                            width={200}
                            className="w-[100px] h-[auto]  max-xl:w-[80px]  max-md:w-[60px]"
                            height={200}
                            src={`${ASSET_PREFIX}/assets/images/logo-ayur.webp`}
                            alt="logo nabh"
                        />
                    </div>
                    <div className="group">
                        <Image
                            width={100}
                            className="w-[100px] h-[auto]  max-xl:w-[80px]  max-md:w-[60px]"
                            height={200}
                            src={`${ASSET_PREFIX}/assets/images/elephant-logo.webp`}
                            alt="logo nabh"
                        />
                    </div>
                    <div className="group">
                        <Image
                            width={200}
                            className="w-[100px] h-[auto]  max-xl:w-[80px]  max-md:w-[60px]"
                            height={200}
                            src={`${ASSET_PREFIX}/assets/images/kerala.webp`}
                            alt="logo nabh"
                        />
                    </div></div>


            </div>
        </section>
    )
}