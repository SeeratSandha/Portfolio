import ServiceCard from "./ServicesCard";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import "./Services.css";

export default function Services() {

  const gifRef = useRef(null);
  const [playGif, setPlayGif] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayGif(true); // start GIF
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // triggers when 50% of section is visible
    );

    if (gifRef.current) observer.observe(gifRef.current);
  }, []);

  return (
    

    
  <section className="services-section">
   
    
      <div className="services-content">
        
        {/* LEFT SIDE */}
        <div className="services-left">
          <h2>Who I AM & How I Teach</h2>
          <p>I teach coding in a structured and engaging way, helping students master logic, problem-solving, debugging, and programming basics. My lessons are step-by-step, interactive, and adapted to each student's learning style.</p>

          <ServiceCard
            title="Enjoyable Lessons"
            description="I make learning fun and interactive, using projects and examples that keep students engaged and motivated throughout every session."
          />
          <ServiceCard
            title="Clear Guidance"
            description="Complex coding concepts are broken down into easy, step-by-step explanations, helping students understand and retain ideas quickly.
            "
          />
          <ServiceCard
            title="Effective Support"
            description="I provide personalized feedback and guidance, ensuring students not only improve their grades but also gain real confidence in their skills.
            "
           />
           
           
{/* STUDENT QUOTE */}
<div className="student-quote">
  <p>
    <em>"I really love her way of teaching! She is amazing—it helped me improve my grades and understand concepts so much better."</em>
  </p>
</div>
          </div>

        {/* RIGHT SIDE */}
        <div className="services-right" ref={gifRef}>
          <img
            src={playGif ? "/star.gif" : "/animation-frame.png"}
            alt="Coding Animation"
            className="services-gif"
          />
        </div>

      </div>
    </section>
  );
}