import React from 'react';
import { FaTools } from 'react-icons/fa'; 
import './Skills.css';

const skillsData = [
  { name: 'Java', image: '/images/logo/java.png', description: 'Strong OOP concepts and backend development.' },
  { name: 'JavaScript', image: '/images/logo/js.png', description: 'Building dynamic and interactive web applications.' },
  { name: 'ReactJS', image: '/images/logo/react.png', description: 'Building efficient and dynamic UIs with React.' },
  { name: 'Node.js', image: '/images/logo/nodejs.png', description: 'Developing server-side applications with Node.js.' },
  { name: 'MongoDB', image: '/images/logo/mongodb.png', description: 'NoSQL database for scalable applications.' },
  { name: 'SQL', image: '/images/logo/sql.png', description: 'Relational databases and data manipulation.' },
  { name: 'HTML', image: '/images/logo/html.png', description: 'Building structure for web pages.' },
  { name: 'CSS', image: '/images/logo/css.png', description: 'Styling and layout of web pages.' },
  { name: 'Bootstrap', image: '/images/logo/btsp.png', description: 'Responsive and mobile-first front-end framework.' },
  { name: 'Networking', image: '/images/logo/network.png', description: 'Knowledge of network protocols and configurations.' },
  { name: 'Cloud Computing', image: '/images/logo/cloud.png', description: 'Building scalable apps on the cloud.' },
  { name: 'Basic Linux', image: '/images/logo/linux.png', description: 'Understanding of Linux commands and file systems.' },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skills-heading">
    <FaTools className="skills-icon" />
     Skills
    </h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
