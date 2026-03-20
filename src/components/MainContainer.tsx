import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Education from "./Education";
import Publications from "./Publications";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    setSplitText();
  }, []);

  useEffect(() => {
    let resizeTimeout: number | undefined;

    const resizeHandler = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = window.setTimeout(() => {
        const nextIsDesktop = window.innerWidth > 1024;
        setIsDesktopView((prev) => {
          if (prev !== nextIsDesktop) {
            return nextIsDesktop;
          }
          return prev;
        });
      }, 150);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Education />
            <Work />
            <Publications />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;