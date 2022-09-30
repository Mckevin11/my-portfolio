import React from "react";
import "./portfolio.css";
import kevinBlog from "../../assets/kevinBlog.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={kevinBlog} alt="" />
          </div>
          <div className="portfolio__item-image">
            <h3>This is my blog</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://mskqt.herokuapp.com/"
                className="btn"
                target="_blank"
              >
                Kevin's Blog
              </a>
              <a
                href="https://mskqt.herokuapp.com/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
