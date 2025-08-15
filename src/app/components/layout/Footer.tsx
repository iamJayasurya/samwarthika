// components/Footer.tsx
"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";

const Footer = () => {
  type FooterData = {
    department: { label: string; path: string }[];
    about: { label: string; path: string }[];
    treatment: { label: string; path: string }[];
    contact: {
      name: string;
      address: string[];
      email: string;
      phone: string;
    };
  };

  const footerData: FooterData = {
    department: [
      { label: "Ayurveda", path: "/" },
      { label: "Panchakarma", path: "/" },
      { label: "Yoga & Meditation", path: "/" },
      { label: "Ayurvedic Massage", path: "/" },
      { label: "Ayurvedic Diet", path: "/" },
      { label: "Physiotherapy", path: "/" },
      { label: "Kalari & Marma", path: "/" },
    ],
    about: [
      { label: "About Us", path: "/" },
      { label: "Our Doctors", path: "/" },
      { label: "Services", path: "/" },
      { label: "Facilities", path: "/" },
      { label: "Location", path: "/" },
      { label: "Blog", path: "/" },
    ],
    treatment: [
      { label: "Monsoon Special", path: "/" },
      { label: "Insurance", path: "/" },
      { label: "Blog", path: "/" },
      { label: "Contact Us", path: "/" },
    ],
    contact: {
      name: "Samwarthika Ayurveda Hospital,",
      address: [
        "Pallikkavu Road Jn., Arakuzha Road,",
        "Muvattupuzha, Kerala- 686 661",
        "India.",
      ],
      email: "Email: samwarthika@gmail.com",
      phone: "+91 73566 22201",
    },
  };

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [maxHeights, setMaxHeights] = useState<{ [key: number]: string }>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      isSmallScreen &&
      openAccordion !== null &&
      contentRefs.current[openAccordion]
    ) {
      const newMaxHeights = { ...maxHeights };
      newMaxHeights[
        openAccordion
      ] = `${contentRefs.current[openAccordion]?.scrollHeight}px`;
      setMaxHeights(newMaxHeights);
    }
  }, [openAccordion, isSmallScreen]);

  const renderAccordionSection = (
    title: string,
    items: { label: string; path: string }[],
    index: number
  ) => (
    <div className="w-full mb-0 md:mb-0" key={index}>
      <div
        className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-4 border-b pb-[10px] border-[#00539f] sm:border-b-0 mb-[10px]"
        onClick={() => toggleAccordion(index)}>
        <h3 className="text-[16px] sm:text-[17px] leading-[24px] sm:leading-[25px] text-[#000] font-semibold">
          {title}
        </h3>
        <span className="sm:hidden">
          {openAccordion === index ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 1024 1024">
              <path
                fill="#000"
                d="M192.128 683.136L512 371.328l319.872 311.808a30.59 30.59 0 0 0 42.752 0a29.12 29.12 0 0 0 0-41.6L534.336 309.76a32 32 0 0 0-44.672 0L149.376 641.472a29.12 29.12 0 0 0 0 41.728a30.59 30.59 0 0 0 42.752-0.064z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 1024 1024">
              <path
                fill="#000"
                d="M831.872 340.864L512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6l340.288 331.776a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
              />
            </svg>
          )}
        </span>
      </div>

      <ul
        ref={(el) => {
          contentRefs.current[index] = el;
        }}
        className={`transition-all duration-500 ease-in-out sm:block overflow-hidden sm:overflow-visible`}
        style={{
          maxHeight: isSmallScreen
            ? openAccordion === index
              ? maxHeights[index] || "0px"
              : "0px"
            : "none",
        }}>
        {items.map((item, itemIndex) => (
          <li key={itemIndex} className="mb-[10px]">
            <Link
              href={item.path}
              className="text-[#444444] hover:text-[#1D3D76] transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#fff] text-white py-12">
      <div className="border-t border-gn-700  mx-auto w-[90%]">
        <div className="mt-[45px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 justify-between gap-y-[10px] md:gap-y-[50px] xl:gap-[15px]">
          <div className="flex flex-col justify-between">
            {" "}
            <Image
              src={`${ASSET_PREFIX}/assets/images/footer-logo.png`}
              alt="NABH"
              className="w-[220px] h-[auto] 2xl:w-[250] 2xl:h-[84]"
              width={220}
              height={48}
              unoptimized
            />
            <div className="mt-[15px] pl-[8px]">
              <ul className="flex gap-[25px] items-center">
                <li>
                  <Link href="#" target="_blank">
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/in.png`}
                      alt="LinkedIn"
                      className=""
                      width={30}
                      height={30}
                      unoptimized
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank">
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/fb.png`}
                      alt="Facebook"
                      className=""
                      width={30}
                      height={30}
                      unoptimized
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank">
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/ins.png`}
                      alt="Instagram"
                      className=" "
                      width={30}
                      height={30}
                      unoptimized
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank">
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/tw.png`}
                      alt="Twitter"
                      className=" "
                      width={30}
                      height={30}
                      unoptimized
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {renderAccordionSection("Departments", footerData.department, 0)}
          {renderAccordionSection("About us", footerData.about, 1)}
          {renderAccordionSection("Treatments", footerData.treatment, 2)}

          {/* Contact Section (special case) */}

          <div className="w-full">
            <div
              className="md:cursor-default cursor-pointer flex justify-between items-center md:mb-4 border-b pb-[10px] border-[#00539f] sm:border-b-0 mb-[10px]"
              onClick={() => toggleAccordion(3)}>
              <h3 className="text-[16px] sm:text-[17px] leading-[24px] sm:leading-[25px] text-[#000] font-semibold">
                CONTACT
              </h3>
              <span className="sm:hidden">
                {openAccordion === 3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 1024 1024">
                    <path
                      fill="#000"
                      d="M192.128 683.136L512 371.328l319.872 311.808a30.59 30.59 0 0 0 42.752 0a29.12 29.12 0 0 0 0-41.6L534.336 309.76a32 32 0 0 0-44.672 0L149.376 641.472a29.12 29.12 0 0 0 0 41.728a30.59 30.59 0 0 0 42.752-0.064z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 1024 1024">
                    <path
                      fill="#000"
                      d="M831.872 340.864L512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6l340.288 331.776a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
                    />
                  </svg>
                )}
              </span>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out sm:block overflow-hidden`}
              style={{
                maxHeight: isSmallScreen
                  ? openAccordion === 3
                    ? "500px" // Approximate max height for contact section
                    : "0px"
                  : "none",
              }}>
              <div className="space-y-2">
                <h4 className="text-[17px] leading-[25px] text-[#444444] font-semibold mb-[2px]">
                  {footerData.contact.name}
                </h4>
                <address className="text-[#444444] not-italic mt-4 mb-[50]">
                  {footerData.contact.address.map(
                    (line: string, index: number) => (
                      <p key={index}>{line}</p>
                    )
                  )}
                </address>
                <p className="text-[#444444]">
                  Email: {footerData.contact.email}
                </p>
                <p className="text-[#444444]">
                  Phone: {footerData.contact.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gn-700 mt-12 pt-[20px] px-[15px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#444444] text-[14px] leading-[24px] text-center md:text-left">
              © {new Date().getFullYear()} Samwarthika Ayurveda Hospital.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-[#444444] text-[14px] leading-[24px] hover:text-[#1D3D76] transition-colors">
                Designed & Developed by Appac Mediatech Pvt Ltd.,
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
