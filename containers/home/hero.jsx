/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import Observer from "gsap/dist/Observer";
import TopRightArrow from "./../../components/icons/icons";
import RightArrow from "./../../components/icons/rightArrow";
import Header from "./../../components/menu/Header"
import { Startups } from "../../utils/startups";
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";

gsap.registerPlugin(CustomEase, ScrollTrigger);
gsap.registerPlugin(Observer);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Hero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);
  const saavPopup = useRef()


  useEffect(() => {

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
    const startup = document.querySelector('.startups')

    
    // \\\\\\\\\\\\\\\\\\\\\\\
    // GENERAL
    // \\\\\\\\\\\\\\\\\\\\\\\

    const hero = document.querySelector('.hero')
    const steps = document.querySelector('.steps')
    const stepOne = document.querySelector('.stepOne')
    const blueprints = document.querySelector('.blueprints')
    const stepTwo = document.querySelector('.stepTwo')
    const stepTwoImgs = document.querySelector('.stepTwoImgs')
    const startups = document.querySelector('.startups')
    const works = document.querySelector('.works')
    const testimonials = document.querySelector('.testimonials')
    const cta = document.querySelector('.cta')

    ScrollTrigger.create({
      trigger: hero, // Trigger when the hero section is in view
      start: 'top top',
      endTrigger: steps, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    ScrollTrigger.create({
      trigger: steps, // Trigger when the hero section is in view
      start: 'top top',
      endTrigger: stepOne, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    ScrollTrigger.create({
      trigger: stepOne, // Trigger when the hero section is in view
      start: 'top top',
      endTrigger: blueprints, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    ScrollTrigger.create({
      trigger: blueprints, // Trigger when the hero section is in view
      start: 'top top',
      endTrigger: stepTwo, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    ScrollTrigger.create({
      trigger: stepTwo, // Trigger when the hero section is in view
      start: 'top top',
      endTrigger: stepTwoImgs, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    ScrollTrigger.create({
      trigger: stepTwoImgs, // Trigger when the hero section is in view
      start: 'top top',
      endTrigger: startups, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
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
    gsap.set(hero, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'hero-start' } });
    gsap.set(steps, { scrollTrigger: { trigger: steps, start: 'top top', end: 'top top', id: 'steps-start' } });
    gsap.set(stepOne, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'stepOne-start' } });
    gsap.set(blueprints, { scrollTrigger: { trigger: steps, start: 'top top', end: 'top top', id: 'blueprints-start' } });
    gsap.set(stepTwo, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'stepTwo-start' } });
    gsap.set(stepTwoImgs, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'stepTwoImgs-start' } });
    gsap.set(startups, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'startups-start' } });
    gsap.set(works, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'works-start' } });
    gsap.set(testimonials, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'testimonials-start' } });
    gsap.set(cta, { scrollTrigger: { trigger: hero, start: 'top top', end: 'top top', id: 'cta-start' } });

    
    // \\\\\\\\\\\\\\\\\\\\\\\
    // MENU
    // \\\\\\\\\\\\\\\\\\\\\\\

    // gsap.set(".toggle-btn-pc", { visibility: "hidden"})
    // function revealMenu() {
    //   revealMenuItems();
    //   const hamburger = document.getElementById("hamburger");
    //   const toggleBtn = document.getElementById("toggle-btn")
    //   const toggleBtnPc = document.getElementById("toggle-btn-pc")

    //   toggleBtn.onclick = function (e) {
    //     console.log('clicked')
    //     hamburger.classList.toggle("active");
    //     menuTl.reversed(!menuTl.reversed())
    //   }

    //   toggleBtnPc.onclick = function (e) {
    //     hamburger.classList.toggle("active");
    //     menuTl.reversed(!menuTl.reversed())
    //   }
    // }
    
    // \\\\\\\\\\\\\\\\\\\\\\\
    // STARTUPS SECTION
    // \\\\\\\\\\\\\\\\\\\\\\\
const startupDivs = document.querySelectorAll('.startup');


startupDivs.forEach(startup => {
  const imgWrapper = startup.querySelector('.img-wrapper');
  const img = startup.querySelector('img');

  startup.addEventListener('mouseenter', () => {
    // Show the image
    gsap.to(imgWrapper, { opacity: 1, duration: 0.5, scale: 1 });

    // Add mousemove listener to the entire document
    document.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = imgWrapper.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      gsap.to(imgWrapper, { x: (x - 0.5) * 100, y: (y - 0.5) * 100, duration: 0.2 });
    });
  });


    // Remove mousemove listener
    document.removeEventListener('mousemove', () => {});
});


