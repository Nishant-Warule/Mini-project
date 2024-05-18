import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;