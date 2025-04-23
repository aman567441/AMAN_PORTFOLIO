import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
     <h2>
  <FaUserAlt className="about-icon" />
  About Me
</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I’m Aman Kumar, a passionate web developer skilled in both frontend and backend technologies.
            I enjoy building responsive, user-friendly websites and continuously learning new tech.
          </p>

          <div className="about-details">
            <div><strong>Name:</strong> Aman Kumar</div>
            <div><strong>Age:</strong> 22</div>
            <div><strong>Country:</strong> India</div>
            <div><strong>Email:</strong> amankumar926253@gmail.com</div>
            <div><strong>Mobile:</strong> 6202174492</div>
            <div><strong>City:</strong> Noida</div>
            <div><strong>Bachelor Degree:</strong> BCA</div>
            <div><strong>Master Degree:</strong> MCA</div>
          </div>

          <a
            className="resume-btn"
            href="/images/aman_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View Resume
          </a>
        </div>

        <div className="about-image">
          <img src="/images/aman.jpg" alt="Aman Kumar" />
        </div>
      </div>
    </section>
  );
};

export default About;
