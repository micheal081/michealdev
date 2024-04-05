import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>19+ Completed Projects</small>
            </article>
          </div>
          <p>
            With over 5 years of expertise, I am a seasoned full-stack developer
            proficient in Node.js, Nest.js, TypeScript, RabbitMQ, Kafka, AWS and
            JavaScript. I specialize in crafting seamless user experiences using
            React.js and React Native, while my proficiency in databases spans
            PostgreSQL, MySQL, Firebase, and MongoDB. My back-end skills
            encompass Express.js, Prisma, and serverless architectures on Azure
            and AWS. I navigate version control through GitLab and GitHub,
            ensuring collaborative and efficient code management. Project-wise,
            I manage workflows with Jira, Notion, and Clickup, and deploy
            scalable solutions using Docker, Kubernetes, and serverless
            technologies. <br></br>My commitment to code quality is reflected in
            my use of Husky for pre-commit hooks, and I've implemented Kafka for
            efficient event-driven architectures. Beyond technical prowess, I
            bring analytical thinking, effective communication, and leadership
            skills, fostering successful collaboration across diverse projects
            and driving initiatives for the overall advancement of development
            teams.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
