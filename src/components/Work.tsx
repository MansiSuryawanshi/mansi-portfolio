import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Incident Copilot",
    category: "Evidence Grounded Incident Triage Assistant",
    summary: "Built an evidence grounded incident triage assistant that retrieves the most relevant internal knowledge and surfaces citation backed responses for faster issue investigation.",
    extraDetails: [
      "Designed a retrieval pipeline using embeddings, reranking, and Qdrant to improve answer quality and trustworthiness.",
      "Improved top 5 retrieval recall by 17 percent and achieved 89 percent citation coverage.",
      "Built for practical incident support workflows with fast response times."
    ],
    tools: ["RAG", "Qdrant", "LangChain", "Embeddings", "Retrieval Tuning", "Python"],
    metrics: ["17% better recall", "89% citation coverage", "Fast triage workflow"],
    image: "/images/incident.png"
  },
  {
    title: "Blind Assistant App",
    category: "AI Accessibility Assistant",
    summary: "Built a mobile assistant for visually impaired users that detects nearby objects, reads text aloud, and provides real time voice based assistance.",
    extraDetails: [
      "Combined object detection, OCR, and text to speech into one Android experience focused on accessibility and real world usability.",
      "Designed for practical real time response on mobile devices.",
      "This project also led to a published research paper in 2022."
    ],
    tools: ["YOLO", "OCR", "Text to Speech", "Android", "Computer Vision", "TensorFlow Lite"],
    metrics: ["Real time mobile assistance", "Object detection and OCR", "Published project"],
    image: "/images/blind.png"
  },
  {
    title: "Face Recognition Attendance System",
    category: "Computer Vision Automation",
    summary: "Built an automated attendance system that identifies students from camera input and generates attendance records with minimal manual effort.",
    extraDetails: [
      "Reduced classroom attendance time from around 19 minutes to under 1 minute.",
      "Reached about 94 percent identification accuracy under normal conditions.",
      "Added automated CSV logging and email reporting for practical use."
    ],
    tools: ["Python", "OpenCV", "Face Embeddings", "CSV Logging", "Email Alerts"],
    metrics: ["94% accuracy", "< 1 min attendance", "Automated reporting"],
    image: "/images/attendance.png"
  },
];

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">

        <div className="work-header-row">
          <h2>
            Applied AI <span>Work</span>
          </h2>

          <div className="slider-controls">
            <div className="slider-progress-text">
              <span className="current-num">0{currentProject + 1}</span>
              <span className="divider">/</span>
              <span className="total-num">0{projects.length}</span>
            </div>
            <div className="slider-arrows">
              <button
                className="arrow-btn"
                onClick={prevProject}
                aria-label="Previous project"
              >
                <MdArrowBack />
              </button>
              <button
                className="arrow-btn"
                onClick={nextProject}
                aria-label="Next project"
              >
                <MdArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="featured-carousel-wrapper">
          {projects.map((project, index) => {
            const isActive = index === currentProject;
            return (
              <div
                key={index}
                className={`project-slide ${isActive ? 'active' : ''}`}
                aria-hidden={!isActive}
              >
                <div className="slide-split-layout">

                  {/* Left Column: Content */}
                  <div className="slide-content-col">
                    <div className="slide-number">0{index + 1}</div>
                    <h3 className="slide-title">{project.title}</h3>
                    <p className="slide-category">{project.category}</p>

                    <p className="slide-summary">{project.summary}</p>

                    <div className="slide-extra-details">
                      <ul>
                        {project.extraDetails.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="slide-metrics">
                      {project.metrics.map((metric, idx) => (
                        <span key={idx} className="metric-chip">{metric}</span>
                      ))}
                    </div>

                    <div className="slide-tech-stack">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="tech-tag">{tool}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="slide-image-col">
                    <div className="slide-image-wrapper">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

          <div className="progress-dots">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentProject ? 'active' : ''}`}
                onClick={() => setCurrentProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;