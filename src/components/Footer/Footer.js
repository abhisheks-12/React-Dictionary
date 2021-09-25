import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      
      <div className="iconContainer">
        <a href="https://twitter.com/AbhishekSankpa6" target="__blank">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-sankpal-99a77b202"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/abhisheks-12" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
