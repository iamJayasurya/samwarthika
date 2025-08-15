import { ASSET_PREFIX } from "../../../config";
import Image from "next/image";

export default function Managementmessage() {
  return (
    <section className="pb-[100px] max-xxl:pb-[80px] max-xl:pb-[70px] max-mlg:pb-[50px]">
      <div className="w-[60%] mx-auto">
        {/* Title Section */}
        <div className="text-center mb-[80px]">
          <p className="text-[#341802] uppercase tracking-[2px] text-[18px] leading-[26px] font-semibold mb-[10px]">
            the management
          </p>
          <h2 className="text-[var(--secondary)] text-[60px] leading-[60px] font-medium ">
            Founder Message
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 mlg:grid-cols-[350px_auto] gap-[120px] ">
          {/* Left Column - Image & Name */}
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-k-n-subramanian-namboothiri.jpg`}
                alt="Dr. K. N. Subramanian Namboothiri"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. K. N. Subramanian Namboothiri
            </p>
            <p className="text-[18px] leading-[26px] text-[#c7a184] mt-[4px]">
              BAMS, MD(Ay) - Medical Director
            </p>
          </div>

          {/* Right Column - Message */}
          <div>
            <p className="text-[22px] leading-[30px] w-full mb-[50px]">
              Our mission is to popularize the holistic approach of Ayurveda
              worldwide which heals the body, mind and soul, we seek to provide
              qualified practitioners, state-of-the-art facilities and affordable
              quality healthcare to the society at large.
            </p>
            <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal">
              Our mission is to popularize the holistic approach of Ayurveda
              worldwide which heals the body, mind and soul, we seek to provide
              qualified practitioners, state-of-the-art facilities and affordable
              quality healthcare to the society at large. Our mission is to
              popularize the holistic approach of Ayurveda worldwide which heals
              the body, mind and soul, we seek to provide qualified practitioners,
              state-of-the-art facilities and affordable quality healthcare to the
              society at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
