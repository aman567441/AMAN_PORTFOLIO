import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "ViewFinder",
    image: "/images/projects_img/view-finder.png",
    link: "https://aman567441.github.io/ViewFinder/"
  },
  {
    title: "TextUtils",
    image: "/images/projects_img/text-utills.png",
    link: "https://aman567441.github.io/my-app/"
  },
  {
    title: "IMDb Rating",
    image: "/images/projects_img/iMDB.png",
    link: "https://coruscating-sable-cc42de.netlify.app/"
  },
  {
    title: "Recipe Finder Food",
    image: "/images/projects_img/recipe-finder.png",
    link: "https://recipe-finder-food.netlify.app/"
  },
  {
    title: "Student Job Tracker",
    image: "/images/projects_img/job-tracker.png",
    link: "https://frontend-job-tracker.vercel.app/"
  },
  {
    title: "NoteApp",
    image: "/images/projects_img/noteapp.png",
    link: "https://aman567441.github.io/NoteApp/"
  },
  {
    title: "Spotify Clone",
    image: "/images/projects_img/spotify-clone.png",
    link: "https://aman567441.github.io/spotify_clone/"
  },
  {
    title: "Todo Website",
    image: "/images/projects_img/todo.png",
    link: "https://aman567441.github.io/ToDoList/"
  },
  {
    title: "Todo App",
    image: "/images/projects_img/NewToDo.png",
    link: "https://addyourtaskwithaman.netlify.app/"
  },
  {
    title: "Password Generator",
    image: "/images/projects_img/password.png",
    link: "https://aman567441.github.io/passwordGenerater/"
  },
  {
    title: "E-commerce puppy-shop",
    image: "/images/projects_img/puppyshop.png",
    link: "https://aman567441.github.io/E-Commerce-Puppy-shop/"
  },
  {
    title: "Quiz App",
    image: "/images/projects_img/quiz.png",
    link: "https://aman567441.github.io/QuizApp/"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-heading">
  <FaLaptopCode className="projects-icon" />
  My Projects
</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} className="project-card" href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="content">
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
