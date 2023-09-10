/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import Observer from "gsap/dist/Observer";
import TopRightArrow from "./../../components/icons/icons";
import RightArrow from "./../../components/icons/rightArrow";
import Star from "./../../components/icons/star";
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

    // TITLE ANIMATION

    const servicesTitle = document.querySelectorAll(".s_title");

    servicesTitle.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      gsap.set(el, { y: "100%" });

      // Create a ScrollTrigger for each title element
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

    // asfgdasdfasdfadsf
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

    // agdfs
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

    // page scroll
    // const heroLeft = document.querySelector(".heroLeft");
    // const heroRight = document.querySelector(".heroRight");

    // gsap.to(heroLeft, {
    //   x: -300, // Adjust the distance you want to move
    //   duration: 2,
    //   ease: "power1.inOut", // Adjust the easing function
    //   scrollTrigger: {
    //     trigger: ".hero-container", // Use a class or ID for the trigger container
    //     start: "top center", // Adjust the start position
    //     end: "bottom center", // Adjust the end position
    //     scrub: true, // Enable scrubbing for smooth animation
    //   },
    // });

    // // Create a ScrollTrigger for heroRight to move it to the right
    // gsap.to(heroRight, {
    //   x: 300, // Adjust the distance you want to move
    //   duration: 2,
    //   ease: "power1.inOut", // Adjust the easing function
    //   scrollTrigger: {
    //     trigger: ".hero-container", // Use the same trigger container
    //     start: "top center", // Adjust the start position
    //     end: "bottom center", // Adjust the end position
    //     scrub: true, // Enable scrubbing for smooth animation
    //   },
    // });


    // BLUEPRINTS SECTION

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

    // adf
    // const sections = gsap.utils.toArray('.panel')
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
    ScrollTrigger.create({
      trigger: startups, // Trigger when the hero section is in view
      start: 'top top',
      endTrigger: works, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    ScrollTrigger.create({
      trigger: '.gridTrigger', // Trigger when the hero section is in view
      start: 'center center',
      endTrigger: testimonials, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    ScrollTrigger.create({
      trigger: testimonials, // Trigger when the hero section is in view
      start: 'bottom bottom',
      endTrigger: cta, // End when the steps section is in view
      end: 'top top',
      snap: 1,
      duration: 0.2
    });
    
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

    // MENU
    // setup
    const menuTl = gsap.timeline({ paused: true});
    let path = document.querySelector("path")
    let spanBefore = CSSRulePlugin.getRule("#hamburger span::before");

    gsap.set(spanBefore, { background: "#fff" });
    gsap.set(".menu", { visibility: "hidden"});
    // toggle menu
    function revealMenu() {
      revealMenuItems();
      const hamburger = document.getElementById("hamburger");
      const toggleBtn = document.getElementById("toggle-btn")

      toggleBtn.onclick = function (e) {
        hamburger.classList.toggle("active");
        menuTl.reversed(!menuTl.reversed())
      }
    }
    revealMenu();

    function revealMenuItems() {
      const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const end = "M0, 1005S175,955,500,995s500,5,500,5V0H0Z";

      const power2 = "power2.inOut";
      const power4 = "power4.inOut";

      menuTl.to("#hamburger", {
        duration: 1.25,
        marginTop: "-5px",
        x: -40,
        y: 40,
        ease: power4,
      })

      menuTl.to("#hamburger span", {
        duration: 1,
        background: "#fff",
        ease: power2
      }, "<")

      menuTl.to(spanBefore, {
        duration: 1,
        background: "#fff",
        ease: power2,
      },
      "<"
      )

      menuTl.to(".btn .btn-outline", {
        duration: 1.25,
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid #fff",
        ease: power4,
      },
      "<"
      )

      menuTl.to(path, {
        duration: 0.8,
        attr: {
          d: start,

        },
        ease: power2.easeIn,
      }, "<").to(path, {
        duration: 0.8,
        attr: {
          d: end,
        },
        ease: power2.easeIn,
      })

      menuTl.to(".menu",{
        duration: 1,
        visibility: "visible",
      }, "-=0.5");

      menuTl.to(".menu-item > a",{
        duration: 1,
        top: 0,
        ease: "power3.out",
        // stagger: {
        //   amount: 0.5,
        // }
      },
      "-=1"
      ).reverse();
    }
    // how to reveal

    return () => {};
  }, []);
  return (
    <div className="section-container overflow-x-hidden">
      <section className="hero panel px-5 mx-auto lg:px-28 bg-offWhite h-screen py-8 scrollSection">
        <header className="hidden lg:flex w-full px-10 py-4  justify-between items-center bg-white rounded-xl bg">
          <div className="nav-links flex items-center gap-8">
            <p className="menu-links hover-this">Works</p>
            <p className="menu-links hover-this">Services</p>
          </div>
          <h1 className="text-black text-3xl font-bold">Pagein</h1>
          <div className="nav-links flex items-center gap-8">
            <p className="menu-links">About</p>
            <p className="menu-links">Contact</p>
          </div>
        </header>

        {/* MENU */}
        <div className="btn  absolute top-0 right-0 w-24 h-24 flex justify-center items-center m-[2em] cursor-pointer z-[200]" id="toggle-btn">
          <div className="btn-outline btn-outline-1 bg-[#333]"></div>
          <div id="hamburger">
            <span></span>
          </div>
        </div>
        <div className="overlay z-10">
          <svg viewBox="0 0 1000 1000">
            <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
          </svg>
        </div>
        <div className="menu z-30">
          <div className="primary-menu">
            <div className="menu-container">
              <div className="wrapper">
                <div className="menu-item">
                  <a href="#"><span>I</span>Work</a>
                  <div className="menu-item-revealer"></div>
                </div>

                <div className="menu-item">
                  <a href="#"><span>2</span>Services</a>
                  <div className="menu-item-revealer"></div>
                </div>
                
                <div className="menu-item">
                  <a href="#"><span>3</span>About</a>
                  <div className="menu-item-revealer"></div>
                </div>
                
                <div className="menu-item">
                  <a href="#"><span>4</span>Contact</a>
                  <div className="menu-item-revealer"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="secondary-menu ">
            <div className="menu-container">
              <div className="wrapper">
                <div className="menu-item">
                  <a href="#">pagein@gmail.com</a>
                  <div className="menu-item-revealer"></div>
                </div>
                
                <div className="menu-item">
                  <a href="#">7012679128</a>
                  <div className="menu-item-revealer"></div>
                </div>
                
                <div className="menu-item">
                  <a href="#">Koduvally, kozhikode <br />Kerala 673572</a>
                  <div className="menu-item-revealer"></div>
                </div>

                {/* <div className="wrapper">
                <div className="menu-item">
                  <a href="#">Credits</a>
                  <div className="menu-item-revealer"></div>
                </div>

                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* MENU */}
        <div className="max-w-7xl mx-auto">
          <div className="h_container  flex flex-col   px-2 py-16 ">
          <h1 className="h_title  relative w-full text-black text-[64px] leading-[77px] font-bold tracking-[0.64px]  lg:text-[104px] lg:leading-[117px] lg:tracking-[-1.04px]">
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
            <h1 className="h_title relative flex w-full flex-col items-start lg:items-center  lg:flex-row text-black text-[64px] leading-[77px] font-bold tracking-[0.64px]  lg:text-[104px] lg:leading-[117px] lg:tracking-[-1.04px]">
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
              <div
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
              </div>
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

      <section className="services bg-black relative overflow-hidden scrollSection">
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
              <h1 className="s_title  relative w-full font-semibold text-5xl leading-[58px] lg:text-[64px] lg:leading-[80px] ">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    Are&nbsp;
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                    you
                  </span>
                </span>
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
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
              <h1 className="s_title relative w-full font-semibold text-5xl leading-[58px] lg:text-[64px] lg:leading-[80px] text-center flex items-start justify-center ">
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

          <div className="panel stepOne h-screen w-screen flex items-center justify-center relative">
            <div className="h_container  flex flex-col   px-2 py-16">
              <h2 className="stepOneTitle  relative w-full text-title-64  text-center">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    01
                  </span>
                </span>
              </h2>
              <h2 className="stepOneTitle  relative w-full text-title-64  text-center !font-semibold">
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
              <h4 className="stepOneTitle relative w-full text-36 text-center mt-6">
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

          <div className="stepTwo panel h-screen w-screen flex items-center justify-center relative">
            <div className="h_container  flex flex-col   px-2 py-16">
              <h2 className="stepOneTitle  relative w-full text-title-64  text-center">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                  <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                    02
                  </span>
                </span>
              </h2>
              <h2 className="stepOneTitle  relative w-full text-title-64  text-center !font-semibold">
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
              <h4 className="stepOneTitle relative w-full text-36 text-center mt-6">
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

          <div className="startups panel h-full xl:h-screen xl:flex xl:items-center xl:justify-center max-w-7xl mx-auto relative">
            <div className="">
              <h2 className="text-title-64 mt-16">
                We run startups that helps thousands
              </h2>
              <h6 className="mt-8 text-2xl font-saira max-w-4xl text-white">
                Empowering Solutions Through In-house Startup Ventures. We
                Ideate and create amazing tech products for solving user
                problems
              </h6>
              <div className="startup-container flex flex-col py-16">
                {Startups.map((startup) => (
                  <div
                    className={`grid grid-cols-5 gap-5 items-center justify-start p-10 hover:cursor-pointer ${
                      startup.id === 1 ? "border-y-2" : "border-b-2"
                    } border-white border-opacity-20 hover:bg-white hover:bg-opacity-5`}
                    key={startup.id}
                  >
                    <h3 className="text-48 col-span-2">{startup.title}</h3>
                    <p className="text-18 col-span-2">{startup.desc}</p>
                    <div className="flex items-center justify-end">
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
        <div className="max-w-7xl mx-auto py-20">
          <div className="flex items-center justify-between text-offBlack">
            <h2 className="text-title-64 !text-offBlack w-full max-w-4xl">
              You might love what we built to our clients
            </h2>
            <div className="flex items-center justify-end gap-3 w-fit">
              <p className="text-4xl">See All</p>
              <RightArrow />
            </div>
          </div>
          <div className="works flex flex-col gap-6 mt-16">
            <div className="grid grid-cols-5 gap-6 h-[480px]">
              <div className="work1 col-span-3 cursor-pointer">
                <img src="works/exphone-tn.png" alt="works" />
              </div>
              <div className="work1 col-span-2 cursor-pointer">
                <img src="works/tripzigo-tn.png" alt="works" />
              </div>
            </div>
            <div className="gridTrigger grid grid-cols-5 gap-6 h-[480px]">
              <div className="work1 col-span-2 cursor-pointer">
                <img src="works/themesunited-tn.png" alt="works" />
              </div>
              <div className="work1 col-span-3 cursor-pointer">
                <img src="works/stewarts-tn.png" alt="works" />
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
          <div className="testimonials panel py-24 w-screen h-full max-w-7xl mx-auto">
            <h2 className="font-saira text-2xl font-medium text-white">
              Trusted and Loved: Hear from Our Clients
            </h2>
            {/* <h2 className="text-title-64 w-full max-w-4xl">
              Trusted and Loved: <br/>Hear from Our Clients
            </h2> */}
            <div className="reviews mt-10">
              <div className=" review flex items-center justify-between lg:gap-32 py-40 border-y-2 border-white border-opacity-20">
                <div className="flex gap-10 items-start">
                  <img src="icons/quote.svg" alt="quote" />
                  <div className="text-white">

                  <h4 className="text-48">Their creative approach to web design gave my business a fresh online identity.</h4>
                  <h6 className="mt-16 font-saira text-2xl font-medium tracking-tight">Tom hales</h6>
                  <p className="opacity-70 mt-4 font-saira">Tech Entrepreneur</p>
                  <p className="opacity-70 mt-2 font-saira">Tripzigo</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-full w-8 flex items-center justify-center">
                    <img src="icons/leftSolidArrow.png" alt="current" className="w-8 h-8"/>
                    <h1 className="opacity-0">p</h1>
                  </div>
                <div className="flex flex-col gap-8">
                  <div className="w-28 h-28 rounded-full bg-grey"><img src="images/testimony1.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-28 h-28 rounded-full bg-grey"><img src="images/testimony2.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-28 h-28 rounded-full bg-grey"><img src="images/testimony3.png" alt="user" className="w-full h-full bg-cover"/></div>
                </div>
                </div>
              </div>
              <div className=" review flex items-center justify-between lg:gap-32 py-40 border-b-2 border-white border-opacity-20">
                <div className="flex gap-10 items-start">
                  <img src="icons/quote.svg" alt="quote" />
                  <div className="text-white">

                  <h4 className="text-48">The app they built for me exceeded my expectations in every way.</h4>
                  <h6 className="mt-16 font-saira text-2xl font-medium tracking-tight">mohd salih</h6>
                  <p className="opacity-70 mt-4 font-saira">Tech Entrepreneur</p>
                  <p className="opacity-70 mt-2 font-saira">Themes</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-full w-8 flex items-center justify-center">
                    <img src="icons/leftSolidArrow.png" alt="current" className="w-8 h-8"/>
                    <h1 className="opacity-0">p</h1>
                  </div>
                <div className="flex flex-col gap-8">
                  <div className="w-28 h-28 rounded-full bg-grey"><img src="images/testimony1.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-28 h-28 rounded-full bg-grey"><img src="images/testimony2.png" alt="user" className="w-full h-full bg-cover"/></div>
                  <div className="w-28 h-28 rounded-full bg-grey"><img src="images/testimony3.png" alt="user" className="w-full h-full bg-cover"/></div>
                </div>
                </div>
              </div>
            </div>
          </div>


          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ CTA SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="cta panel pt-24 w-screen h-screen max-w-7xl mx-auto">
            <div className="bg-primary w-full flex flex-col items-center justify-center gap-16 p-20 rounded-b-[128px]">
              <div className="flex items-center justify-center gap-14 w-full">
                <div className="flex-1 w-full h-[1px] bg-grey" />
                <div className="stars flex items-center gap-6">
                  <img src="icons/star.svg" alt="star" />
                  <img src="icons/star.svg" alt="star" />
                  <img src="icons/star.svg" alt="star" />
                </div>
                <div className="flex-1 w-full h-[1px] bg-grey" />
              </div>
              <h2 className="text-center font-bold text-[90px] leading-[96px] max-w-4xl">
                Let&apos;s Grow Your Digital Presence!
              </h2>
              <div className="cta-buttons flex items-center gap-6">
                <button className="py-4 px-10 bg-offBlack text-primary rounded-btn text-2xl">
                  Get a Quote
                </button>
                <button
                  className="py-4 px-10  bg-primary text-offBlack border border-offBlack rounded-btn text-2xl"
                >
                  Talk To Us
                </button>
              </div>
            </div>

            <footer>
              <div className="flex flex-col items-center justify-center mt-20 w-full">
                <h1 className="text-primary text-5xl font-bold">Pagein</h1>
                <div className="flex justify-between items-center w-full text-primary mt-16">
                  <h6 className="text-xl font-normal">TERMS AND CONDITION</h6>
                  <h6 className="text-xl">@2023 PAGEIN ALL RIGHTS RESERVED</h6>
                  <h6 className="text-xl">PRIVACY POLICY</h6>
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
