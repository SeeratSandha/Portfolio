import React, { useState } from "react";
import "./ServicesCard.css";

const ServiceCard = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="service-card">
      <div className="card-header" onClick={() => setExpanded(!expanded)}>
        <h3>{title}</h3>
        <span className="toggle-sign">{expanded ? "-" : "+"}</span>
      </div>
      {expanded && <p className="card-description">{description}</p>}
      <div className="divider"></div>
    </div>
  );
};

export default ServiceCard;