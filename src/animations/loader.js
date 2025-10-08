// src/animations/loader.js
import gsap from "gsap";

export function runLoaderAnimation() {
  return new Promise((resolve) => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // pop-in logo
    tl.from("#loaderLogo", { scale: 0, opacity: 0, duration: 0.7 });
    tl.to("#loaderLogo", { scale: 1.12, duration: 0.45 });

    // short hold
    tl.to({}, { duration: 0.4 });

    // slide up entire loader and fade
    tl.to("#loader", { yPercent: -100, opacity: 0, duration: 0.8, onComplete: () => {
      // remove loader node from DOM (optional) — but we'll let App unmount it
      resolve();
    }});

    // small safety: if loader elements not present, resolve quickly
    setTimeout(() => {
      const loader = document.getElementById("loader");
      if (!loader) resolve();
    }, 2000);
  });
}
