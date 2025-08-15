import Link from "next/link";

export default function Getquote() {
    return (
        <>
            <search className='py-[60px] bg-[#e8f5d9]'>
                <div className="w-[60%] max-2xl:w-[65%] max-xl:w-[70%] max:mlg:w-[80%]  gap-[20px] m-[auto] mr-[10%] max-md:mr-[auto] max-xl:mr-[5%] flex  justify-between max-xl:ju items-center  max-lg:flex-wrap max-lg:items-end">
                    <h2 className="text-[20px] leading-[24px] max-xl:text-[18px] max-xl:leading-[22px] text-[#4a5f33]">
                        Book a Treatment or Schedule an Appointment With Us Now!
                    </h2>
                    <Link className="uppercase border-1 text-[var(--primary)] border-[var(--primary)] py-[10px] px-[30px]" href="">Book Appointment</Link>
                </div>

            </search>
        </>
    )
}