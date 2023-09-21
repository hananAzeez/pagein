import Link from "next/link";
import React, { useEffect, useState } from "react";
import Header from "./menu/Header";

const Navbar = ({ color }: { color: string }) => {
  const [showCta, setShowCta] = useState(false);
  useEffect(() => {
    function toggleCtaVisibility() {
      if (window.scrollY >= 600) {
        setShowCta(true);
      } else {
        setShowCta(false);
      }
    }

    // Add a scroll event listener to toggle the visibility
    window.addEventListener("scroll", toggleCtaVisibility);

    // Initially hide the CTA element
    setShowCta(false);
  }, []);
  return (
    <>
      <div
        className={`fixed-cta fixed lg:hidden bg-black bg-opacity-30 left-0 py-3 w-screen bottom-0 ${
          showCta ? "flex" : "hidden"
        } items-center justify-center gap-4 lg:gap-5 z-[100]`}
      >
        <a href="https://hf612bf58kc.typeform.com/to/UXwICQZ7" target="_blank">
          <button className="bg-primary border border-primary py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-opacity-80 transition-all duration-300">
            Get a quote
          </button>
        </a>
        <a
          href="https://wa.link/pg09my"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-offBlack text-white border border-white border-opacity-50 py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-black transition-all duration-300">
            Talk to us
          </button>
        </a>
      </div>

      <div
        className={`fixed-cta-pc hidden fixed top-7 right-36 py-3 bottom-0  items-center justify-center h-fit gap-4 lg:gap-5 z-[100] ${
          showCta ? "lg:flex" : "lg:hidden"
        }`}
      >
        <a href="https://hf612bf58kc.typeform.com/to/UXwICQZ7" target="_blank">
          <button className="bg-primary border border-offBlack py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-opacity-80 transition-all duration-300">
            Get a quote
          </button>
        </a>
        <a
          href="https://wa.link/pg09my"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-offBlack text-white border border-white border-opacity-50 py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-black transition-all duration-300">
            Talk to us
          </button>
        </a>
      </div>
      {/* fixed cta👆 */}
      <header
        className={`hidden lg:flex w-full px-10 py-4  justify-between items-center ${
          color === "black"
            ? "bg-black bg-opacity-40 text-white"
            : "bg-white text-offBlack"
        }  rounded-xl bg relative`}
      >
        <div className="nav-links flex items-center gap-8">
          <Link href="/works">
            {" "}
            <p className="menu-links hover-this ">Works</p>
          </Link>
          <a href="">
            {" "}
            <p className="menu-links hover-this">Services</p>
          </a>
        </div>
        <Link href="/">
          <h1 className="text-3xl font-bold">fiveweeks</h1>
        </Link>
        <div className="nav-links flex items-center gap-8">
          <Link href="/about">
            {" "}
            <p className="menu-links">About</p>
          </Link>
          <a href="">
            {" "}
            <p className="menu-links">Contact</p>
          </a>
        </div>
      </header>
      <header className="lg:hidden relative flex items-center justify-between">
        <Link href="/">
          <h1
            className={`${
              color === "black" ? "text-white" : "text-offBlack"
            } text-2xl font-bold`}
          >
            fiveweeks
          </h1>
        </Link>
      </header>
      <div className="absolute">
        <Header />
      </div>
    </>
  );
};

export default Navbar;
