import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const StepOne = () => {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    const circ3 = document.querySelector(".circ1");
    const circ4 = document.querySelector(".circ2");

    gsap.to(circ3, {
      x: 300,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".circ3",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    gsap.to(circ4, {
      x: -300,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".circ4",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // TITLE ANIMATION

    const titles = document.querySelectorAll(".stepOneTitle");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
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
  }, []);
  return (
    <section className="services bg-black relative" ref={scroller}>
      <div className="circ3 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72"></div>
      <div className="circ4 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[600px]"></div>
      <div className="h-screen w-full flex items-center justify-center bg-darkBg backdrop-blur-sm">
        <div className="h_container font_apoc flex flex-col   px-2 py-16">
          <h2 className="stepOneTitle  relative w-full text-title-64  text-center">
            01
          </h2>
          <h2 className="stepOneTitle  relative w-full text-title-64  text-center">
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
          <h4 className="stepOneTitle relative w-full text-36 text-center">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                Transforming ideas into Concrete Wireframes, Setting the&nbsp;
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
    </section>
  );
};

export default StepOne;
