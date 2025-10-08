// src/animations/gsapAnimations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initGsapAnimations = (mainRef) => {
  const scroller = mainRef.current;

  // --- top logo initial entrance (small fixed logo) ---
  // Make sure it's initially small/transparent to animate in nicely
  gsap.set("#topLogo img", { scale: 0.8, opacity: 0 });
  gsap.to("#topLogo img", { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.15 });

  // --- top logo scroll trigger (when page2 enters) ---
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller,
      start: "top 10%",
      end: "top -5%",
      scrub: 1.5,
    },
  }).fromTo("#topLogo img",
    { scale: 2, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" }
  );

  // === example per-section animations ===
  gsap.from("#bg-video img", { z: 100, opacity: 0, delay: 0.5, duration: 0.9, scale: 3 });

  const page2TL = gsap.timeline({
    scrollTrigger: { trigger: "#page2", scroller, start: "top 10%", end: "top -5%", scrub: 1.5 },
  });
  page2TL.from("#page2 h1", { y: 50, opacity: 0, duration: 0.6, stagger: 0.06 });
  page2TL.from("#page2-part2 p", { y: 40, opacity: 0, duration: 0.5, stagger: 0.05 }, "-=0.2");

  // page4 example
  gsap.timeline({
    scrollTrigger: { trigger: "#page4", scroller, start: "top 10%", end: "top -5%", scrub: 1.2 },
  })
    .from("#page4-part1 h1", { x: -100, opacity: 0, duration: 0.6 })
    .from("#page4-part1 p", { x: 100, opacity: 0, duration: 0.6 }, "-=0.35");

  // logos line auto-scroll
  gsap.to("#line1", { xPercent: -50, duration: 50, repeat: -1, ease: "none" });

  // final: page 11 reveal
  gsap.from("#page11 p", {
    scrollTrigger: { trigger: "#page11", scroller, start: "top 50%", end: "top 50%", scrub: 1 },
    y: 100,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
  });

  // return cleanup
  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf("*");
  };
};
