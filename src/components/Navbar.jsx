
import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import RegisterOption from "./RegisterOption";
const Navbar = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/expertise">Expertise</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/social">Socials</Link></li>
        <li>
        <button className="register-btn">
  <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
    Contact
  </Link>
</button>
        </li>
      </ul>

      </nav>
  );
};

export default Navbar;