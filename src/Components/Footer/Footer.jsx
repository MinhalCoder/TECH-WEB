import React from 'react';
import './Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-header">
            <div className="image-placeholder"></div>
            <div className="description">
              The .......... empowers businesses to showcase their offerings with a
              visually stunning interface and immersive digital experience.
            </div>
            <div className="footer-rectangle">
              <div className="rectangle"></div>
            </div>
            <div className="logo-web-name">Logo/Web Name</div>
          </div>
          <div className="footer-images">
            <div className="image-wrapper">
              <div className="rectangle2"></div>
              <img className="footer-image" src="image1.svg" alt="Image 1" />
            </div>
            <div className="image-wrapper">
              <div className="rectangle2"></div>
              <img className="footer-image" src="image2.svg" alt="Image 2" />
            </div>
            <div className="image-wrapper">
              <div className="rectangle2"></div>
              <img className="footer-image" src="image3.svg" alt="Image 3" />
            </div>
            <div className="image-wrapper">
              <div className="rectangle2"></div>
              <img className="footer-image" src="image4.svg" alt="Image 4" />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="utilities">
            <div className="utilities-header">
              <div className="rectangle"></div>
              <div className="utilities-pages">Utilities Pages</div>
            </div>
            <div className="link-list">
              <div className="link-item">Register</div>
              <div className="rectangle3"></div>
              <div className="link-item">Login</div>
              <div className="link-item">404</div>
            </div>
          </div>
          <div className="main-links">
            <div className="link-item">Home</div>
            <div className="link-item">Features</div>
            <div className="link-item">Blog</div>
            <div className="link-item">Pricing</div>
            <div className="link-item">About</div>
            <div className="link-item">Contact</div>
            <div className="rectangle"></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="home-link">Home</div>
      </div>
      <div className="footer-copyright">
        Copyright ©2024 ----------------
      </div>
    </div>
  );
};

export default Footer;
