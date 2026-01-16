import React, { useState } from "react";
import "./FlipFileTest.css";

export default function FlipFileTest() {
  const [flipped, setFlipped] = useState(false);

  // Example expertise icons
  const expertiseList = [
    { name: "Java", desc: "Experienced in OOP, loops, and core Java concepts", icon: "/java.gif" },
    { name: "Python", desc: "Built scripts, automation, and ML models", icon: "/python.gif" },
    { name: "C#", desc: "Developed desktop apps and games using C#", icon: "/firecracker.gif" },
    { name: "JavaScript", desc: "Frontend, backend, and React apps", icon: "/javascript.gif" },
    { name: "React", desc: "SPA apps with hooks, state, and routing", icon: "/react.gif" },
    { name: "3D Modeling", desc: "Blender and creative modeling", icon: "/3D.gif" },
    { name: "Minecraft Coding", desc: "Fun interactive programming for kids", icon: "/minecraft.gif" },
    { name: "Math & Algebra", desc: "Algebra, calculus, probability theory", icon: "/math.gif" },
    { name: "RESTful APIs", desc: "Design and consume APIs efficiently", icon: "/api.gif" },
    { name: "OpenAI", desc: "Built projects using GPT APIs", icon: "/flower.gif" },
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-card-wrapper">
        <div className={`expertise-card ${flipped ? "flipped" : ""}`}>
          
          {/* FRONT SIDE */}
          <div className="expertise-front">
          <img src="/lotus.gif" alt="Decorative" className="front-gif" />
            <h2>Want to Check My Expertise?</h2>
            <p>Click the button to see the skills and tools I master.</p>
            <button className="flip-btn" onClick={() => setFlipped(true)}>
              Show Expertise
            </button>
          </div>

          {/* BACK SIDE */}
          <div className="expertise-back">
            <h3>My Skills & Expertise</h3>
            <div className="expertise-icons">
              {expertiseList.map((item, idx) => (
                <div className="icon-box" key={idx}>
                  <img src={item.icon} alt={item.name} />
                  <p className="tooltip">{item.desc}</p>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
            <button className="flip-btn" onClick={() => setFlipped(false)}>
              Go Back
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}