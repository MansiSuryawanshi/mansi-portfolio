import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
    const containerRef = useRef<(HTMLDivElement | null)[]>([]);
    const setRef = (el: HTMLDivElement | null, index: number) => {
        containerRef.current[index] = el;
    };
    useEffect(() => {
        let cleanupFunctions: Array<() => void> = [];
        if (ScrollTrigger.isTouch) {
            containerRef.current.forEach((container) => {
                if (container) {
                    container.classList.remove("what-noTouch");
                    const handler = () => handleClick(container);
                    container.addEventListener("click", handler);
                    cleanupFunctions.push(() => {
                        container.removeEventListener("click", handler);
                    });
                }
            });
        }
        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
        };
    }, []);
    return (
        <div className="whatIDO">
            <div className="what-box">
                <h2 className="title">
                    W<span className="hat-h2">HAT</span>
                    <div>
                        I<span className="do-h2"> DO</span>
                    </div>
                </h2>
            </div>
            <div className="what-box">
                <div className="what-box-in">
                    <div className="what-border2">
                        <svg width="100%">
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="100%"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="7,7"
                            />
                            <line
                                x1="100%"
                                y1="0"
                                x2="100%"
                                y2="100%"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="7,7"
                            />
                        </svg>
                    </div>
                    <div
                        className="what-content what-noTouch"
                        ref={(el) => setRef(el, 0)}
                    >
                        <div className="what-border1">
                            <svg height="100%">
                                <line
                                    x1="0"
                                    y1="0"
                                    x2="100%"
                                    y2="0"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="6,6"
                                />
                                <line
                                    x1="0"
                                    y1="100%"
                                    x2="100%"
                                    y2="100%"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="6,6"
                                />
                            </svg>
                        </div>
                        <div className="what-corner"></div>

                        <div className="what-content-in">
                            <h3>AI & ML</h3>
                            <h4>Intelligent Systems and Applied AI</h4>
                            <p>
                                Building intelligent systems with computer vision, NLP, RAG, retrieval, and evidence grounded LLM workflows for real world problems.
                            </p>
                            <h5>Skillset & tools</h5>
                            <div className="what-content-flex">
                                <div className="what-tags">PyTorch</div>
                                <div className="what-tags">TensorFlow</div>
                                <div className="what-tags">YOLO</div>
                                <div className="what-tags">OpenCV</div>
                                <div className="what-tags">RAG</div>
                                <div className="what-tags">LangChain</div>
                                <div className="what-tags">Qdrant</div>
                                <div className="what-tags">NLP</div>
                            </div>
                            <div className="what-arrow"></div>
                        </div>
                    </div>
                    <div
                        className="what-content what-noTouch"
                        ref={(el) => setRef(el, 1)}
                    >
                        <div className="what-border1">
                            <svg height="100%">
                                <line
                                    x1="0"
                                    y1="100%"
                                    x2="100%"
                                    y2="100%"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="6,6"
                                />
                            </svg>
                        </div>
                        <div className="what-corner"></div>
                        <div className="what-content-in">
                            <h3>SYSTEMS</h3>
                            <h4>Scalable Backend and Cloud Systems</h4>
                            <p>
                                Building reliable services, APIs, and cloud based applications designed for scale, performance, and real world deployment.
                            </p>
                            <h5>Skillset & tools</h5>
                            <div className="what-content-flex">
                                <div className="what-tags">Java</div>
                                <div className="what-tags">Spring Boot</div>
                                <div className="what-tags">Python</div>
                                <div className="what-tags">Git</div>
                                <div className="what-tags">AWS</div>
                                <div className="what-tags">SQL</div>
                                <div className="what-tags">REST APIs</div>
                                <div className="what-tags">Docker</div>
                            </div>
                            <div className="what-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
    container.classList.toggle("what-content-active");
    container.classList.remove("what-sibling");
    if (container.parentElement) {
        const siblings = Array.from(container.parentElement.children);

        siblings.forEach((sibling) => {
            if (sibling !== container) {
                sibling.classList.remove("what-content-active");
                sibling.classList.toggle("what-sibling");
            }
        });
    }
}
