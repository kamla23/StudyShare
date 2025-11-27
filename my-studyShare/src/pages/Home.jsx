import React from "react";
import "../styles/hero.css";
import collaborationImg from "../assets/nav.jpeg"; 

const Home = ({ onNavigate }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">Turn Your Ideas Into Reality</h2>
        <p className="hero-text">Share, Learn and Build Together</p>

        <button
          className="primary-btn"
          onClick={() => onNavigate("signup")}
        >
          Get Started
        </button>
      </div>

      <div className="hero-illustration">
        <div className="illustration-box">
          <img 
            src={collaborationImg} 
            alt="Collaboration" 
            className="hero-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
