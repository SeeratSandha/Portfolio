import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import "./SocialSection.css";

export default function SocialSection() {
  return (
    <section className="social-section">
      <div className="social-header">
        <h2>Follow Us on Social</h2>
        <button className="social-btn">Social</button>
      </div>

      <div className="social-icons">
        <div className="social-icon instagram">
          <FaInstagram />
          <span>Instagram</span>
        </div>

        <div className="social-icon twitter">
          <FaTwitter />
          <span>Twitter</span>
        </div>

        <div className="social-icon whatsapp">
          <FaWhatsapp />
          <span>WhatsApp</span>
        </div>

        <div className="social-icon facebook">
          <FaFacebookF />
          <span>Facebook</span>
        </div>
      </div>
    </section>
  );
}