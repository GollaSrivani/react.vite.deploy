import React from "react";
import "./skills.css";

const skills = [
  "Java","core java" ,"Hibernate", "MySQL","HTML","CSS",  "JavaScript","React"
  
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h1>My Skills</h1>

      <div className="skills-container">
        {skills.map((x, index) => (
          <div className="skill-card" key={index}>
            {x}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;