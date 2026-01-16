import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("This section is under development");
  };
  return (
    <section className="contact-section">
         <div className="section-divider"></div>
      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p>
            Just for a clarification this section is un der developemnt , I am working on it to be done soon. until then if you are intersted; contact me at seeratsandha2586@gmail.com. I can’t wait to hear from you!
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
        <form className="contact-form">

<div className="form-groupContact">
  <label>
    Name <span>(Required)</span>
  </label>
  <div className="name-row">
    <input type="text" placeholder="First Name" required />
    <input type="text" placeholder="Last Name" required />
  </div>
</div>

<div className="form-groupContact">
  <label>
    Email <span>(Required)</span>
  </label>
  <input type="email" placeholder="Email" required />
</div>

<div className="form-groupContact">
  <label>
    Message <span>(Required)</span>
  </label>
  <textarea placeholder="Your Message" rows="5" required></textarea>
</div>

<button type="submit">Send</button>
</form>
</div>
        </div>
        </section>
    );
    }