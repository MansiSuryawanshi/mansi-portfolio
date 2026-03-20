import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function setSplitText() {
  // HARD STOP for mobile
  if (window.innerWidth <= 900) {
    // Clean up any existing splits if they exist
    document.querySelectorAll(".title, .para").forEach((el: any) => {
      if (el.split) {
        el.split.revert();
      }
      if (el.anim) {
        el.anim.kill();
      }
    });
    return;
  }

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    if (para.anim) {
      para.anim.kill();
      para.split?.revert();
    }

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para,
          start: TriggerStart,
          toggleActions: ToggleAction,
        },
      }
    );
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.kill();
      title.split?.revert();
    }

    title.split = new SplitText(title, {
      type: "chars",
    });

    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title,
          start: TriggerStart,
          toggleActions: ToggleAction,
        },
      }
    );
  });
}