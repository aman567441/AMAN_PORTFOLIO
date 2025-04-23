// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Contact from './components/Contact';
import './App.css';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Certification />
      <Skills />
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
