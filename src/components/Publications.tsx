import { useEffect, useRef } from "react";
import "./styles/Publications.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Publications = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const setCardRef = (el: HTMLDivElement | null, index: number) => {
        cardRefs.current[index] = el;
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (titleRef.current) {
                gsap.fromTo(
                    titleRef.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            if (subtitleRef.current) {
                gsap.fromTo(
                    subtitleRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            cardRefs.current.forEach((card, i) => {
                if (card) {
                    gsap.fromTo(
                        card,
                        { opacity: 0, y: 50, scale: 0.95 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: "back.out(1.5)",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 90%",
                            },
                            delay: i * 0.2,
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="publications-section section-container"
            id="publications"
            ref={sectionRef}
        >
            <div className="publications-container">
                <h2 ref={titleRef}>
                    Publications <span>&</span>
                    <br /> Certifications
                </h2>

                <p className="publications-subtitle" ref={subtitleRef}>
                    Research, recognition, and certifications that reflect technical depth
                    and continuous learning.
                </p>

                <div className="publications-grid">
                    <div className="pub-card" ref={(el) => setCardRef(el, 0)}>
                        <div className="pub-card-inner">
                            <div className="pub-header">
                                <span className="pub-category">Publication</span>
                            </div>

                            <div className="pub-content">
                                <h3>Published Research Paper</h3>
                                <h4>
                                    Android Application for Visually Impaired People Based on AI
                                    Technology
                                </h4>
                                <p className="pub-meta">IRJMETS &bull; 2022</p>
                                <p className="pub-description">
                                    Published a research paper on an AI based Android application
                                    designed to assist visually impaired users through intelligent
                                    accessibility focused technology.
                                </p>
                            </div>

                            <a
                                href="https://www.irjmets.com/uploadedfiles/paper/issue_4_april_2022/21019/final/fin_irjmets1650450047.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pub-cta"
                            >
                                View Paper
                            </a>

                            <div className="pub-corner"></div>
                        </div>
                    </div>

                    <div className="pub-card" ref={(el) => setCardRef(el, 1)}>
                        <div className="pub-card-inner">
                            <div className="pub-header">
                                <span className="pub-category">Recognition</span>
                            </div>

                            <div className="pub-content">
                                <h3>High Five Award</h3>
                                <h4>Performance Recognition</h4>
                                <p className="pub-meta">Persistent Systems</p>
                                <p className="pub-description">
                                    Recognized for strong performance and contribution to
                                    enterprise API integration and software engineering work.
                                </p>
                            </div>

                            <div className="pub-corner"></div>
                        </div>
                    </div>

                    <div className="pub-card" ref={(el) => setCardRef(el, 2)}>
                        <div className="pub-card-inner">
                            <div className="pub-header">
                                <span className="pub-category">Certification</span>
                            </div>

                            <div className="pub-content">
                                <h3>Technical Certifications</h3>
                                <h4>Professional Learning & Credentials</h4>
                                <p className="pub-meta">Microsoft &bull; Coursera &bull; HackerRank</p>

                                <div className="pub-credentials-list">
                                    <a
                                        href="https://www.credly.com/badges/1bbc634b-786a-4ad5-a55a-c6377a88e602/linked_in_profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pub-credential-item"
                                    >
                                        <div className="pub-credential-name">
                                            Microsoft Certified: Azure Fundamentals
                                        </div>
                                        <div className="pub-credential-details">
                                            <span>Microsoft</span>
                                            <span className="pub-dot">&bull;</span>
                                            <span>2022</span>
                                        </div>
                                    </a>

                                    <div className="pub-credential-item">
                                        <div className="pub-credential-name">
                                            Python for Everybody Specialization
                                        </div>
                                        <div className="pub-credential-details">
                                            <span>Coursera</span>
                                            <span className="pub-dot">&bull;</span>
                                            <span>2020</span>
                                        </div>
                                    </div>

                                    <div className="pub-credential-item">
                                        <div className="pub-credential-name">
                                            Python Basic Certificate
                                        </div>
                                        <div className="pub-credential-details">
                                            <span>HackerRank</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pub-corner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publications;