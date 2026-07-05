import React from 'react';
import { skillsdata } from './ProjectData';
import './project.css';

const Project = () => {
  return (
    <div className="cardmain"
        
    >
      {skillsdata.map((x) => (
        <div className="card1" key={x.id}>
          <h1>{x.project}</h1>
          <p>{x.explanation}</p>
          <h3>{x.Technologiesused}</h3>
        </div>
      ))}
    </div>
  );
};

export default Project;