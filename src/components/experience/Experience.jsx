import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        {/* <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article>
          </div>
        </div> */}
        <div className="experience__backend">
          {/* <h3>Back-end Development</h3> */}
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Node.Js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Express.Js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React.Js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Kubernetes</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Docker</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Electron</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Jira</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>ClickUp</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Azure</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>AWS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Redis</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Serverless</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Microservices</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CI/CD Pipeline</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>PHP</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience