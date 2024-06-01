// src/components/LandingPage.js
import React from 'react';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import OurServices from './OurServices'
import OurTeam from './OurTeam';
import Footer from './footer';
import CollaborationsCarousel from './CollaborationsCarousel';
import ResearchUpdate from './ResearchUpdate';
import Statistics from './Statistics';
import ContactForm from './ContactForm';

const LandingPage = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <HeroSection/>
      <CollaborationsCarousel/>
      <Statistics/>
      <ResearchUpdate/>
      <OurServices/>
      <OurTeam/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
