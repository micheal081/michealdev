import React from 'react';
import CV from '../../assets/Micheal_SoftwareEngineer_Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="https://www.linkedin.com/in/micheal-ighietsemhe-502640222/" className="btn btn-primary">
        Connect
      </a>
    </div>
  );
};

export default CTA;
