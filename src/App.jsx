// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import { initSmoothScroll } from "./animations/locomotiveSetup";
import { initGsapAnimations } from "./animations/gsapAnimations";
import { runLoaderAnimation } from "./animations/loader";

// Components
import TopLogo from "./assets/top-logo.svg";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
import Page11 from "./components/Page11";
import LastPage from "./components/LastPage";

export default function App() {
  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const cleanupRef = useRef({ cleanupScroll: null, cleanupGsap: null });

  useEffect(() => {
    // run loader animation first (Loader component must be in DOM)
    // when loader finishes, initialize locomotive + GSAP
    let mounted = true;

    const start = async () => {
      try {
        await runLoaderAnimation();
      } catch (e) {
        // proceed in case of any loader error
      }

      if (!mounted) return;

      // hide Loader from DOM
      setIsLoading(false);

      // initialize smooth scroll and animations after loader is removed
      const { cleanupScroll } = initSmoothScroll(mainRef);
      const cleanupGsap = initGsapAnimations(mainRef);

      cleanupRef.current.cleanupScroll = cleanupScroll;
      cleanupRef.current.cleanupGsap = cleanupGsap;
    };

    // start loader after a short setTimeout to ensure DOM paint
    // (so loader is visible before GSAP timeline)
    setTimeout(() => start(), 50);

    return () => {
      mounted = false;
      // clean up
      try { cleanupRef.current.cleanupScroll && cleanupRef.current.cleanupScroll(); } catch {}
      try { cleanupRef.current.cleanupGsap && cleanupRef.current.cleanupGsap(); } catch {}
    };
  }, []);

  return (
    <>
      <Cursor />
      {isLoading && <Loader />}

      <div id="topLogo" className="fixed left-1/2 top-6 z-30 -translate-x-1/2">
        <img src={TopLogo} alt="Top Logo" className="w-16" />
      </div>

      <main id="main" ref={mainRef} data-scroll-container>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <LastPage />
      </main>
    </>
  );
}
