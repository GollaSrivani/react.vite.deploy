import React from 'react'
import bg from '../assets/bg.jpeg';
import './home.css'
import  resume from '../assets/resume.pdf'




const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h3>Hello,</h3>

        <h1>
          I'm <span className="highlight">Srivani</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          Passionate about building scalable web applications with Java,
          Hibernate, React, and modern web technologies.
        </p>
           <button
  onClick={() => window.open("/resume.pdf")}
  className="resume-btn"
>
  Download Resume
</button>
           
        
      </div>

      <div className="image-container">
        <img src={bg} alt="Srivani" className="profile-image" />
      </div>
    </section>
  );
};

export default Home;
