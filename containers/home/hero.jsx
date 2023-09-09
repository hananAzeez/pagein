/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import Observer from "gsap/dist/Observer";
import TopRightArrow from './../../components/icons/icons';
import RightArrow from './../../components/icons/rightArrow';
import { Startups } from "../../utils/startups";

gsap.registerPlugin(CustomEase, ScrollTrigger);
gsap.registerPlugin(Observer);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Hero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);

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



    // let sections = gsap.utils.toArray('.scrollSection');
    const hero = document.querySelector('.hero')
    const heroHeight = document.querySelector('.hero').scrollHeight
    const containerHeight = document.querySelector('.section-container').scrollHeight

    gsap.to(hero, {
      ease: 'none',
      scrollTrigger: {
        trigger: ".hero",
        pin: true,
        scrub: true,
        snap: 2,
        pinSpacer: false,
        pinSpacing: false,
        end: "+=100%",
      }
    })

    // scroll smoother

    // const smoother = ScrollSmoother.create({
    //   content: ".services",
    //   smooth: 3,
    //   effects: true,
    // });

    // smoother.effects("h1", { speed: "auto" });

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

    // HORIZONTAL SCROLL

//     const steps = document.querySelector(".steps");
// console.log(steps.offsetWidth)

// function getScrollAmount() {
// 	let stepsWidth = steps.scrollWidth;
// 	return -(stepsWidth - window.innerWidth);
// }

// const tween = gsap.to(steps, {
// 	x: getScrollAmount,
// 	duration: 3,
// 	ease: "none",
// });


