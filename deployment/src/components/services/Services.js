import React from "react";
import "./services.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Have experience creating UI/UX</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Creating UI/UX using react</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Creating UI using html, bootstrap & css</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Have experience in web development</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Created a Django Application</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Created a Chat Applicatio names meet strangers</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Have experience in Django backend</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Have Experience in MERN Stack</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Have experience using APIs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
