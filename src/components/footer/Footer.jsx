import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Micheal Ighietsemhe
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/micheal-ighietsemhe-502640222/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/micheal081"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/HqMicheal"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
