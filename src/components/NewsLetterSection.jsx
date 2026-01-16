import React from "react";
import "./NewsLetterSection.css";

export default function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-overlay">
        <h2>Let's Connect</h2>
        <p>Thank you for visiting! Feel free to get in touch</p>
        <form className="newsletter-form">
          <input type="email" placeholder="seeratsandha2586@gmail.com" required />
          <button type="submit">Reach Out</button>
        </form>
      </div>
    </section>
  );
}