// \\\\\\\\\\\\\\\\\\\\\\\
    // TESTIMONIALS SECTION
    // \\\\\\\\\\\\\\\\\\\\\\\

    const reviewProfiles = document.querySelector(".review-profiles")

    gsap.to(reviewProfiles, {
      position: "fixed",
      scrollTrigger: {
        trigger: testimonials,
        start: "top top",
        end: "bottom bottom"
      }
    })

    return () => {};
  }, []);
  return (
    <div className="section-container overflow-x-hidden relative">
      <section className="hero panel px-5 mx-auto lg:px-28 bg-offWhite h-screen py-8 scrollSection">
        <header className="hidden lg:flex w-full px-10 py-4  justify-between items-center bg-white rounded-xl bg">
          <div className="nav-links flex items-center gap-8">
            <p className="menu-links hover-this ">Works</p>
            <p className="menu-links hover-this">Services</p>
          </div>
          <h1 className="text-black text-3xl font-bold">Pagein</h1>
          <div className="nav-links flex items-center gap-8">
            <p className="menu-links">About</p>
            <p className="menu-links">Contact</p>
          </div>
        </header>
        <header className="lg:hidden">
        <h1 className="text-black text-2xl font-bold">Pagein</h1>

        </header>

        {/* MENU */}
        
        <Header />    
        <div className="max-w-7xl mx-auto">
          <div className="h_container  flex flex-col   px-2 py-16 ">
          <h1 className="h_title text-center relative w-full text-black text-[64px] leading-[77px] font-bold tracking-[0.64px]  lg:text-[104px] lg:leading-[117px] lg:tracking-[-1.04px]">
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
            <h1 className="h_title text-center relative flex w-full flex-col justify-center items-center lg:items-center  lg:flex-row text-black text-[64px] leading-[77px] font-bold tracking-[0.64px]  lg:text-[104px] lg:leading-[117px] lg:tracking-[-1.04px]">
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block xl:w-[286px] translate-y-full pb-1.5 pt-6 will-change-transform highlight">
                  Web&nbsp;
                </span>
              </span>
              <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Solutions
                </span>
              </span>
              {/* <div
                ref={heroInfiniteRef}
                className=" absolute bottom-[-35vw] left-[25%] ml-10 -mr-10 h-8 w-40  overflow-hidden rounded-2xl border border-black text-xs font-normal uppercase opacity-0  md:left-[40%]   md:h-16  md:w-52 md:text-xl lg:relative lg:left-8 lg:bottom-0 lg:right-[1vw] lg:w-[16vw]  lg:leading-10 bg-primary"
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
              </div> */}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-96">
            <div className="heroLeft h-full col-span-2 rounded-3xl">
              <img src="/images/hero-img-1.png" alt="" />
            </div>
            <div className="heroRight hidden lg:block h-full w-full bg-offBlack rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ SERVICES SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="services bg-black relative overflow-hidden scrollSection text-white">
        <div className="circ circ1 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72"></div>
        <div className="circ circ2 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[600px]"></div>
        <div className="circ circ3 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[1000px]"></div>
        <div className="circ circ4 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[1700px]"></div>
        <div className="circ circ5 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[2400px]"></div>
        <div className="circ circ6 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[3100px]"></div>
        <div className="circ circ7 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[3800px]"></div>
        <div className="circ circ8 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[4500px]"></div>
        <div className="circ circ9 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[5200px]"></div>
        <div className="circ circ10 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[5900px]"></div>
        <div className="circ circ11 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[6500px]"></div>
        <div className="circ circ12 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[7200px]"></div>
        <div
          className="steps panel h-full w-fit  bg-darkBg backdrop-blur-sm bg
            "
        >
          <div className="px-5 lg:px-0 h-screen w-screen flex items-center justify-center">
            <div className="h_container w-full flex flex-col   px-2 py-16 text-white font-bold text-center">
              <h1 className="s_title  relative w-full font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] ">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    Are&nbsp;
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    you
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    &nbsp;looking
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    &nbsp;for
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    &nbsp;a
                  </span>
                </span>
              </h1>
              <h1 className="s_title relative w-full font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] text-center flex items-start justify-center ">
                <span className="animate-text -mb-1.5 -mt-6 overflow-hidden align-bottom flex flex-col">
                  <span className="translate-y-full pb-1.5 pt-6 will-change-transform text-primary hidden animatingText">
                    Web&nbsp;
                  </span>
                  <span className="translate-y-full pb-1.5 pt-6 will-change-transform text-primary hidden animatingText">
                    App&nbsp;
                  </span>
                  <span className="translate-y-full pb-1.5 pt-6 will-change-transform text-primary hidden animatingText">
                    UI&nbsp;
                  </span>
                  <span className="translate-y-full pb-1.5 pt-6 will-change-transform text-primary hidden animatingText">
                    UX&nbsp;
                </span>
                  </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    Solution?
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* \\\ STEP ONE SECTION */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <div className="panel stepOne px-5 lg:px-0 h-screen w-screen flex items-center justify-center relative">
            <div className="h_container  flex flex-col   px-2 py-16 text-white">
              <h2 className="stepOneTitle  relative w-full font-semibold text-3xl leading-[43px] lg:text-[64px] lg:leading-[80px] text-center ">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    01
                  </span>
                </span>
              </h2>
              <h2 className="stepOneTitle  relative w-full font-semibold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] text-center ">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    Concept&nbsp;
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    to&nbsp;
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    blueprint
                  </span>
                </span>
              </h2>
              <h4 className="stepOneTitle relative w-full font-saira text-xl leading-[31px] lg:text-4xl lg:tracking-[-2.16px] lg:leading-[57px] text-center mt-6">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    Transforming ideas into Concrete Wireframes, Setting
                    the&nbsp;
                  </span>
                </span>
                <br />
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    Foundation for Your Vision.
                  </span>
                </span>
              </h4>
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* \\\ STEP ONE ILLUSTRATION SECTION */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <div className="panel blueprints h-screen w-screen flex items-center justify-center relative">
            <div className="blueprints flex items-center justify-center gap-20">
              <img
                src="/images/prototype1.png"
                alt="prototype"
                className="prototype translate-y-10 max-w-[250px] opacity-0"
              />
              <img
                src="/images/prototype2.png"
                alt="prototype"
                className="prototype translate-y-10 max-w-[250px] opacity-0"
              />
              <img
                src="/images/prototype3.png"
                alt="prototype"
                className="prototype translate-y-10 max-w-[250px] opacity-0"
              />
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* \\\ STEP TWO SECTION */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <div className="stepTwo panel h-screen w-screen flex items-center justify-center relative px-5 xl:px-0">
            <div className="h_container  flex flex-col   px-2 py-16">
              <h2 className="stepOneTitle  relative w-full font-semibold text-3xl leading-[43px] lg:text-[64px] lg:leading-[80px] text-center">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    02
                  </span>
                </span>
              </h2>
              <h2 className="stepOneTitle  relative w-full  font-semibold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px]  text-center ">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    Wireframe&nbsp;
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    to&nbsp;
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    wow
                  </span>
                </span>
              </h2>
              <h4 className="stepOneTitle relative w-full font-saira text-xl leading-[31px] lg:text-4xl lg:tracking-[-2.16px] lg:leading-[57px] text-center mt-6">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Elevating Wireframes into Intuitive UI/UX Designs,&nbsp;
                  </span>
                </span>
                <br />
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                  Breathing Life into Your Concept.
                  </span>
                </span>
              </h4>
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* \\\ STEP TWO IMAGES SECTION */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <div className="stepTwoImgs panel h-screen w-screen flex items-center justify-center relative">
            <div className="blueprints flex items-center justify-center gap-20">
              <img
                src="/images/stepTwo1.png"
                alt="stepTwoImg"
                className="stepTwoImg translate-y-10 max-w-[250px]"
              />
              <img
                src="/images/stepTwo2.png"
                alt="stepTwoImg"
                className="stepTwoImg translate-y-10 max-w-[250px]"
              />
              <img
                src="/images/stepTwo3.png"
                alt="stepTwoImg"
                className="stepTwoImg translate-y-10 max-w-[250px]"
              />
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          {/* \\\ STARTUPS SECTION */}
          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <div className="startups panel h-full xl:h-screen xl:flex xl:items-center xl:justify-center max-w-7xl mx-auto relative px-5 xl:px-0">
            <div className="">
              <h2 className="text-white font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] mt-16">
                We run startups that helps thousands
              </h2>
              <h6 className="mt-4 xl:mt-8 text-lg xl:text-2xl font-saira max-w-4xl text-white">
                Empowering Solutions Through In-house Startup Ventures. We
                Ideate and create amazing tech products for solving user
                problems
              </h6>
              <div className="startup-container flex flex-col py-16">
                {Startups.map((startup) => (
                  <div
                    className={`startup  grid grid-cols-1 xl:grid-cols-5 gap-y-4 xl:gap-5 items-center justify-start py-6 px-4 xl:p-10 hover:cursor-pointer relative ${
                      startup.id === 1 ? "border-y-2" : "border-b-2"
                    } border-white border-opacity-20 hover:bg-white hover:bg-opacity-5`}
                    key={startup.id}
                  >
                    <div className="img-wrapper"><img src={`/startups/${startup.image}`} alt="startup img" /></div>
                    <h3 className="text-48 col-span-2">{startup.title}</h3>
                    <p className="text-18 col-span-2">{startup.desc}</p>
                    <div className="flex items-center justify-start xl:justify-end">
                      <TopRightArrow />
                    </div>
                  </div>
                ))}
                {/* <img src="images/saavPopup.png" alt="product image" ref={saavPopup} className="w-[350px] startup-popup"/> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ WORKS SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="works panel bg-offWhite">
        <div className="max-w-7xl mx-auto py-20 px-5 xl:px-0">
          <div className="flex flex-col xl:flex-row items-center justify-between text-offBlack">
            <h2 className=" font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] !text-offBlack w-full max-w-4xl">
              You might love what we built to our clients
            </h2>
            <div className=" items-center justify-end gap-3 w-full xl:w-fit hidden xl:flex">
              <p className="text-4xl text-right">See All</p>
              <RightArrow />
            </div>
          </div>
          <div className="works flex flex-col gap-4 lg:gap-6 mt-8 xl:mt-16">
            <div className="grid xl:grid-cols-5 gap-4 lg:gap-6 xl:h-[480px]">
              <div className="work1 xl:col-span-3 cursor-pointer ">
                <img src="works/exphone-tn.png" alt="works"  className="rounded-xl lg:rounded-2xl"/>
              </div>
              <div className="work1 xl:col-span-2 cursor-pointer ">
                <img src="works/tripzigo-mobile.png" alt="works" className="xl:hidden rounded-xl lg:rounded-2xl" />
                <img src="works/tripzigo-tn.png" alt="works" className="hidden xl:block rounded-xl lg:rounded-2xl" />
              </div>
            </div>
            <div className="gridTrigger grid xl:grid-cols-5 gap-4 lg:gap-6 xl:h-[480px]">
              <div className="work1 xl:col-span-2 cursor-pointer ">
                <img src="works/themesunited-mobile1.png" alt="works"  className="xl:hidden rounded-xl lg:rounded-2xl"/>
                <img src="works/themesunited-tn.png" alt="works"  className="hidden xl:block rounded-xl lg:rounded-2xl"/>
              </div>
              <div className="work1 xl:col-span-3 cursor-pointer ">
                <img src="works/stewarts-tn.png" alt="works"  className="rounded-xl lg:rounded-2xl"/>
              </div>
            </div>        
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
          <div className="testimonials panel py-14 xl:py-24 w-screen h-full max-w-7xl mx-auto px-5 xl:px-0">
            <h2 className="font-saira text-lg xl:text-2xl font-medium text-white">
              Trusted and Loved: Hear from Our Clients
            </h2>
            {/* <h2 className="text-title-64 w-full max-w-4xl">
              Trusted and Loved: <br/>Hear from Our Clients
            </h2> */}
            <div className="reviews mt-10">
              <div className=" review flex items-center justify-between gap-5  lg:gap-32 py-20 lg:py-40 border-y-2 border-white border-opacity-10">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <img src="icons/quote.svg" alt="quote" className="w-10 h-10 lg:w-auto lg:h-auto" />
                  <div className="text-white">

                  <h4 className="text-48">Their creative approach to web design gave my business a fresh online identity.</h4>
                  <h6 className="mt-10 lg:mt-16 font-saira text-lg lg:text-2xl font-medium tracking-tight">Tom hales</h6>
                  <p className="opacity-70 mt-3 lg:mt-4 text-sm lg:textt-base font-saira">Tech Entrepreneur</p>
                  <p className="opacity-70 mt-1 lg:mt-2 text-sm lg:textt-base font-saira">Tripzigo</p>
                  </div>
                </div>
                <div className="flex gap-2 lg:gap-4 items-center">
                  <div className="h-full w-8 flex items-center justify-center">
                    <img src="icons/leftSolidArrow.png" alt="current" className="w-5 lg:w-8 h-5 lg:h-8"/>
                    <h1 className="opacity-0">p</h1>
                  </div>
                <div className="review-profiles flex flex-col gap-4 lg:gap-8">
                  <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey"><img src="images/testimony1.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey"><img src="images/testimony2.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey"><img src="images/testimony3.png" alt="user" className="w-full h-full bg-cover"/></div>
                </div>
                </div>
              </div>
              <div className=" review flex items-center justify-between gap-5 lg:gap-32 py-20 lg:py-40 border-y-2 border-white border-opacity-10">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <img src="icons/quote.svg" alt="quote" className="w-10 h-10 lg:w-auto lg:h-auto" />
                  <div className="text-white">

                  <h4 className="text-48">The app they built for me exceeded my expectations in every way.</h4>
                  <h6 className="mt-10 lg:mt-16 font-saira text-lg lg:text-2xl font-medium tracking-tight">mohd salih</h6>
                  <p className="opacity-70 mt-3 lg:mt-4 text-sm lg:textt-base font-saira">Tech Entrepreneur</p>
                  <p className="opacity-70 mt-1 lg:mt-2 text-sm lg:textt-base font-saira">Themes</p>
                  </div>
                </div>
                <div className="flex gap-2 lg:gap-4 items-center">
                  <div className="h-full w-8 flex items-center justify-center">
                    <img src="icons/leftSolidArrow.png" alt="current" className="w-5 lg:w-8 h-5 lg:h-8"/>
                    <h1 className="opacity-0">p</h1>
                  </div>
                <div className="flex flex-col gap-4 lg:gap-8">
                  <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey"><img src="images/testimony1.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey"><img src="images/testimony2.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-12 lg:w-28 h-12 lg:h-28 rounded-full bg-grey"><img src="images/testimony3.png" alt="user" className="w-full h-full bg-cover"/></div>
                </div>
                </div>
              </div>
            </div>
          </div>


          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ CTA SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="cta px-5 lg:px-0 panel pt-24 w-screen h-screen max-w-7xl mx-auto">
            <div className="bg-primary w-full flex flex-col items-center justify-center gap-16 px-6 py-10 lg:p-20 rounded-b-[128px]">
              <div className="flex items-center justify-center gap-5 lg:gap-14 w-full">
                <div className="flex-1 w-full h-[1px] bg-grey bg-opacity-50" />
                <div className="stars flex items-center gap-6">
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8"/>
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8"/>
                  <img src="icons/star.svg" alt="star" className="w-6 lg:w-8"/>
                </div>
                <div className="flex-1 w-full h-[1px] bg-grey bg-opacity-50" />
              </div>
              <h2 className="text-center font-bold text-4xl lg:text-[90px] lg:leading-[96px] max-w-4xl">
                Let&apos;s Grow Your Digital Presence!
              </h2>
              <div className="cta-buttons flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                <button className="py-3 lg:py-4 px-10 bg-offBlack text-primary rounded-btn text-lg lg:text-2xl border border-offBlack w-full lg:w-auto">
                  Get a Quote
                </button>
                <button
                  className="py-3 lg:py-4 px-10  bg-primary text-offBlack border border-offBlack rounded-btn text-lg lg:text-2xl w-full lg:w-auto"
                >
                  Talk To Us
                </button>
              </div>
            </div>

            <footer>
              <div className="flex flex-col items-center justify-center mt-10 lg:mt-20 w-full">
                <h1 className="text-primary text-3xl lg:text-5xl font-bold">Pagein</h1>
                <div className="flex justify-between items-center w-full text-primary  mt-8 lg:mt-16">
                  <h6 className="text-sm lg:text-xl font-normal">TERMS AND CONDITION</h6>
                  <h6 className="text-sm lg:text-xl">@2023 PAGEIN ALL RIGHTS RESERVED</h6>
                  <h6 className="text-sm lg:text-xl">PRIVACY POLICY</h6>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
