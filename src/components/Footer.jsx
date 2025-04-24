import React from 'react';
import './Footer.css';
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram,FaBriefcase} from 'react-icons/fa';
import { SiVercel, SiNetlify } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons-section">
        <div className="footer-icons-group">
          <p>Built With:</p>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJs</a>
          <a href="https://emailjs.com/" target="_blank" rel="noopener noreferrer">Email.Js</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">Css</a>
        </div>

        <div className="footer-icons-group">
          <p>Find Me On:</p>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"><SiVercel /></a>
          <a href="https://app.netlify.com/teams/aman567441/sites" target="_blank" rel="noopener noreferrer"><SiNetlify /></a>
          <a href="https://wa.me/9262539269" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
         <a href="https://github.com/aman567441" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         <a href="https://www.linkedin.com/in/aman-kumar-b706b6202/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer"><FaBriefcase /></a>
        <a href="https://www.instagram.com/verman95/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
