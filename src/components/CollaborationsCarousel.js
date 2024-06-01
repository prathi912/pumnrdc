import React, { useRef } from 'react';
import './CollaborationsCarousel.css';
import cabcin from './Collabs/cabcin.png';
import GCST from './Collabs/GCST.png';
import GSBTM from './Collabs/GSBTM.png';
import icmr from './Collabs/icmr.png';
import RAE from './Collabs/RAE.png';

const CollaborationsCarousel = () => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        top: 0,
        left: -320,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        top: 0,
        left: 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="collaborations-container">
      <h2>OUR RESEARCH COLLABORATIONS</h2>
      <div className="underline"></div>
      <div className="carousel">
        <button className="carousel-btn prev-btn" onClick={scrollLeft}>&lt;</button>
        <div className="carousel-track-container" ref={trackRef}>
          <ul className="carousel-track">
            <ul className="carousel-slide"><img src={cabcin} alt="CABCIN" /></ul>
            <ul className="carousel-slide"><img src={GCST} alt="GCST" /></ul>
            <ul className="carousel-slide"><img src={GSBTM} alt="GSBTM" /></ul>
            <ul className="carousel-slide"><img src={icmr} alt="ICMR" /></ul>
            <ul className="carousel-slide"><img src={RAE} alt="RAE" /></ul>
          </ul>
        </div>
        <button className="carousel-btn next-btn" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default CollaborationsCarousel;
