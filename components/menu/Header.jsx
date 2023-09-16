import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const router = useRouter();
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    // Listening for page changes.
    router.events.on("routeChangeStart", () => {
      setState({ clicked: false, menuName: "Menu" });
    });

    const toggleButton = document.getElementById('toggle-btn-pc');

    gsap.set(toggleButton, { visibility: "hidden"})

          gsap.to(toggleButton, {
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: '.startups',
          start: 'top center',
          scrub: 1, // Scrub the animation as you scroll
        },
        visibility: "visible",
      })

    // Clean up the event listener when the component unmounts.
    return () => {
      router.events.off("routeChangeStart", () => {
        setState({ clicked: false, menuName: "Menu" });
      });
    };
  }, [router]);

  // Toggle menu
  const handleMenu = () => {
    const hamburger = document.getElementById("hamburger")
    disableMenu();
    hamburger.classList.toggle("active");
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="menu-header">
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {/* {state.menuName} */}
                <div className="btn toggle-btn-pc lg:hidden fixed top-0 right-0 w-24 h-24 flex justify-center items-center m-[2em] cursor-pointer z-[200]">
                  <div className="btn-outline btn-outline-1 bg-[#333]"></div>
                  <div id="hamburger" className="hamburger">
                    <span></span>
                  </div>
                 </div>
              </button>
              <button disabled={disabled} onClick={handleMenu}>
                {/* {state.menuName} */}
                <div className="btn hidden toggle-btn-pc fixed top-0 right-0 w-24 h-24 lg:flex justify-center items-center m-[2em] cursor-pointer z-[200]" id="toggle-btn-pc">
                  <div className="btn-outline btn-outline-1 bg-[#333]"></div>
                  <div id="hamburger" className="hamburger">
                    <span></span>
                  </div>
                 </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
