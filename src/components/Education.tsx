import { useEffect, useRef, useState } from "react";
import "./styles/Education.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  const isMobile = () => window.innerWidth <= 768;

  const handleCardClick = (index: number) => {
    if (!isMobile()) return;
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const mobile = isMobile();

    if (mobile) {
      if (titleRef.current) {
        gsap.set(titleRef.current, { autoAlpha: 1, y: 0, clearProps: "all" });
      }

      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { autoAlpha: 1, y: 0, scale: 1, clearProps: "all" });
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return;
    }

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    const onResize = () => {
      if (!isMobile()) {
        setActiveIndex(null);
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="education-section section-container"
      id="education"
      ref={sectionRef}
    >
      <div className="education-container">
        <h2 ref={titleRef}>
          My <span>Education</span>
        </h2>

        <div className="education-cards">
          <div
            className={`education-card ${activeIndex === 0 ? "education-active" : ""}`}
            ref={(el) => setCardRef(el, 0)}
            onClick={() => handleCardClick(0)}
          >
            <div className="education-card-inner">
              <div className="education-header">
                <h3>University of Southern California</h3>
                <div className="education-date">
                  Expected <span>May 2027</span>
                </div>
              </div>

              <h4>Master of Science in Computer Science</h4>
              <p className="education-location">Los Angeles, California</p>

              <div className="education-extra">
                <p className="education-intro">
                  Computer Science graduate student focused on AI, machine
                  learning, NLP, and scalable software systems, with strong
                  interest in applied research and production grade engineering.
                </p>

                <p className="education-gpa">GPA: 3.65/4.0</p>

                <h5>RELEVANT COURSES</h5>

                <div className="education-course-tags">
                  <span>Analysis of Algorithms</span>
                  <span>Machine Learning for Data Science</span>
                  <span>Advanced Natural Language Processing</span>
                  <span>Database Systems</span>
                  <span>Applied Data Science</span>
                </div>
              </div>
            </div>

            <div className="edu-arrow"></div>
            <div className="edu-corner"></div>
          </div>

          <div
            className={`education-card ${activeIndex === 1 ? "education-active" : ""}`}
            ref={(el) => setCardRef(el, 1)}
            onClick={() => handleCardClick(1)}
          >
            <div className="education-card-inner">
              <div className="education-header">
                <h3>Savitribai Phule Pune University</h3>
                <div className="education-date">
                  Graduated <span>2022</span>
                </div>
              </div>

              <h4>Bachelor of Engineering in Computer Engineering</h4>
              <p className="education-location">Pune, India</p>

              <div className="education-extra">
                <p className="education-intro">
                  Built a strong foundation in computer engineering through core
                  coursework in algorithms, systems, software engineering,
                  databases, AI, analytics, and human centered computing.
                </p>

                <p className="education-gpa">CGPA: 9.51/10</p>
                <p className="education-distinction">
                  First Class with Distinction
                </p>

                <h5>RELEVANT COURSES</h5>

                <div className="education-course-tags">
                  <span>Data Structures and Algorithms</span>
                  <span>Database Management Systems</span>
                  <span>Computer Networks</span>
                  <span>Operating Systems</span>
                  <span>Theory of Computation</span>
                  <span>Cyber Security</span>
                  <span>Software Modeling and Design</span>
                  <span>Web Technology</span>
                  <span>Data Analytics</span>
                  <span>Data Mining and Warehousing</span>
                  <span>Artificial Intelligence and Robotics</span>
                  <span>Human Computer Interface</span>
                  <span>Machine Learning</span>
                  <span>Design and Analysis of Algorithms</span>
                  <span>Soft Computing and Optimization Algorithms</span>
                </div>
              </div>
            </div>

            <div className="edu-arrow"></div>
            <div className="edu-corner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;