// ScrollTrigger.create({
// 	trigger:".services",
// 	start:"top",
// 	end: () => `+=${getScrollAmount() * -1}`,
// 	pin:true,
// 	animation:tween,
// 	scrub:1,
// 	invalidateOnRefresh:true,
// })

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
    const heroLeft = document.querySelector(".heroLeft");
    const heroRight = document.querySelector(".heroRight");

    gsap.to(heroLeft, {
      x: -300, // Adjust the distance you want to move
      duration: 2,
      ease: 'power1.inOut', // Adjust the easing function
      scrollTrigger: {
        trigger: '.hero-container', // Use a class or ID for the trigger container
        start: 'top center', // Adjust the start position
        end: 'bottom center', // Adjust the end position
        scrub: true, // Enable scrubbing for smooth animation
      },
    });

    // Create a ScrollTrigger for heroRight to move it to the right
    gsap.to(heroRight, {
      x: 300, // Adjust the distance you want to move
      duration: 2,
      ease: 'power1.inOut', // Adjust the easing function
      scrollTrigger: {
        trigger: '.hero-container', // Use the same trigger container
        start: 'top center', // Adjust the start position
        end: 'bottom center', // Adjust the end position
        scrub: true, // Enable scrubbing for smooth animation
      },
    });

    // BLUEPRINTS SECTION

    function setupScrollAnimation() {
      // Select the blueprints container
      const blueprints = document.querySelector('.blueprints');
    
      // Select the individual prototype images
      const prototype = document.querySelectorAll('.prototype');
    
      ScrollTrigger.create({
        	trigger:".blueprint",
        	start:"top",
        	end: "bottom",
        	pin:true,
        	scrub:1,
        	invalidateOnRefresh:true,
        })

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
    setupScrollAnimation()

    return () => {};
  }, []);
  return (
    <div className="section-container">
      <section className="hero mx-auto px-28 bg-offWhite h-screen py-8 scrollSection z-auto">
            <header className="w-full px-10 py-4 flex justify-between items-center bg-white rounded-xl bg">
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
                    <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform highlight">
                      Web
                    </span>
                  </span>
                  <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                    <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                      &nbsp;Solutions
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
                <div className="heroLeft h-full col-span-2 rounded-3xl">
                  <img src="/images/hero-img-1.png" alt="" />
                </div>
                <div className="heroRight h-full w-full bg-offBlack rounded-3xl"></div>
              </div>
            </div>
      </section>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\ SERVICES SECTION */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <section className="services bg-black relative overflow-hidden scrollSection z-50">
            <div className="circ circ1 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72"></div>
            <div className="circ circ2 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[600px]"></div>
            <div className="circ circ3 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[1000px]"></div>
            <div className="circ circ4 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[1700px]"></div>
            <div className="circ circ5 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[2400px]"></div>
            <div className="circ circ6 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[3100px]"></div>
            <div className="circ circ7 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72 top-[3800px]"></div>
            <div className="circ circ8 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[4500px]"></div>
            <div className="steps h-full w-fit  bg-darkBg backdrop-blur-sm z-100 bg z-50
            ">
              <div className="h-screen w-screen flex items-center justify-center">
                <div className="h_container flex flex-col   px-2 py-16">
                  <h1 className="s_title  relative w-full text-title-64  ">
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
                  <h1 className="s_title relative w-full text-title-64 text-center flex items-start justify-center">
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

              <div className="h-screen w-screen flex items-center justify-center relative">
                <starShape />
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

              <div className="blueprints h-screen w-screen flex items-center justify-center relative">
                <div className="blueprints flex items-center justify-center gap-20">
                  <img src="/images/prototype1.png" alt="prototype" className="prototype translate-y-10 max-w-[250px] opacity-0"/>
                  <img src="/images/prototype2.png" alt="prototype" className="prototype translate-y-10 max-w-[250px] opacity-0"/>
                  <img src="/images/prototype3.png" alt="prototype" className="prototype translate-y-10 max-w-[250px] opacity-0"/>
                </div>
              </div>


              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
              {/* \\\ STARTUPS SECTION */}
              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

              <div className="startups h-full xl:h-screen xl:flex xl:items-center xl:justify-center max-w-7xl mx-auto relative">
                <div className="">
                  <h2 className="text-title-64 mt-16">We run startups that helps thousands</h2>
                  <h6 className="mt-8 text-2xl font-saira max-w-4xl text-white">Empowering Solutions Through In-house Startup Ventures. We Ideate and create amazing tech products for solving user problems</h6>
                  <div className="startup-container flex flex-col py-16">
                    {Startups.map(startup => (
                    <div className={`grid grid-cols-5 gap-5 items-center justify-start p-10 hover:cursor-pointer ${startup.id === 1 ? 'border-y-2' : 'border-b-2'} border-white border-opacity-20 hover:bg-white hover:bg-opacity-5`} key={startup.id}>
                      <h3 className="text-48 col-span-2">{startup.title}</h3>
                      <p className="text-18 col-span-2">{startup.desc}</p>
                      <div className="flex items-center justify-end">
                      <TopRightArrow />
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

      </section>


            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
              {/* \\\ WORKS SECTION */}
              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

              <section className="bg-offWhite">
                <div className="max-w-7xl mx-auto py-20">
                <div className="flex items-center justify-between text-offBlack">
                <h2 className="text-title-64 !text-offBlack w-full max-w-4xl">You might love what we built to our clients</h2>
                <div className="flex items-center justify-end gap-3 w-fit">
                <p className="text-4xl">See All</p>
                <RightArrow />
                </div>
                </div>
                <div className="works flex flex-col gap-6">
                  <div className="grid grid-cols-5 gap-6 h-[480px]">
                    <div className="work1 col-span-3"><img src="works/" alt="works" /></div>
                    <div className="work1 col-span-2"><img src="works/" alt="works" /></div>
                  </div>
                  <div className="grid grid-cols-5 gap-6 h-[480px]">
                    <div className="work1 col-span-2"><img src="works/" alt="works" /></div>
                    <div className="work1 col-span-3"><img src="works/" alt="works" /></div>
                  </div>
                </div>
                </div>
              </section>
    </div>
  );
};

export default Hero;
