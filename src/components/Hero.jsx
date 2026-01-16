import React from "react";
import "./Hero.css";
import { useEffect, useRef, useState } from "react";



const Hero = () => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = window.innerHeight * 0.5; // trigger when scrolled halfway
      if (window.scrollY > heroBottom && !showSecond) {
        // start first GIF animation
        setShowSecond("first"); // show first rocket
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSecond]);

  // Switch to second GIF after 1 second
  useEffect(() => {
    if (showSecond === "first") {
      const timer = setTimeout(() => {
        setShowSecond("second"); // replace first rocket with second
      }, 1000); // 1 second duration
      return () => clearTimeout(timer);
    }
  }, [showSecond]);
  
  return (
    <>
      {/* Cover Section */}
      <section className="cover-section"></section>

      {/* Profile Section */}
      <section className="profile-section">
      <div className="profile-pic-container">
  <img src="/Dp.jpeg" alt="Profile" className="profile-pic" />
</div>


        <div className="profile-text">
          <h2>Seerat Sandha</h2>
          <h4>Software Engineer | Tutor</h4>
          <p>Passionate about creating impactful digital solutions and making coding fun and accessible through teaching.</p>
        </div>

        
      
     

       
      
        
      </section>
    </>
  );
};

export default Hero;