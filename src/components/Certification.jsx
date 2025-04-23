// src/components/Certification.jsx
import React, { useState } from 'react';
import './Certification.css';
import { FaCertificate } from 'react-icons/fa';

const Certification = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "HTML",
      image: "/images/protfolio/html.jpg", 
      description: "Issued by Great Learning. This course covered basic to Advanced web development.",
    },
    {
      id: 2,
      title: "JavaScript",
      image: "/images/protfolio/javascript.jpg", 
      description: "Issued by Great Learning. Mastered JavaScript fundamentals and advanced topics.",
    },
    {
      id: 3,
      title: "Data-Driven Decision",
      image: "/images/protfolio/decision_page-0001.jpg",
      description: "Issued by Google. Understanding backend development with Node.js.",
    },
    {
      id: 4,
      title: "Data, Data Everywhere",
      image: "/images/protfolio/everywhere_page-0001.jpg",
      description: "Issued by Coursera. This course provides a foundational understanding of data analytics, including how data is collected, analyzed, and used to drive business decisions.",
    },
    {
      id: 5,
      title: "Data For Exploration",
      image: "/images/protfolio/exploration_page-0001.jpg",
      description: "Issued by Coursera. This course introduces techniques to explore, clean, and visualize data using analytical tools to gain meaningful insights and support informed decision-making.",
    },
    {
      id: 6,
      title: "Google Digital Unlocked",
      image: "/images/protfolio/google.jpg",
      description: "Issued by Google. This certification covers the fundamentals of digital marketing, including SEO, SEM, social media, email marketing, and analytics to help grow businesses online.",
    },
    {
      id: 7,
      title: "Microsoft AI Skills Challenge",
      image: "/images/protfolio/microsoft.png",
      description: "Issued by Microsoft. This certification explores foundational AI concepts, machine learning, and responsible AI practices using Microsoft tools and platforms.",
    },
    {
      id: 8,
      title: "Power Programmer Virtual Experience Program",
      image: "/images/protfolio/infosys.jpg",
      description: "Issued by Infosys. This virtual program offers hands-on experience in full-stack development, problem-solving with algorithms, and working with modern technologies used by Power Programmers at Infosys.",
    },
    {
      id: 9,
      title: "Ethical Hacking Essentials",
      image: "/images/protfolio/ethical.png",
      description: "Issued by Codered. This course provides foundational knowledge of ethical hacking concepts, including network security, vulnerability assessment, and penetration testing techniques used to secure systems.",
    },
    {
      id: 10,
      title: "National Intellectual Property Awareness Mission",
      image: "/images/protfolio/ipr.jpg",
      description: "Issued by the Government of India under the DPIIT initiative. This awareness program educates participants on the importance of intellectual property rights (IPR), including patents, trademarks, copyrights, and designs, to foster innovation and creativity.",
    },
  ];

  return (
    <section id="certification">
      <h2>
        <FaCertificate className="cert-icon" />
        Online Certifications
      </h2>

      <div className="certification-container">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="certification-item"
            onClick={() => setSelectedCertification(cert)}
          >
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>

      {selectedCertification && (
        <div className="modal" onClick={() => setSelectedCertification(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedCertification.title}</h3>
            <img
              src={selectedCertification.image}
              alt={selectedCertification.title}
              className="modal-image"
            />
            <p>{selectedCertification.description}</p>
            <button className="close-btn" onClick={() => setSelectedCertification(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;
