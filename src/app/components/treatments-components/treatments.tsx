import React from "react"

export default function Treatment() {

    const sideImages = [
        { img: "/assets/images/logo1.png", imgtitle: "Image 1" },
        { img: "/assets/images/logo2.png", imgtitle: "Image 2" },
        { img: "/assets/images/logo3.png", imgtitle: "Image 3" },
        { img: "/assets/images/logo4.png", imgtitle: "Image 4" },
        { img: "/assets/images/logo5.png", imgtitle: "Image 5" },
        { img: "/assets/images/logo6.png", imgtitle: "Image 6" },
        { img: "/assets/images/logo1.png", imgtitle: "Image 7" },
        { img: "/assets/images/logo2.png", imgtitle: "Image 8" },
        { img: "/assets/images/logo3.png", imgtitle: "Image 9" },
        { img: "/assets/images/logo4.png", imgtitle: "Image 10" },
        { img: "/assets/images/logo5.png", imgtitle: "Image 11" },
        { img: "/assets/images/logo6.png", imgtitle: "Image 12" },
    ];
    return (
        <section className="pt-[100px]  max-2xl:pt-[80px]   max-xl:pt-[60px]  max-md:pt-[40px]">
            <div className="w-[90%] m-auto">
                <h3 className="text-[#314a10] font-[source,serief4] my-[20px] text-[50px] leading-[52px] max-2xl:text-[42px]
           leading-[48px] max-xl:text-[36px] max-xl:leading-[40px] max-lg:text-[30px] max-lg:leading-[36px] max-mlg:text-[28px] max-mlg:leaing-[32px] font-normal   text-center m-auto w-[fit-content]">
                    Our Treatments mind, and spirit -  <br />the
                    Ayurvedic way.
                </h3>
                <p className="mt-[20px] text-[#3f2510] text-center m-auto  w-[65%] max-xl:w-[70%]  max-lg:w-[80%] mb-[30px]">The Ayurveda Hospital in Ernakulam offers therapies including panchakarma, abhyanga, elakizhi, nasyam, pizhichil, njavarakizhi, sirodhara, sirovasthi, kativasthi, detoxification and rejuvenation for healthy life, rasayana chikitsa.</p>
                <div className="w-[80%] m-auto ">
                    <div className="grid grid-cols-4  gap-[40px] max-lg:grid-cols-3  max-md:grid-cols-2">
                        {sideImages.map(({ img, imgtitle }, i) => (
                            <div
                                key={i}
                                className="text-center w-full h-[150px] max-xl:h-[120px] m-auto flex justify-center flex-col p-[10px] rounded-[20px] overflow-hidden border border-transparent hover:border-[#c3efd2] hover:bg-[#effff5]"
                            >
                                <img
                                    src={img}
                                    alt={imgtitle}
                                    className="object-contain mx-auto"
                                />
                                <p className="mt-2 text-[#31936d] text-[16px] leading-[24px] font-normal">
                                    {imgtitle}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    )
}