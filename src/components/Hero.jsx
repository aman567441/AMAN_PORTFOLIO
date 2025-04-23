import React, { useEffect, useState } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaInstagram, FaBriefcase } from 'react-icons/fa';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero">
      <img
        src="/images/aman.jpg"
        alt="Aman Kumar"
        className="hero-img"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div
        className="hero-content"
        style={{ transform: `translate(-50%, calc(-50% - ${scrollY * 0.6}px))` }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Aman Kumar, a passionate web developer</p>

        <div className="social-links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer"><FaBriefcase /></a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

        {/* Contact button placed here inside hero-content */}
        <a href="#contact" className="contact-button">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
