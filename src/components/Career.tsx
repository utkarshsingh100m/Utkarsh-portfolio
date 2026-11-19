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
                <h4>B.Tech Student</h4>
                <h5>Engineering College</h5>
              </div>
              <h3>2025 - 2029</h3>
            </div>
            <p>
              Pursuing my B.Tech degree in Computer Science, diving deep into
              data structures, algorithms, and software engineering
              fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2016 - NOW</h3>
            </div>
            <p>
              Taking on freelance web development projects, building full-stack
              applications for clients while sharpening React, Node.js and
              database skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack AI Developer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-powered fullstack applications, contributing to open
              source, and actively seeking exciting opportunities in the AI and
              web development space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
