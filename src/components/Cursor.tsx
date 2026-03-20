import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let hoverActive = false;

    // High performance setter for x and y
    const xSetter = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3.out" });
    const ySetter = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!hoverActive) {
        xSetter(e.clientX);
        ySetter(e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.closest("[data-cursor]") as HTMLElement;
      if (!element) return;

      const rect = element.getBoundingClientRect();

      if (element.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        xSetter(rect.left);
        ySetter(rect.top);
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hoverActive = true;
      }

      if (element.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.closest("[data-cursor]") as HTMLElement;
      if (!element) return;

      cursor.classList.remove("cursor-disable", "cursor-icons");
      hoverActive = false;
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
