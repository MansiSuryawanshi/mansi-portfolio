import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Persistent Systems</h5>
              </div>

              <div className="career-years">
                <h3>2022</h3>
                <h3>2025</h3>
              </div>
            </div>
            <p>
              Built production data connectors and backend services at Persistent Systems, helping large scale customer integrations move reliable, analytics ready data across cloud systems. Focused on resilience, performance, and code quality by improving parsing, retry handling, and service reliability in Java Spring Boot and AWS environments. Helped maintain strong uptime and stable ingestion for hundreds of integration workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Persistent Systems</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked on core backend features for connector development, owning parts of the flow from implementation through testing and validation. Improved synchronization logic, strengthened unit test coverage, and fixed performance bottlenecks that were slowing down execution. This role built the foundation for my transition into full time engineering work at Persistent Systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Spark Foundation</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built and evaluated deep learning models for image classification, comparing transfer learning approaches and improving generalization through data augmentation and regularization. Also worked on data cleaning and training analysis, which helped make experimentation more reliable and reduced manual preprocessing effort. This experience gave me my first strong base in applied machine learning and model evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
