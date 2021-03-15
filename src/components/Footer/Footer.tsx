import React from "react";

import logoGithub from "../../assets/github.svg";
import logoRSS from "../../assets/rsschool.svg";
import "./FooterStyle.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons_container">
        <span>2021 ©</span>
        <a href="https://github.com/ArseniyXaoc">
          <img className="footer__icon footer__icon_git" src={logoGithub} alt="" />
        </a>
        <a href="https://github.com/JuliaGvozdeva">
          <img className="footer__icon footer__icon_git" src={logoGithub} alt="" />
        </a>
        <a href="https://github.com/vetaniExist">
          <img className="footer__icon footer__icon_git" src={logoGithub} alt="" />
        </a>
        <a href="https://github.com/GrnTea">
          <img className="footer__icon footer__icon_git" src={logoGithub} alt="" />
        </a>
      </div>
      <a href="https://rs.school/js/">
        <img className="footer__icon" src={logoRSS} alt="" />
      </a>
    </div>
  );
}

export default Footer;
