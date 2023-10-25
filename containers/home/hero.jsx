/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import Observer from "gsap/dist/Observer";
import TopRightArrow from "./../../components/icons/icons";
import RightArrow, {
  RightArrowPrimary,
} from "./../../components/icons/rightArrow";
import { Startups, Steps, services, works } from "../../utils/startups";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import Navbar from "../../components/navbar";
import Link from "next/link";
import { motion, useScroll } from "framer-motion"

gsap.registerPlugin(CustomEase, ScrollTrigger);
gsap.registerPlugin(Observer);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Hero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);
  const saavPopup = useRef();
  const navWorks = useRef();
  const navServices = useRef();
  const navAbout = useRef();
  const navContact = useRef();
  const fixedCtaPc = useRef();
  const revealType = useRef();
  const mainServiceImage = useRef();
  // let mainServiceImage;

  const scrollRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      
      // \\\\\\\\\\\\\\\\\\\\\\\
      // HERO SECTION
      // \\\\\\\\\\\\\\\\\\\\\\\
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

      const highlightText = document.querySelector(".highlight");
      const textLoad = () => {
        setTimeout(() => {
          highlightText.textContent = "Web";
        }, 0);
        setTimeout(() => {
          highlightText.textContent = "App";
        }, 3000);
      };
      textLoad();
      setInterval(textLoad, 6000);

      // \\\\\\\\\\\\\\\\\\\\\\\
      // SERVICES SECTION
      // \\\\\\\\\\\\\\\\\\\\\\\

      const servicesTitle = document.querySelectorAll(".s_title");

      servicesTitle.forEach((title, index) => {
        const el = title.querySelectorAll("span span");
        const delay = index * 0.08;

        gsap.set(el, { y: "100%" });

        gsap.to(el, {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
          scrollTrigger: {
            trigger: title, // Specify the trigger element
            start: "top 80%", // Adjust this value as needed
            end: "bottom 20%", // Adjust this value as needed
            scrub: true, // Scrub the animation as you scroll
            toggleActions: "play none none reverse", // Control animation behavior
          },
          delay: delay,
        });
      });

      // animating text
      const animateTexts = document.querySelector(".animate-text").children,
        textsLen = animateTexts.length;

      let index = 0;

      function animateText() {
        // console.log(animateTexts[index]);
        for (let i = 0; i < textsLen; i++) {
          animateTexts[i].classList.remove("text-in");
        }
        animateTexts[index].classList.add("text-in");
        if (index == textsLen - 1) {
          index = 0;
        } else {
          index++;
        }
        setTimeout(animateText, 2000);
      }
      animateText();

      const animatingTexts = document.querySelectorAll(".animatingText");
      animatingTexts.forEach((title, index) => {
        const delay = index * 0.08;

        gsap.set(animatingTexts, { y: "100%" });

        // Create a ScrollTrigger for each animatingText element
        gsap.to(animatingTexts, {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
          scrollTrigger: {
            trigger: title, // Specify the trigger element
            start: "top 80%", // Adjust this value as needed
            end: "bottom 20%", // Adjust this value as needed
            scrub: true, // Scrub the animation as you scroll
            toggleActions: "play none none reverse", // Control animation behavior
          },
          delay: delay,
        });
      });

      // \\\\\\\\\\\\\\\\\\\\\\\
      // STEP ONE SECTION
      // \\\\\\\\\\\\\\\\\\\\\\\

      const stepOneTitle = document.querySelectorAll(".stepOneTitle");

      stepOneTitle.forEach((title, index) => {
        const el = title.querySelectorAll("span span");
        const delay = index * 0.08;

        tl.to(
          el,
          {
            y: 0,
            duration: 1.5,
            ease: "cubic-text",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          },
          delay
        );
      });

      const circles = document.querySelectorAll(".circ");

      circles.forEach((circle, index) => {
        gsap.to(circle, {
          x: 300 * (index % 2 === 0 ? 1 : -1), // Alternate between left and right
          duration: 1.5,
          scrollTrigger: {
            trigger: circle,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      });

      // \\\\\\\\\\\\\\\\\\\\\\\
      // BLUEPRINTS SECTION
      // \\\\\\\\\\\\\\\\\\\\\\\

      function setupScrollAnimation() {
        // Select the blueprints container
        const blueprints = document.querySelector(".blueprints");

        // Select the individual prototype images
        const prototype = document.querySelectorAll(".prototype");

        ScrollTrigger.create({
          trigger: ".blueprint",
          start: "top",
          end: "bottom",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        });

        // Add animation to each prototype image
        prototype.forEach((title, index) => {
          const delay = index * 2;

          // Create a ScrollTrigger for each title element
          gsap.to(title, {
            y: 40,
            opacity: 1,
            duration: 1.5,
            ease: "cubic-text",
            scrollTrigger: {
              trigger: title, // Specify the trigger element
              start: "top 80%", // Adjust this value as needed
              end: "bottom 20%", // Adjust this value as needed
              scrub: true, // Scrub the animation as you scroll
              toggleActions: "play none none reverse", // Control animation behavior
            },
            delay: delay,
          });
        });
      }
      setupScrollAnimation();

      // STARTUPS
      const startup = document.querySelector(".startups");

      // \\\\\\\\\\\\\\\\\\\\\\\
      // GENERAL
      // \\\\\\\\\\\\\\\\\\\\\\\

      const hero = document.querySelector(".hero");
      const steps = document.querySelector(".steps");
      const stepOne = document.querySelector(".stepOne");
      const blueprints = document.querySelector(".blueprints");
      const stepTwo = document.querySelector(".stepTwo");
      const stepTwoImgs = document.querySelector(".stepTwoImgs");
      const startups = document.querySelector(".startups");
      const works = document.querySelector(".works");
      const testimonials = document.querySelector(".testimonials");
      const cta = document.querySelector(".cta");

      // \\\\\\\\\\\\\\\\\\\\\\\
      // STARTUPS SECTION
      // \\\\\\\\\\\\\\\\\\\\\\\
      const startupDivs = document.querySelectorAll(".startup");

      startupDivs.forEach((startup) => {
        const imgWrapper = startup.querySelector(".img-wrapper");
        const img = startup.querySelector("img");

        startup.addEventListener("mouseenter", () => {
          // Show the image
          if (window.innerWidth >= 800) {
            gsap.to(imgWrapper, { opacity: 1, duration: 0.5, scale: 1 });

            // Add mousemove listener to the entire document
            document.addEventListener("mousemove", (e) => {
              const { left, top, width, height } =
                imgWrapper.getBoundingClientRect();
              const x = (e.clientX - left) / width;
              const y = (e.clientY - top) / height;

              gsap.to(imgWrapper, {
                x: (x - 0.5) * 100,
                y: (y - 0.5) * 100,
                duration: 0.2,
              });
            });
          }
        });

        // Remove mousemove listener
        document.removeEventListener("mousemove", () => {});
      });

      // FIXED CTA
      const fixedCta = document.querySelector(".fixed-cta");
      const sectionContainer = document.querySelector(".section-container");

      gsap.set(fixedCta, { visibility: "hidden" });

      gsap.to(fixedCta, {
        scrollTrigger: {
          trigger: sectionContainer,
          start: "800px center",
          scrub: true,
          markers: false,
        },
        ease: "power1.out",
        visibility: "visible",
      });

      // TEXT REVEAL
      const splitTypes = document.querySelectorAll(".revealType");

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "words" });

        gsap.from(text.words, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 75%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          // y: 10,
          stagger: 0.1,
        });
      });

      // services
      // mainServiceImage = document.getElementById('mainServiceImage');
    }); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  function changeServiceImage(newImageSrc) {
    mainServiceImage.current.src = newImageSrc;
  }
  return (
    <div className="section-container overflow-x-hidden relative">
      <section className="hero panel px-5 mx-auto lg:px-28 bg-offWhite py-8 scrollSection relative ">
        {/* fixed cta👇 */}
        <div className="hero-clipath"></div>
        <Navbar color={"black"} />

        {/* MENU */}

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="h_container  flex flex-col   px-2 pt-16 ">
            <h1 className="h_title text-center relative w-full text-white text-5xl font-bold tracking-[0.64px] lg:text-6xl xl:text-[80px] 2xl:text-[96px] xl:leading-[92px] 2xl:leading-[106px] lg:tracking-[-2.56px] xl::tracking-[-3.84px]">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                  We&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Make&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Amazing&nbsp;
                </span>
              </span>
            </h1>
            <h1 className="h_title text-center relative flex w-full flex-col justify-center items-center lg:items-center  lg:flex-row text-white text-5xl font-bold tracking-[0.64px] lg:text-6xl xl:text-[80px] 2xl:text-[96px] xl:leading-[92px] 2xl:leading-[106px] lg:tracking-[-2.56px] xl::tracking-[-3.84px]">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block lg:w-[190px] xl:w-[250px] 2xl:w-[286px] translate-y-full pb-1.5 pt-6 will-change-transform highlight">
                  Web&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Solutions
                </span>
              </span>
            </h1>
          </div>

          <div className="h_container hidden md:flex flex-col   px-2 py-9 ">
            <h6 className="h_title text-center relative w-full text-white text-base font-saira font-normal tracking-[0.64px] lg:text-xl 2xl:text-2xl lg:tracking-[-0.72px]">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                  Transforming Ideas into Seamless&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Interfaces Since 2019.&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Partner with Us to Design, &nbsp;
                </span>
              </span>
            </h6>
            <h6 className="h_title text-center relative w-full text-white text-base font-saira font-normal tracking-[0.64px] lg:text-xl 2xl:text-2xl lg:tracking-[-0.72px]">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
                  Build, and Deliver&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Extraordinary Digital&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Products and Services.&nbsp;
                </span>
              </span>
            </h6>
          </div>
          {/* mobile description */}
          <div className="h_container md:hidden  flex flex-col   px-2 py-9 ">
            <h6 className="h_title  text-center relative w-full text-white text-base font-saira font-normal tracking-[0.64px]  lg:text-2xl lg:tracking-[-0.72px]">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                  Transforming Ideas into Seamless Interfaces Since 2019.
                  Partner with Us to Design, Build, and Deliver Extraordinary
                  Digital Products and Services.&nbsp;
                </span>
              </span>
            </h6>
          </div>

          <div className="flex items-center justify-center gap-4 lg:gap-5 relative">
            <a
              href="https://hf612bf58kc.typeform.com/to/UXwICQZ7"
              target="_blank"
            >
              <button
                className="bg-primary border border-primary py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-opacity-80 transition-all duration-300"
                href=""
              >
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

          <div className=" my-16 hidden lg:flex items-center justify-center ">
            <img
              src="/images/hero-1.png"
              alt="mockup"
              className="mr-3 mb-9 rotate-6 z-[1]"
            />
            <img
              src="/images/hero-2.png"
              alt="mockup"
              className="mr-4 -rotate-[8deg]"
            />
            <img
              src="/images/hero-3.png"
              alt="mockup"
              className="mb-9 rotate-3"
            />
            <img
              src="/images/hero-4.png"
              alt="mockup"
              className="ml-[1px] -rotate-[8deg]"
            />
          </div>

          <div class="lg:hidden  hero-images slider my-16 ">
            <div className="group flex cursor-pointer items-center ">
              <div class="w-full slide-track">
                <img
                  src="/images/hero-1.png"
                  alt="mockup"
                  className="mr-3 rotate-6 z-[1] w-4/5"
                />
                <img
                  src="/images/hero-2.png"
                  alt="mockup"
                  className="mr-4 -rotate-[8deg] w-4/5"
                />
                <img
                  src="/images/hero-3.png"
                  alt="mockup"
                  className="rotate-3 w-4/5"
                />
                <img
                  src="/images/hero-4.png"
                  alt="mockup"
                  className="ml-[1px] -rotate-[8deg] w-4/5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ WORKS SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <motion.section initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }} className="works panel bg-offWhite py-20">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto  px-5 xl:px-0">
          <div className="flex flex-col xl:flex-row items-center justify-between text-offBlack">
            <h2 className=" font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] !text-offBlack w-full max-w-4xl tracking-tight revealType">
              You might love what we built to our clients
            </h2>
            <Link href="/works">
              <div className=" items-center justify-end gap-3 w-full xl:w-fit hidden xl:flex py-3 px-6 border border-offBlack rounded-full hover:bg-primary cursor-pointer transition-all duration-300">
                <p className="text-xl text-right">View all</p>
                <RightArrow />
              </div>
            </Link>
          </div>

          <div className="grid xl:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10 mt-8 md:mt-10">
            {works.slice(0, 4).map((work) => (
              <div className="work1 cursor-pointer " key={work.id}>
                <a href={work.link} target="_blank">
                  <img
                    src={`works/${work.image}`}
                    alt="works"
                    className="rounded-xl lg:rounded-2xl"
                  />
                </a>
                <div className="mt-3 md:mt-6">
                  <h6 className="text-2xl xl:text-4xl font-semibold revealType">
                    {work.title}
                  </h6>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    {work.tags.map((tag) => (
                      <p
                        className="text-sm md:text-base font-saira  py-2 px-8 rounded-full border border-offBlack revealType inline-block"
                        key={tag.id}
                      >
                        {tag.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href="/works">
          <div className="w-fit xl:hidden flex items-center justify-center gap-3 mx-auto py-3 px-6 mt-10 border border-offBlack rounded-full hover:bg-primary cursor-pointer transition-all duration-300">
            <p className="text-lg ">View all</p>
            <RightArrow />
          </div>
        </Link>
      </motion.section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ NOTE SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="bg-black ">
        <div className=" bg-darkBg backdrop-blur-sm">
          <div className="bg-primary py-14 md:py-20 xl:py-32">
            <div className="flex flex-col lg:flex-row items-start gap-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 lg:px-0">
              <img
                src="icons/quote.svg"
                alt="quote"
                className="w-10 h-10 lg:w-20 lg:h-20 bg-cover bg-offBlack p-2 lg:p-5 rounded-full"
              />
              <div className=" text-offBlack">
                <h2 className="font-semibold text-3xl leading-[40px] xl:text-6xl xl:leading-[77px] revealType">
                  Our vision is to collaborate with founders who are tackling
                  big problems that affect a lot of people.
                </h2>
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mt-10 w-full">
                  <div className="max-w-xl">
                    <h3 className="font-medium text-2xl revealType ">
                      Startups, in particular, are our sweet spot because we
                      believe in getting things out there fast.
                    </h3>
                    <div className="w-full h-[2px] bg-offBlack bg-opacity-20 mt-10"></div>
                    <div className="flex justify-between items-center mt-6">
                      <h5 className="font-saira font-medium text-base md:text-lg xl:text-xl">
                        HADI ABDUL AZEEZ
                      </h5>
                      <h6 className="font-saira text-base md:text-lg xl:text-xl font-regular">
                        Founder&apos;s Note
                      </h6>
                    </div>
                  </div>
                  <Link href="/about">
                    <button className="w-fit py-4 xl:py-7 px-10 lg:px-16 rounded-2xl bg-offBlack hover:bg-black transition-all duration-300 text-primary text-lg  xl:text-2xl flex items-center gap-2">
                      Know more <RightArrowPrimary />{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ STARTUPS SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="bg-offWhite relative">
        {/* <div class="cursor"></div>
<div class="follower"></div> */}
        <div className="startups panel h-full 2xl:h-screen xl:flex xl:items-center xl:justify-center max-w-6xl 2xl:max-w-7xl mx-auto relative px-5 xl:px-0 ">
          <div className="">
            <h2
              className="text-offBlack font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] pt-10 lg:pt-16 revealType"
              ref={revealType}
            >
              We run startups that helps thousands
            </h2>
            <h6 className="revealType mt-4 xl:mt-8 text-lg xl:text-2xl font-saira max-w-4xl text-offBlack">
              Empowering Solutions Through In-house Startup Ventures. We Ideate
              and create amazing tech products for solving user problems
            </h6>
            <div className="startup-container flex flex-col py-16">
              {Startups.map((startup) => (
                <a href={startup.link} target="_blank" key={startup.id}>
                  <div
                    className={`startup  grid grid-cols-1 lg:grid-cols-5 gap-y-4 xl:gap-5 items-center justify-start py-6 px-4 xl:p-10 hover:cursor-pointer relative ${
                      startup.id === 1 ? "border-y" : "border-b"
                    } border-offBlack border-opacity-20 hover:bg-offBlack hover:bg-opacity-5`}
                    key={startup.id}
                  >
                    <div className="img-wrapper">
                      <img
                        src={`/startups/${startup.image}`}
                        alt="startup img"
                      />
                    </div>
                    <h3 className="text-48 col-span-2 !text-offBlack revealType">
                      {startup.title}
                    </h3>
                    <p className="text-18 col-span-2 !text-offBlack revealType">
                      {startup.desc}
                    </p>
                    {/* <a href={startup.link} target="_blank"> */}
                      <div className="flex items-center justify-start lg:justify-end">
                        <TopRightArrow />
                      </div>
                    {/* </a> */}
                  </div>
                </a>
              ))}
              {/* <img src="images/saavPopup.png" alt="product image" ref={saavPopup} className="w-[350px] startup-popup"/> */}
            </div>
          </div>
        </div>
      </section>



      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ SERVICES SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="bg-black !text-offWhite">
        <div className="steps panel h-full  bg-darkBg backdrop-blur-sm bg">
          <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 lg:px-0 py-20">
            <h2 className=" font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px]w-full max-w-4xl tracking-tight">
              Our Services
            </h2>
            <div className="grid lg:grid-cols-3 gap-14 py-10 md:py-16">
              <div className="service-img col-span-1 bg-white rounded-3xl overflow-hidden hidden lg:block">
                <img
                  src="services/ui-ux-1.png"
                  alt="service"
                  className="bg-cover w-full h-full rounded-3xl"
                  id="mainServiceImage"
                  ref={mainServiceImage}
                />
              </div>
              <div className="col-span-2 grid gap-10 h-fit !text-offWhite">
                {services.map((service) => (
                  <div
                    className="service flex flex-col lg:flex-row gap-5 border-b border-offWhite border-opacity-30 pt-6 pb-12"
                    key={service.id}
                    onMouseEnter={() => changeServiceImage(service.image)}
                  >
                    <h3 className="text-4xl">0{service.id}</h3>
                    <div className="h-56 overflow-hidden lg:hidden">
                      <img
                        src={service.mobile}
                        alt="service"
                        className=" w-full bg-bottom "
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-4xl font-semibold tracking-[-1.44px] md:text-5xl col-span-2 revealType">
                        {service.title}
                      </h3>
                      <p className="text-18 col-span-2  revealType mt-6 !text-offWhite">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ STEPS SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="services bg-offWhite relative overflow-hidden scrollSection text-offBlack">
        <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 lg:px-0 py-20 xl:py-32">
          <div className=" w-full flex flex-col items-center px-2  text-center">
            <h2 className="font-bold text-4xl leading-[43px] lg:text-5xl xl:text-6xl xl:leading-[70px] text-center revealType">
              Are you looking for a{" "}
            </h2>
            <h2 className="relative w-full font-bold text-4xl leading-[43px] lg:text-5xl  xl:text-6xl xl:leading-[70px] text-center flex items-start justify-center ">
              <span className="animate-text overflow-hidden align-bottom flex flex-col text-[#B3E208]">
                <span className=" hidden animatingText ">Web&nbsp;</span>
                <span className=" hidden animatingText ">App&nbsp;</span>
                <span className=" hidden animatingText ">UI&nbsp;</span>
                <span className=" hidden animatingText ">UX&nbsp;</span>
              </span>
              <span className=" inline-block overflow-hidden align-bottom">
                <span className="inline-block revealType">Solution?</span>
              </span>
            </h2>
            <h6 className="text-lg md:text-2xl pt-8 font-saira max-w-3xl text-center revealType">
              We just don&apos;t ghost you after delivering, we are committed to
              make the product a success from the beginning to the end
            </h6>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 2xl:gap-10 max-w-6xl 2xl:max-w-7xl mx-auto pt-6 lg:pt-12 2xl:pt-16 text-offWhite">
            {Steps.map((step) => (
              <div
                className="px-6 md:px-8 xl:px-10 py-7 md:py-10 xl:py-14 flex flex-col text-left bg-offBlack  rounded-[36px]"
                key={step.id}
              >
                <h6 className="text-3xl opacity-30 font-medium font-syne revealType">
                  {step.step}
                </h6>
                <div className="my-6 md:my-8 flex items-center justify-center gap-5 w-full  bg-offBlack rounded-2xl">
                  <img
                    src={step.image}
                    alt="process"
                    className="bg-cover w-full h-full rounded-3xl"
                  />
                </div>
                <h6 className="text-2xl xl:text-4xl font-semibold revealType">
                  {step.title}
                </h6>
                <p className="text-base md:text-lg xl:text-xl font-saira pt-4 md:pt-6 revealType">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ TESTIMONIAL SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className=" bg-black relative overflow-hidden scrollSection">
        <div className="circ circ13 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72"></div>
        <div className="circ circ14 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[600px]"></div>
        <div className="circ circ15 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[1000px]"></div>
        <div className="circ circ16 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[1700px]"></div>
        <div className="circ circ17 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[2400px]"></div>
        <div className="circ circ18 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[3100px]"></div>
        <div className="circ circ19 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[3800px]"></div>
        <div className="circ circ20 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[4500px]"></div>
        <div className="h-full w-full bg-darkBg backdrop-blur-sm bg ">
          <div className="testimonials panel py-14 xl:py-24 w-screen h-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 lg:px-0">
            <h2 className="font-saira text-lg xl:text-2xl font-medium text-white">
              Trusted and Loved: Hear from Our Clients
            </h2>
            {/* <h2 className="text-title-64 w-full max-w-4xl">
              Trusted and Loved: <br/>Hear from Our Clients
            </h2> */}
            <div className="reviews mt-10">
              <div className=" review flex items-center justify-between gap-5  lg:gap-32 py-20 lg:py-40 border-y-2 border-white border-opacity-10">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <img
                    src="icons/quote.svg"
                    alt="quote"
                    className="w-10 h-10 lg:w-auto lg:h-auto"
                  />
                  <div className="text-white">
                    <h4 className="text-48 revealType">
                      Revolutionized our brand! fiveweeks transformed our
                      website into a sales powerhouse. Exceptional work!
                    </h4>
                    <h6 className="mt-10 lg:mt-16 font-saira text-lg lg:text-2xl font-medium tracking-tight">
                      Upwork client
                    </h6>
                    {/* <h6 className="mt-10 lg:mt-16 font-saira text-lg lg:text-2xl font-medium tracking-tight">
                      Tom hales
                    </h6>
                    <p className="opacity-70 mt-3 lg:mt-4 text-sm lg:textt-base font-saira">
                      Entrepreneur
                    </p>
                    <p className="opacity-70 mt-1 lg:mt-2 text-sm lg:textt-base font-saira">
                      Abony
                    </p> */}
                  </div>
                </div>
                {/* <div className="flex gap-2 lg:gap-4 items-center">
                  <div className="h-full w-8 flex items-center justify-center">
                    <img
                      src="icons/leftSolidArrow.png"
                      alt="current"
                      className="w-5 lg:w-8 h-5 lg:h-8"
                    />
                    <h1 className="opacity-0">p</h1>
                  </div>
                  <div className="review-profiles flex flex-col gap-4 lg:gap-8">
                    <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey">
                      <img
                        src="images/testimony1.png"
                        alt="user"
                        className="w-full h-full bg-cover"
                      />
                    </div>
                    <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey">
                      <img
                        src="images/testimony2.png"
                        alt="user"
                        className="w-full h-full bg-cover"
                      />
                    </div>
                    <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey">
                      <img
                        src="images/testimony3.png"
                        alt="user"
                        className="w-full h-full bg-cover"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
              <div className=" review flex items-center justify-between gap-5 lg:gap-32 py-20 lg:py-40 border-y-2 border-white border-opacity-10">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <img
                    src="icons/quote.svg"
                    alt="quote"
                    className="w-10 h-10 lg:w-auto lg:h-auto"
                  />
                  <div className="text-white">
                    <h4 className="text-48 revealType">
                      The app they built for me exceeded my expectations in
                      every way.
                    </h4>
                    <h6 className="mt-10 lg:mt-16 font-saira text-lg lg:text-2xl font-medium tracking-tight">
                      Upwork client
                    </h6>
                    {/* <h6 className="mt-10 lg:mt-16 font-saira text-lg lg:text-2xl font-medium tracking-tight">
                      mohd salih
                    </h6>
                    <p className="opacity-70 mt-3 lg:mt-4 text-sm lg:textt-base font-saira">
                      Tech Entrepreneur
                    </p>
                    <p className="opacity-70 mt-1 lg:mt-2 text-sm lg:textt-base font-saira">
                      Themes
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* \\\ CTA SECTION */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="cta md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 lg:px-0 pb-14 lg:pb-0">
            <div className=" panel pt-12 lg:pt-24 max-w-6xl 2xl:max-w-7xl mx-auto bg-primary w-full flex flex-col items-center justify-center gap-16 px-6 py-10 lg:p-20 rounded-b-[80px] lg:rounded-b-[128px]">
              <div className="flex items-center justify-center gap-5 lg:gap-14 w-full">
                <div className="flex-1 w-full h-[1px] bg-grey bg-opacity-50" />
                <div className="stars flex items-center gap-6">
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8" />
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8" />
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8" />
                </div>
                <div className="flex-1 w-full h-[1px] bg-grey bg-opacity-50" />
              </div>
              <h2 className="text-center font-bold text-4xl md:text-5xl xl:text-[90px] lg:leading-[96px] max-w-4xl">
                Let&apos;s Grow Your Digital Presence!
              </h2>
              <div className="cta-buttons flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                <a
                  href="https://hf612bf58kc.typeform.com/to/UXwICQZ7"
                  target="_blank"
                >
                  <button className="py-3 lg:py-4 px-10 bg-offBlack text-primary rounded-btn text-lg lg:text-2xl border border-offBlack w-full lg:w-auto">
                    Get a Quote
                  </button>
                </a>
                <a
                  href="https://wa.link/pg09my"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="py-3 lg:py-4 px-10  bg-primary text-offBlack border border-offBlack rounded-btn text-lg lg:text-2xl w-full lg:w-auto">
                    Talk To Us
                  </button>
                </a>
              </div>
            </div>

            <footer>
              <section class="py-10 !text-white sm:pt-16 lg:pt-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
                    <div class="col-span-2 md:col-span-4 xl:pr-8">
                      <h1 className="text-3xl text-primary font-bold">
                        fiveweeks
                      </h1>

                      <p class="text-base leading-relaxed  mt-7">
                        Partner with Us to Design, Build, and Deliver
                        Extraordinary Digital Products and Services.
                      </p>

                      <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-6 py-4 font-semibold text-offBlack rounded-2xl transition-all duration-200 bg-primary mt-7"
                      >
                        Get a quote
                      </a>
                    </div>

                    <div class="lg:col-span-2">
                      <p class="text-base font-semibold text-offWhite ">Menu</p>

                      <ul class="mt-6 space-y-5 text-offWhite text-opacity-90">
                        <li>
                          <Link
                            href="/about"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            About{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/works"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            Works{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            Services{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            Contact{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div class="lg:col-span-2">
                      <p class="text-base font-semibold  ">Services</p>

                      <ul class="mt-6 space-y-5 text-offWhite text-opacity-90">
                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            Web Development{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            App Development{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            UI/UX Design{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            Tech Solutions{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div class="lg:col-span-2">
                      <p class="text-base font-semibold ">Contact</p>

                      <ul class="mt-6 space-y-5 text-offWhite text-opacity-90">
                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            fiveweeks@gmail.com
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            +91 70121 79326{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            title=""
                            class="flex text-sm transition-all duration-200 "
                          >
                            {" "}
                            Koduvally, Kozhikode , <br /> 673572
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr class="mt-16 mb-10 border-gray-200" />

                  <div class="sm:flex sm:items-center sm:justify-between">
                    <p class="text-sm ">
                      © Copyright 2023, All Rights Reserved by fiveweeks
                    </p>

                    <ul class="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                      {/* <li>
                    <Link
                      href="#"
                      title=""
                      class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                      <svg
                        class="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </li> */}

                      {/* <li>
                    <Link
                      href="#"
                      title=""
                      class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                      <svg
                        class="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                      </svg>
                    </Link>
                  </li> */}

                      {/* <li>
                        <Link
                          href="https://www.instagram.com/fiveweeks.studio/?hl=en"
                          target="_blank"
                          title=""
                          class="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                        >
                          <svg
                            class="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                          </svg>
                        </Link>
                      </li> */}

                      {/* <li>
                    <Link
                      href="#"
                      title=""
                      class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                      <svg
                        class="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        ></path>
                      </svg>
                    </Link>
                  </li> */}
                    </ul>
                  </div>
                </div>
              </section>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
