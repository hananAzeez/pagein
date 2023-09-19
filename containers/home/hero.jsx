/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import Observer from "gsap/dist/Observer";
import TopRightArrow from "./../../components/icons/icons";
import RightArrow from "./../../components/icons/rightArrow";
import Header from "./../../components/menu/Header";
import { Startups, Steps, services, works } from "../../utils/startups";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

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
  const fixedCtaPc = useRef()
  const revealType = useRef()
  let mainServiceImage;
  const [showCta, setShowCta] = useState(false);


  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
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
    // const circ1 = document.querySelector(".circ1");
    // const circ2 = document.querySelector(".circ2");

    // gsap.to(circ1, {
    //   x: 300,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: ".circ1",
    //     start: "top 80%",
    //     end: "bottom 20%",
    //     scrub: true,
    //   },
    // });

    // gsap.to(circ2, {
    //   x: -300,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: ".circ2",
    //     start: "top 80%",
    //     end: "bottom 20%",
    //     scrub: true,
    //   },
    // });

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

    // ScrollTrigger.create({
    //   trigger: hero, // Trigger when the hero section is in view
    //   start: 'top top',
    //   endTrigger: steps, // End when the steps section is in view
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: steps, // Trigger when the hero section is in view
    //   start: 'top top',
    //   endTrigger: stepOne, // End when the steps section is in view
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: stepOne, // Trigger when the hero section is in view
    //   start: 'top top',
    //   endTrigger: blueprints, // End when the steps section is in view
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: blueprints, // Trigger when the hero section is in view
    //   start: 'top top',
    //   endTrigger: stepTwo, // End when the steps section is in view
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: stepTwo, // Trigger when the hero section is in view
    //   start: 'top top',
    //   endTrigger: stepTwoImgs, // End when the steps section is in view
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: stepTwoImgs, // Trigger when the hero section is in view
    //   start: 'top top',
    //   endTrigger: startups, // End when the steps section is in view
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: startups,
    //   start: 'top top',
    //   endTrigger: works,
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: '.gridTrigger',
    //   start: 'center center',
    //   endTrigger: testimonials,
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });
    // ScrollTrigger.create({
    //   trigger: testimonials,
    //   start: 'bottom bottom',
    //   endTrigger: cta,
    //   end: 'top top',
    //   snap: 1,
    //   duration: 0.2
    // });

    // Add labels to define the snap points
    gsap.set(hero, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "hero-start",
      },
    });
    gsap.set(steps, {
      scrollTrigger: {
        trigger: steps,
        start: "top top",
        end: "top top",
        id: "steps-start",
      },
    });
    gsap.set(stepOne, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "stepOne-start",
      },
    });
    gsap.set(blueprints, {
      scrollTrigger: {
        trigger: steps,
        start: "top top",
        end: "top top",
        id: "blueprints-start",
      },
    });
    gsap.set(stepTwo, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "stepTwo-start",
      },
    });
    gsap.set(stepTwoImgs, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "stepTwoImgs-start",
      },
    });
    gsap.set(startups, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "startups-start",
      },
    });
    gsap.set(works, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "works-start",
      },
    });
    gsap.set(testimonials, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "testimonials-start",
      },
    });
    gsap.set(cta, {
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "top top",
        id: "cta-start",
      },
    });

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

    // \\\\\\\\\\\\\\\\\\\\\\\
    // TESTIMONIALS SECTION
    // \\\\\\\\\\\\\\\\\\\\\\\

    const reviewProfiles = document.querySelector(".review-profiles");

    // gsap.to(reviewProfiles, {
    //   position: "fixed",
    //   scrollTrigger: {
    //     trigger: testimonials,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: true
    //   }
    // })

    // MOUSE CURSOR

    //     gsap.set('.follower',{xPercent:-50,yPercent:-50});
    // gsap.set('.cursor',{xPercent:-50,yPercent:-50});

    // var follow = document.querySelector('.follower');
    // var cur = document.querySelector('.cursor');

    // window.addEventListener('mousemove',e => {
    //     gsap.to(cur, {duration: 0.2, x:e.clientX,y:e.clientY});
    //     gsap.to(follow, {duration: 0.9, x:e.clientX,y:e.clientY});
    // });

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
    // FIXED CTA


    // gsap.set(fixedCtaPc.current, { visibility: "hidden" });

    // gsap.set(fixedCtaPc.current, { visibility: "hidden"})

    //       gsap.to(fixedCtaPc.current, {
    //     scrollTrigger: {
    //       trigger: '.section-container',
    //       start: '800px center',
    //       scrub: 1, // Scrub the animation as you scroll
    //     },
    //     visibility: "visible",
    //   })
    function toggleCtaVisibility() {
      if (window.scrollY >= 800) {
        setShowCta(true);
      } else {
        setShowCta(false);
      }
    }

    // Add a scroll event listener to toggle the visibility
    window.addEventListener('scroll', toggleCtaVisibility);

    // Initially hide the CTA element
    setShowCta(false);

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
    mainServiceImage = document.getElementById('mainServiceImage');
  }); // <- Scope!
  return () => ctx.revert(); // <- Cleanup!
}, []);
  

