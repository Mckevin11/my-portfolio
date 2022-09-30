import React from "react";
import "./testimonials.css";
import userImage from "../../assets/userImage.png";

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Tertimonials by others</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={userImage} alt="userImage" />
          </div>
          <h5 className="client__name">No review yet</h5>
          <small className="client__review">
            No testimonials for review of works yet. This will come out soon as
            part of the updates
          </small>
        </article>
      </div>
    </section>
  );
};

export default testimonials;
