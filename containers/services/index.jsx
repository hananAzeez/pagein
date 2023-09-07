import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    const circ1 = document.querySelector(".circ1");
    const circ2 = document.querySelector(".circ2");

    gsap.to(".circ1", {
      x: 208,
      duration: 1,
      scrollTrigger: ".circ1",
    });

    gsap.to(".circ2", {
      x: -208,
      duration: 1,
      scrollTrigger: ".circ2",
    });
  }, []);

  return (
    <section className="bg-black relative" ref={scroller}>
      <div className="circ1 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -left-52"></div>
      <div className="circ2 w-80 h-80 rounded-full bg-primary bg-opacity-60 blur-[120px] absolute -right-52 top-[500px]"></div>
      <div className="h-screen w-full flex items-center justify-center bg-darkBg backdrop-blur-sm">
        <h2 className="title text-title-64 max-w-3xl text-center" ref={skills}>
          Are you looking for a web solution?
        </h2>
      </div>
    </section>
  );
};

export default Services;
