// src/components/ResearchUpdate.js
import React from 'react';
import './ResearchUpdate.css';
import image from './Collabs/Grant.jpeg'; // Replace with the path to your image

const ResearchUpdate = () => {
  return (
    <div className="research-update-container">
      <div className="image-container">
        <img src={image} alt="Research Update" />
      </div>
      <div className="text-container">
        <h2>Research Update</h2>
        <p>
          Sanction for establishment of “Micro - Nano Research and Development Center” by the
          Industries Commissionerate, Govt of Gujarat
        </p>
        <hr />
        <a href="https://paruluniversity.ac.in/uploads/image_library/202310/Industries_Commissionerate_letter.pdf">Read more</a>
      </div>
    </div>
  );
};

export default ResearchUpdate;
