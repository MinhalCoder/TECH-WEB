import React from "react";
import Footer from "../../Components/Footer/Footer";
import Newsletter from "../../Components/Newsletter/Newsletter";
import AboutPageMain from "../../Components/AboutPageMain/AboutPageMain";
import "./AboutUsPage.css";
import Header from "../../Components/Header/Header";

const AboutUsPage = () => {
  return (
    <>
      <div className="aboutus-page">
        <Header />
        <div className="about-line left"></div>
        <div className="about-line right"></div>

        <div className="container">
        <AboutPageMain />
      
        </div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
