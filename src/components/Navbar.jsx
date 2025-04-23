// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id) => {
    setActiveLink(id);
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
  <a href="#hero" onClick={() => setActiveLink('hero')}>
    <img src="/images/aman.jpg" alt="Aman Logo" className="logo-img" />
  </a>
</div>


      <ul className={`nav-links ${isMobile ? 'nav-links-mobile show' : ''}`}>
        <li><a href="#hero" className={activeLink === 'hero' ? 'active' : ''} onClick={() => handleLinkClick('hero')}>Home</a></li>
        <li><a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</a></li>
        <li><a href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => handleLinkClick('skills')}>Skills</a></li>
        <li><a href="#certification" className={activeLink === 'certification' ? 'active' : ''} onClick={() => handleLinkClick('certification')}>Certification</a></li>
        <li><a href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => handleLinkClick('projects')}>Projects</a></li>
        <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</a></li>
      </ul>

      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
