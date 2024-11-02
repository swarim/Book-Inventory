// src/pages/Welcome/Welcome.js
import React from 'react';
import './Welcome.css';
import heroImage from '../../assets/images/hero-image.jpg'; // Make sure to replace with a high-quality hero image

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Discover Your Next Favorite Book</h1>
          <p>Manage your book collection with ease and discover new reads to inspire you.</p>
          <a href="/inventory" className="cta-button">Explore Inventory</a>
        </div>
        <img src={heroImage} alt="Books on a Shelf" className="hero-image" />
      </div>
    </div>
  );
};

export default Welcome;
