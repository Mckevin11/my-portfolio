import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const headersocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mckevin-king-1314161b9/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/kingmckevin" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/king_mckevin" target="_blank">
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default headersocial;
