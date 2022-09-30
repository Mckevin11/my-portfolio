import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3hantl",
        "service_c3hantl",
        form.current,
        "NafKJ-fX4NhFTobEx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kingmckevin@gmail.com</h5>
            <a href="mailto:kingmckevin@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Mc Mc King I</h5>
            <a href="https://m.me/mckiing" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Mckevin King</h5>
            <a
              href="https://www.linkedin.com/in/mckevin-king-1314161b9/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" value="Send" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