function changeServiceImage(newImageSrc) {
  mainServiceImage.src = newImageSrc;
}
  return (
    <div className="section-container overflow-x-hidden relative">
      <section className="hero panel px-5 mx-auto lg:px-28 bg-offWhite py-8 scrollSection relative ">
        {/* fixed cta👇 */}
        <div className="fixed-cta fixed lg:hidden bg-black bg-opacity-30 left-0 py-3 w-screen bottom-0 flex items-center justify-center gap-4 lg:gap-5 z-[100]">
          <a
            href="https://hf612bf58kc.typeform.com/to/UXwICQZ7"
            target="_blank"
          >
            <button className="bg-primary border border-primary py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-opacity-80 transition-all duration-300">
              Get a quote
            </button>
          </a>
          <a href="https://wa.link/pg09my" target="_blank" rel="noopener noreferrer">
          <button className="bg-offBlack text-white border border-white border-opacity-50 py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-black transition-all duration-300">
            Talk to us
          </button>
          </a>
        </div>

        <div
      className={`fixed-cta-pc hidden fixed top-7 right-36 py-3 bottom-0  items-center justify-center h-fit gap-4 lg:gap-5 z-[100] ${showCta ? 'lg:flex' : 'lg:hidden'}`}
    >
      <a href="https://hf612bf58kc.typeform.com/to/UXwICQZ7" target="_blank">
        <button className="bg-primary border border-offBlack py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-opacity-80 transition-all duration-300">
          Get a quote
        </button>
      </a>
      <a href="https://wa.link/pg09my" target="_blank" rel="noopener noreferrer">
        <button className="bg-offBlack text-white border border-white border-opacity-50 py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-black transition-all duration-300">
          Talk to us
        </button>
      </a>
    </div>
        {/* fixed cta👆 */}
        <div className="hero-clipath"></div>
        <header className="hidden lg:flex w-full px-10 py-4  justify-between items-center bg-black bg-opacity-40 text-white rounded-xl bg relative">
          <div className="nav-links flex items-center gap-8">
            <p className="menu-links hover-this ">Works</p>
            <p className="menu-links hover-this">Services</p>
          </div>
          <h1 className="text-3xl font-bold">Pagein</h1>
          <div className="nav-links flex items-center gap-8">
            <p className="menu-links">About</p>
            <p className="menu-links">Contact</p>
          </div>
        </header>
        <header className="lg:hidden relative flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Pagein</h1>
        </header>
        <div className="absolute">
          <Header />
        </div>

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
            <button className="bg-primary border border-primary py-3 lg:py-4 px-6 lg:px-8 rounded-2xl text-base lg:text-lg font-bold hover:bg-opacity-80 transition-all duration-300" href="">
              Get a quote
            </button>
            </a>
            <a href="https://wa.link/pg09my" target="_blank" rel="noopener noreferrer">
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

      <section className="bg-offWhite relative">
        {/* <div class="cursor"></div>
<div class="follower"></div> */}
        <div className="startups panel h-full 2xl:h-screen xl:flex xl:items-center xl:justify-center max-w-6xl 2xl:max-w-7xl mx-auto relative px-5 xl:px-0 ">
          <div className="">
            <h2 className="text-offBlack font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] pt-10 lg:pt-16 revealType" ref={revealType}>
              We run startups that helps thousands
            </h2>
            <h6 className="revealType mt-4 xl:mt-8 text-lg xl:text-2xl font-saira max-w-4xl text-offBlack">
              Empowering Solutions Through In-house Startup Ventures. We Ideate
              and create amazing tech products for solving user problems
            </h6>
            <div className="startup-container flex flex-col py-16">
              {Startups.map((startup) => (
                <div
                  className={`startup  grid grid-cols-1 lg:grid-cols-5 gap-y-4 xl:gap-5 items-center justify-start py-6 px-4 xl:p-10 hover:cursor-pointer relative ${
                    startup.id === 1 ? "border-y" : "border-b"
                  } border-offBlack border-opacity-20 hover:bg-offBlack hover:bg-opacity-5`}
                  key={startup.id}
                >
                  <div className="img-wrapper">
                    <img src={`/startups/${startup.image}`} alt="startup img" />
                  </div>
                  <h3 className="text-48 col-span-2 !text-offBlack revealType">
                    {startup.title}
                  </h3>
                  <p className="text-18 col-span-2 !text-offBlack revealType">
                    {startup.desc}
                  </p>
                  <a href={startup.link} target="_blank">
                    <div className="flex items-center justify-start lg:justify-end">
                      <TopRightArrow />
                    </div>
                  </a>
                </div>
              ))}
              {/* <img src="images/saavPopup.png" alt="product image" ref={saavPopup} className="w-[350px] startup-popup"/> */}
            </div>
          </div>
        </div>
      </section>

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
                  big problems that affect a lot of people. Startups, in
                  particular, are our sweet spot because we believe in getting
                  things out there fast.
                </h2>
                <div className="w-full h-[2px] bg-offBlack bg-opacity-40 mt-10"></div>
                <div className="flex justify-between items-center mt-6">
                  <h5 className="font-saira font-medium text-lg md:text-xl xl:text-2xl">
                    HADI ABDUL AZEEZ
                  </h5>
                  <h6 className="font-saira text-base md:text-lg xl:text-xl font-regular">
                    Founder&apos;s Note
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ WORKS SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="works panel bg-offWhite">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-20 px-5 xl:px-0">
          <div className="flex flex-col xl:flex-row items-center justify-between text-offBlack">
            <h2 className=" font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] !text-offBlack w-full max-w-4xl tracking-tight revealType">
              You might love what we built to our clients
            </h2>
            <div className=" items-center justify-end gap-3 w-full xl:w-fit hidden xl:flex py-3 px-6 border border-offBlack rounded-full hover:bg-primary cursor-pointer transition-all duration-300">
              <p className="text-xl text-right">View all</p>
              <RightArrow />
            </div>
          </div>

            <div className="grid xl:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10 mt-8 md:mt-10">
              {works.map(work => (
              <div className="work1 cursor-pointer " key={work.id}>
                <img
                  src={`works/${work.image}`}
                  alt="works"
                  className="rounded-xl lg:rounded-2xl"
                />
                <div className="mt-3 md:mt-6">
                <h6 className="text-2xl xl:text-4xl font-semibold revealType">
                  {work.title}
                </h6>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {work.tags.map(tag => (
                  <p className="text-sm md:text-base font-saira  py-2 px-8 rounded-full border border-offBlack revealType inline-block" key={tag.id}>
                    {tag.title}
                  </p>
                  ))}
                </div>
              </div>
              </div>
              ))}

          </div>
        </div>
      </section>

      
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ SERVICES SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="bg-black !text-offWhite">
      <div
          className="steps panel h-full  bg-darkBg backdrop-blur-sm bg
            "
        >
        <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 lg:px-0 py-20">
      <h2 className=" font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px]w-full max-w-4xl tracking-tight">
              Our Services
            </h2>
            <div className="grid lg:grid-cols-3 gap-14 py-16">
              <div className="service-img col-span-1 bg-white rounded-3xl overflow-hidden ">
                <img src="services/ui-ux-1.png" alt="service" className="bg-cover w-full h-full rounded-3xl" id="mainServiceImage" ref={mainServiceImage}/>
              </div>
              <div className="col-span-2 grid gap-10 h-fit !text-offWhite">
                {services.map(service => (
                  <div className="service flex gap-5 border-b border-offWhite border-opacity-30 py-6" key={service.id} onMouseEnter={() => changeServiceImage(service.image)}>
                    <h3 className="text-4xl">0{service.id}</h3>
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
       
          <div className="px-5 lg:px-0 w-screen py-20 xl:py-32">
            <div className=" w-full flex flex-col items-center px-2  text-center">
              <h2 className="font-bold text-4xl leading-[43px] lg:text-5xl xl:text-6xl xl:leading-[70px] text-center revealType">
                Are you looking for a{" "}
              </h2>
              <h2 className="relative w-full font-bold text-4xl leading-[43px] lg:text-5xl  xl:text-6xl xl:leading-[70px] text-center flex items-start justify-center ">
                <span className="animate-text overflow-hidden align-bottom flex flex-col text-[#B3E208]">
                  <span className=" hidden animatingText ">
                    Web&nbsp;
                  </span>
                  <span className=" hidden animatingText ">
                    App&nbsp;
                  </span>
                  <span className=" hidden animatingText ">
                    UI&nbsp;
                  </span>
                  <span className=" hidden animatingText ">
                    UX&nbsp;
                  </span>
                </span>
                <span className=" inline-block overflow-hidden align-bottom">
                  <span className="inline-block revealType">Solution?</span>
                </span>
              </h2>
              <h6 className="text-lg md:text-2xl pt-8 font-saira max-w-3xl text-center revealType">
                We just don&apos;t ghost you after delivering, we are committed
                to make the product a success from the beginning to the end
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
                  <div className="my-6 md:my-8 flex items-center justify-center gap-5 w-full lg:h-64 bg-offBlack rounded-3xl">
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
          <div className="testimonials panel py-14 xl:py-24 w-screen h-full max-w-6xl 2xl:max-w-7xl mx-auto px-5 xl:px-0">
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
                    Revolutionized our brand! Pagein transformed our website into a sales powerhouse. Exceptional work!
                    </h4>
                    <h6 className="mt-10 lg:mt-16 font-saira text-lg lg:text-2xl font-medium tracking-tight">
                      Tom hales
                    </h6>
                    <p className="opacity-70 mt-3 lg:mt-4 text-sm lg:textt-base font-saira">
                      Entrepreneur
                    </p>
                    <p className="opacity-70 mt-1 lg:mt-2 text-sm lg:textt-base font-saira">
                      Abony
                    </p>
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
                      mohd salih
                    </h6>
                    <p className="opacity-70 mt-3 lg:mt-4 text-sm lg:textt-base font-saira">
                      Tech Entrepreneur
                    </p>
                    <p className="opacity-70 mt-1 lg:mt-2 text-sm lg:textt-base font-saira">
                      Themes
                    </p>
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
                  <div className="flex flex-col gap-4 lg:gap-8">
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
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* \\\ CTA SECTION */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="cta px-5 lg:px-0 panel pt-12 lg:pt-24 w-screen lg:h-screen max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="bg-primary w-full flex flex-col items-center justify-center gap-16 px-6 py-10 lg:p-20 rounded-b-[80px] lg:rounded-b-[128px]">
              <div className="flex items-center justify-center gap-5 lg:gap-14 w-full">
                <div className="flex-1 w-full h-[1px] bg-grey bg-opacity-50" />
                <div className="stars flex items-center gap-6">
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8" />
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8" />
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8" />
                </div>
                <div className="flex-1 w-full h-[1px] bg-grey bg-opacity-50" />
              </div>
              <h2 className="text-center font-bold text-4xl lg:text-[90px] lg:leading-[96px] max-w-4xl">
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
                <a href="https://wa.link/pg09my" target="_blank" rel="noopener noreferrer">
                <button className="py-3 lg:py-4 px-10  bg-primary text-offBlack border border-offBlack rounded-btn text-lg lg:text-2xl w-full lg:w-auto">
                  Talk To Us
                </button>
                </a>
              </div>
            </div>

            <footer>
              <div className="flex flex-col items-center justify-center mt-10 lg:mt-20 w-full">
                <h1 className="text-primary text-3xl lg:text-5xl font-bold pb-10">
                  Pagein
                </h1>
                {/* <div className="flex justify-between items-center w-full text-primary  mt-8 lg:mt-16">
                  <h6 className="text-sm lg:text-xl font-normal">TERMS AND CONDITION</h6>
                  <h6 className="text-sm lg:text-xl">@2023 PAGEIN ALL RIGHTS RESERVED</h6>
                  <h6 className="text-sm lg:text-xl">PRIVACY POLICY</h6>
                </div> */}
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
