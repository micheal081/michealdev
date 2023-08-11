import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        {/* <h5>Hello I'm</h5> */}
        <h1 className="mobile">Hi, I'm <span className="text-light">Micheal</span></h1>
        <h1 className="mobile small desktop">Backend Engineer - Software Engineer</h1>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
