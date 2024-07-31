// src/Pages/HomePages/HomePage.js
import React from 'react';
import Header from '../../Components/Header/Header';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/CarouselComp/Carousel';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="  home-page">
      <Header />
      <div className="line left"></div>
      <div className="line right"></div>
      <div className="container">
      <Carousel />
    
      </div>
      <Newsletter />
      <Footer />
    
    </div>
  );
};

export default HomePage;
