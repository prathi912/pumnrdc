// src/components/HeroSection.js

import React from 'react';
import HeroImage from './Hero_Image.png'; // Adjust the path as needed
import './HeroSection.css'; // Assuming you create a separate CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Advancing the Boundaries of Micro and Nano Technologies</h1>
        <p>
          Welcome to the Parul University Micro-Nano R&D Center, a pioneering
          institution dedicated to cutting-edge research and innovation in the
          field of micro and nano technologies.
        </p>
        <button className="hero-button">View All Equipments</button>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Micro-Nano R&D Center" />
      </div>
    </div>
  );
};

export default HeroSection;
