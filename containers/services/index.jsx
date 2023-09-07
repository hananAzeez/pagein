import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Services = () => {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    const circ1 = document.querySelector(".circ1");
    const circ2 = document.querySelector(".circ2");

    gsap.to(circ1, {
      x: 300,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".circ1",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    gsap.to(circ2, {
      x: -300,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".circ2",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // TITLE ANIMATION

    const titles = document.querySelectorAll(".s_title");
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
    <section className="bg-black relative" ref={scroller}>
      <div className="circ1 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-72"></div>
      <div className="circ2 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-72 top-[600px]"></div>
      <div className="h-screen w-full flex items-center justify-center bg-darkBg backdrop-blur-sm">
        <div className="h_container font_apoc flex flex-col   px-2 py-16">
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
          <h1 className="s_title relative w-full text-title-64 text-center">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform text-primary">
                Web&nbsp;
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
    </section>
  );
};

export default Services;
