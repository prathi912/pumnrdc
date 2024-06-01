import React from 'react';
import './Statistics.css';

const counts = [
  { label: 'in Research Grants', count: '15 Cr+', color: 'green' },
  { label: 'Ph.d Research Guides', count: '319', color: 'blue' },
  { label: 'Scientific Research Papers Published', count: '2500+', color: 'yellow' },
  { label: 'Patents Filed', count: '187', color: 'lightgreen' },
  { label: 'Patents Published', count: '137+', color: 'orange' },
  { label: 'Copyrights Filed & Granted', count: '60', color: 'purple' },
];

const Statistics = () => {
  return (
    <div className="user-reviews-container">
      <h2 className="user-reviews-header">We Believe in Numbers</h2>
      <div className="underline"></div>
      <div className="reviews-grid">
        {counts.map((item, index) => (
          <div className="review-tile" key={index} style={{ '--hover-color': item.color }}>
            <p className="review-count">{item.count}</p>
            <p className="review-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

