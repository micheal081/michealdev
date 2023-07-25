import React from "react";
import { FaGithub } from "react-icons/fa";
import IMG1 from "../../assets/loan.png";
import IMG2 from "../../assets/payflex.png";
import IMG4 from "../../assets/learn.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Loan System API",
      img: IMG1,
      description:
        "This is a Node.js-based server application that provides API endpoints for loan services. It has two sets of routes, one for users and the other for administrators. Users' routes handle requests related to user authentication, loan application, loan repayment, and other user-specific operations...",
      tech: "Tech Stacks",
      technologies:
        "Node.Js, JavaScript, Express.Js, MongoDB, Git/Github, ClickUp, Redis, AWS, Mongoose",
      link: "#",
      github: "https://github.com/micheal081/Loan-System",
    },
    {
      id: 2,
      title: "E-Learning System API",
      img: IMG4,
      description:
        "The E-learning System API is a powerful Node.js-based server application that enables seamless integration between e-learning platforms and software applications. It provides standardized methods for course management, user interaction, and access to educational resources...",
      tech: "Tech Stacks",
      technologies: "Node.Js, JavaScript, Express.Js, MongoDB, Git/Github, ClickUp, Redis, AWS, Mongoose",
      link: "#",
      github: "https://github.com/micheal081/School-system",
    },
    {
      id: 3,
      title: "Payflex Inc",
      img: IMG2,
      description: "Our groundbreaking project, the Payflex Communication API, is a powerful Node.js-based server application that facilitates effortless integration between various communication platforms and software applications. By providing standardized methods for managing communication services...",
      tech: "Tech Stacks",
      technologies: "Node.Js, TypeScript, Express.Js, MongoDB, Git/Github, ClickUp, Redis, Kubernetes, Docker, AWS, Mongoose",
      link: "#",
      github: "https://github.com/Meri-MG/To-Do-List",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p className="tech">{pro.tech}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                <FaGithub className="git" />
                GitHub
              </a>
              {/* <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
