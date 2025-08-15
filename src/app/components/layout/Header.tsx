"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const toggleMenu = () => {
    setHasInteracted(true); // user interacted
    setIsMenuClosed(!isMenuClosed);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuClosed) {
      setIsMenuClosed(true);
    } // close on every path change
  }, [pathname]);
  const CloseToggle = () => {
    if (!isMenuClosed) {
      setIsMenuClosed(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${isSticky ? "sticky" : "relative"} top-0 z-[999]`}>
      <div
        className={`fixed top-0 left-0 w-full h-[100px] z-[-1] transition-colors duration-300
      ${isSticky ? "bg-white shadow-md" : "bg-transparent"}`}
      />

      <div
        className={`w-[90%] header-menu fixed top-0 left-1/2 -translate-x-1/2 grid grid-cols-[200px_auto] 
      items-center py-[5px] xl:py-0 justify-between transition-colors duration-300
      ${isSticky ? "text-black" : "text-white"}
      ${hasInteracted && isMenuClosed ? "closed" : ""}
    `}>
        <div className="logo-div">
          <Link href="/">
            <Image
              src={`${ASSET_PREFIX}/assets/images/logo.png`}
              alt="Samwarthika"
              className="w-[250px] h-[auto] 2xl:w-[250] 2xl:h-[84]"
              width={250}
              height={48}
              unoptimized
            />
          </Link>
        </div>

        <nav className="menu-div-parent hidden xl:block">
          <ul className="menu-div flex items-center gap-[40px] 2xl:gap-[60px]">
            <li className="mprod relative">
              <Link
                href="/"
                className=" text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-medium h-[90px] flex items-center">
                Home
              </Link>
            </li>
            <li className="mprod relative">
              <Link
                href="/"
                className=" text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-medium h-[90px] flex items-center">
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-medium h-[90px] flex items-center">
                Treatments
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-medium h-[90px] flex items-center">
                Our Doctors
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-medium h-[90px] flex items-center">
                Departments
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] font-medium h-[90px] flex items-center">
                Insurance
              </Link>
            </li>

            <li>
              <Link
                className="text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] bg-[#fff] border-[1px] border-[var(--primary)] text-[var(--primary)] py-[11px] px-[30px] rounded-[50px] font-normal text-center "
                href="/">
                Contact us
              </Link>
            </li>
            <li className="flex gap-[20px]">
              {" "}
              <Image
                src={`${ASSET_PREFIX}/assets/images/nabh.png`}
                alt="NABH"
                className="w-[60px] h-[auto] 2xl:w-[250] 2xl:h-[84]"
                width={50}
                height={48}
                unoptimized
              />{" "}
              <Image
                src={`${ASSET_PREFIX}/assets/images/logo-ayur.webp`}
                alt="Ayur"
                className="w-[60px] h-[auto] 2xl:w-[250] 2xl:h-[84]"
                width={50}
                height={48}
                unoptimized
              />{" "}
            </li>
          </ul>
        </nav>

        {/* Hamburger menu */}
        <div
          className={`side-menu-close transition-all duration-300 cursor-pointer relative h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px] flex flex-col justify-center leading-normal rounded-full px-[1vw] bg-[#000] rounded-[50px] items-center block xl:hidden ${
            isMenuClosed ? "closed" : "opened"
          } group`}
          onClick={toggleMenu}>
          <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px]  group-[.opened]:rotate-[45deg] group-[.opened]:translate-x-[0px] transition duration-300 group-[.opened]:translate-y-[6px] "></span>
          <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px] my-[5px] group-[.opened]:opacity-0 transition duration-300"></span>
          <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px] group-[.opened]:rotate-[-45deg] group-[.opened]:translate-x-[-1px] transition duration-300 group-[.opened]:translate-y-[-8px]"></span>
        </div>

        {/* Side Navigation Menu */}
        <nav
          className={`sidemenu fixed  w-[450px]  h-[100vh] min-h-[100vh] bg-[#fff] top-[70px] right-[0px] py-[20px] px-[50px]  max-xl:px-[30px]  max-sm:w-[100%]  transition duration-300  shadow-[-5px_6px_5px_0px_#a7a7a740]     [.opened]:translate-x-[0px]  group  transition duration-300  block xl:hidden  h-[100vh]  ${
            isMenuClosed ? "translate-x-[100%]" : "translate-x-[0px]"
          }`}>
          <div className="flex h-[90%]  flex-col justify-between  pb-[30px] overflow-scroll">
            <ul>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/"
                  className="text-[#000] text-[14px] xl:text-[15px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center  border-dashed border-[#616161]  border-b-[1px]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/about-us"
                  className="text-[#000] text-[14px] xl:text-[15px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center  border-dashed border-[#616161]  border-b-[1px] ">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/products-detail"
                  className="text-[#000] text-[14px] xl:text-[15px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center  border-dashed border-[#616161]  border-b-[1px] ">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/case-studies"
                  className="text-[#000] text-[14px] xl:text-[15px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center  border-dashed border-[#616161]  border-b-[1px] ">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/blogs"
                  className="text-[#000] text-[14px] xl:text-[15px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center  border-dashed border-[#616161]  border-b-[1px] ">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/contact-us"
                  className="text-[#000] text-[14px] xl:text-[15px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center  border-dashed border-[#616161]  border-b-[1px] ">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="grid grid-cols-[110px_190px]  max-sm:grid-cols-[auto_150px] justify-between items-center  mt-[60px]">
              <div className="grid">
                <Link
                  onClick={CloseToggle}
                  href="mailto:info@m2nxt.com"
                  className="text-[14px] leading-[16px]  text-[#888888]  max-xl:text-[13px] max-xl:leading-[14px] max-sm:text-[12px] max-sm:leading[13px]">
                  info@m2nxt.com
                </Link>
                <Link
                  onClick={CloseToggle}
                  href="tel:+91922487184"
                  className="text-[14px] leading-[16px]  text-[#888888]  max-xl:text-[13px] max-xl:leading-[14px] max-sm:text-[12px] max-sm:leading[13px]">
                  +91 92248 7184
                </Link>
              </div>
              <Link
                onClick={CloseToggle}
                href={""}
                className="bg-[#ff6d05] py-[10px] px-[20px]  flex justify-between items-center text-[#fff] font-normal  max-sm:px-[10px]">
                Get a Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    d="m9 5l6 7l-6 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
