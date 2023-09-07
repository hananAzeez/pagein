/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
// import { Player } from "@lottiefiles/react-lottie-player";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Hero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);

  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });

    tl.add(() => likeCrazyLottieRef?.current?.play(), 0.8).to(
      heroInfiniteRef?.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      1.2
    );

    return () => {};
  }, []);
  return (
    <section className="mx-auto px-28 bg-offWhite h-screen py-8">
      <header className="w-full px-10 py-4 flex justify-between items-center bg-white rounded-xl">
        <div className="nav-links flex items-center gap-8">
          <p className="menu-links">Works</p>
          <p className="menu-links">Services</p>
        </div>
        <h1 className="text-black text-3xl font-bold">Pagein</h1>
        <div className="nav-links flex items-center gap-8">
          <p className="menu-links">About</p>
          <p className="menu-links">Contact</p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto">
        <div className="h_container font_apoc flex flex-col   px-2 py-16">
          <h1 className="h_title  relative w-full  hero-title font-light leading-[90%]  ">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                We&nbsp;
              </span>
            </span>
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                &nbsp;Make
              </span>
            </span>
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                &nbsp;Amazing
              </span>
            </span>
          </h1>
          <h1 className="h_title relative flex w-full flex-col items-center  lg:flex-row hero-title ">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                Web Solutions
              </span>
            </span>
            <div
              ref={heroInfiniteRef}
              className="font_aeonik absolute bottom-[-35vw] left-[25%] ml-10 -mr-10 h-8 w-40  overflow-hidden rounded-2xl border border-black text-xs font-normal uppercase opacity-0  md:left-[40%]   md:h-16  md:w-52 md:text-xl lg:relative lg:left-8 lg:bottom-0 lg:right-[1vw] lg:w-[16vw]  lg:leading-10 bg-primary"
            >
              <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
                <span className=" group-hover:pause animate-loopL">
                  <span className=" group-hover:pause flex items-center gap-2 ">
                    Get a quote&nbsp;{" "}
                    <img
                      src="/icons/top-right-arrow.svg"
                      alt="top-right-arrow"
                      width={16}
                      height={16}
                    />
                    Get a quote&nbsp;{" "}
                    <img
                      src="/icons/top-right-arrow.svg"
                      alt="top-right-arrow"
                      width={16}
                      height={16}
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  </span>
                </span>
                <span className=" group-hover:pause animate-loopL">
                  <span className=" group-hover:pause flex items-center gap-2 ">
                    Get a quote&nbsp;{" "}
                    <img
                      src="/icons/top-right-arrow.svg"
                      alt="top-right-arrow"
                      width={16}
                      height={16}
                    />
                    Get a quote&nbsp;{" "}
                    <img
                      src="/icons/top-right-arrow.svg"
                      alt="top-right-arrow"
                      width={16}
                      height={16}
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  </span>
                </span>
              </div>
            </div>
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-5 h-96">
          <div className="h-full col-span-2 rounded-3xl">
            <img src="/images/hero-img-1.png" alt="" />
          </div>
          <div className="h-full w-full bg-offBlack rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
