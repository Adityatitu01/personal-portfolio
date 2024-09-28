import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        data-aos="fade-right"
        target="_blank"
        href="https://drive.google.com/file/d/14F_cNSW_9-WQ7cRcTZnnh2hMfNrjC_J2/view?usp=drive_link"
        className="btn"
        rel="noreferrer"
      >
        Resume
      </a>
      <a data-aos="fade-left" href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;
