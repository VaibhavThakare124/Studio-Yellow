// src/animations/locomotiveSetup.js
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initSmoothScroll = (mainRef) => {
  const mainEl = mainRef.current;
  if (!mainEl) return { cleanupScroll: () => {} };

  const locoScroll = new LocomotiveScroll({
    el: mainEl,
    smooth: true,
  });

  // sync locomotive with ScrollTrigger (v4 usage)
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(mainEl, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: mainEl.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  const cleanupScroll = () => {
    try {
      locoScroll.destroy();
    } catch (e) {
      /* ignore */
    }
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };

  return { cleanupScroll, locoScroll };
};
