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
                <h4>B.Tech in Computer Science</h4>
                <h5>Symbiosis College</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started my B.Tech journey in Computer Science at Symbiosis College. 
              Began learning programming fundamentals, problem solving, and basic web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>Self-Learning & Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Focused on learning web development technologies like HTML, CSS, JavaScript and React. 
              Started building real-world projects to improve development and problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development</h4>
                <h5>Current Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working on projects like a Payment App and a Flight Booking System using Flask. 
              Continuously learning modern technologies and building practical applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
