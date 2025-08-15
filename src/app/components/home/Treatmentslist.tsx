import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
export default function TreatmentList() {
  return (
    <>
      <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="w-[90%] m-[auto]">
          <h2 className="m-auto uppercase text-[#553e2b] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            THE AYURVEDIC TREATMENTS
          </h2>
          <h3 className="m-auto text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center w-[fit-content]">
            Get a Theraphy of your <br />
            Choice
          </h3>
          <div className="w-[100%] flex justify-end m-[auto]  max-[1200px]:w-[80%] max-mlg:w-[90%]  max-md:w-[100%]">
            <div className="kn-div  grid grid-cols-[50%_165px] max-xxl:grid-cols-[60%_165px] max-[1200px]:grid-cols-[100%] gap-[225px] max-xxl:gap-[5%] max-[1200px]:gap-[20px] justify-end max-[1200px]:justify-center items-end max-[1200px]:items-center mt-[80px]  max-2xl:mt-[60px] max-lg:mt-[40px] max-mlg:mt-[20px]">
              <p className="text-center text-[#341903] text-[16px] leading-[24px] font-medium">
                The Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa. The
                Ayurveda Hospital in Ernakulam offers therapies including
                panchakarma, abhyanga, elakizhi, nasyam, pizhichil,
                njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification
                and rejuvenation for healthy life, rasayana chikitsa.
              </p>
              <div className="flex  justify-end">
                <Link
                  href=""
                  className="uppercase border-1 text-[var(--primary)] border-[var(--primary)]  uppercase border-1  py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[14px] max-md:leading-[18px] flex  w-[fit-content]">
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 max-mlg:grid-cols-2 gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] pt-[80px]  max-2xl:pt-[60px]  max-lg:pt-[40px]">
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content]">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[auto] object-cover object-center"
                  alt="ayurvedic"
                  src={`${ASSET_PREFIX}/assets/images/ayurvedic.jpg`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start">
                  <h3 className="text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">Ayurvedic <br />
                    Panchakarma</h3>
                  <p className="text-[14px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-300">The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam,</p>

                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content]">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[auto] object-cover object-center"
                  alt="ayurvedic"
                  src={`${ASSET_PREFIX}/assets/images/ayur-cosmetology.jpg`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  <h3 className="text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">Ayur  <br />
                    Cosmetology</h3>
                  <p className="text-[14px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-300">The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam,</p>

                </div>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden relative  group">
              <Image
                width={800}
                height={600}
                className="w-[100%] h-[100%] object-cover object-center"
                alt="ayurvedic"
                src={`${ASSET_PREFIX}/assets/images/yoga-meditations.jpg`}
              />
              <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                <h3 className="text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">Yoga &   <br />
                  Meditations</h3>
                <p className="text-[14px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-300">The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam,</p>

              </div>
            </div>
            <div className="grid gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px] ">
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content]">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center"
                  alt="ayurvedic"
                  src={`${ASSET_PREFIX}/assets/images/ayur-physic.jpg`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  <h3 className="text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">Ayur  <br />
                    Physio</h3>
                  <p className="text-[14px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-300">The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam,</p>

                </div>
              </div>
              <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content]  max-mlg:hidden">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center"
                  alt="ayurvedic"
                  src={`${ASSET_PREFIX}/assets/images/ayurvedic.jpg`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  <h3 className="text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">Ayurvedic   <br />
                    Treatments</h3>
                  <p className="text-[14px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-300">The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam,</p>

                </div>
              </div>
            </div>
            <div className="rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] overflow-hidden relative  group h-[fit-content] hidden  max-mlg:block">
                <Image
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover object-center"
                  alt="ayurvedic"
                  src={`${ASSET_PREFIX}/assets/images/ayurvedic.jpg`}
                />
                <div className="absolute flex justify-between items-end top-0 bottom-0 right-0 w-[100%] h-[100%] p-[30px]  max-lg:p-[20px] gap-[40px]  max-2xl:gap-[30px]  max-lg:gap-[20px]   max-mlg:gap-[20px] max-mlg:justify-start max-mlg:flex-col-reverse max-mlg:items-start ">
                  <h3 className="text-[24px] leading-[30px]  max-2xl:text-[22px] max-2xl:leading-[26px]  max-lg:text-[20px] max-lg:leading-[24px] max-mlg:text-[18px] max-mlg:leading-[22px]  max-md:text-[16px] max-md:leading-[20px] text-[#fff]   ">Ayurvedic   <br />
                    Treatments</h3>
                  <p className="text-[14px] leading-[22px] max-mlg:text-[12px] max-mlg:leading-[20px]  max-[700px]:hidden text-[#fff]/70  opacity-0 group-hover:opacity-[100]  transition duration-300">The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam,</p>

                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
