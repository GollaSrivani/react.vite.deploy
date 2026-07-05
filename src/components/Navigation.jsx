import React from 'react'
import { useNavigate } from "react-router-dom";
 import './navigation.css'

const Navigation = () => {
  let navigate= useNavigate();
  return (
    <>
  
  <ul className="nav-links">
        <span className="portfolio-name">
  S<span className="highlight">G</span>
</span>
  <li onClick={() => navigate("/")}>Home</li>
  <li onClick={() => navigate("/")}>About</li>
  <li onClick={() => navigate("/skills")}>Skills</li>
  <li onClick={() => navigate("/projects")}>My Projects</li>
  <li>
    <button className="contact-btn"
        onClick={() => navigate("/contact")} >Contact Me</button>
  </li>
</ul>

    </>
  
  );
}

export default Navigation
