import React from "react";
import "./ContactUsPage.css";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUsMain/ContactUs";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Header from "../../Components/Header/Header";

const ContactUsPage = () => {
  return (
    <>
      <div className="contactus-page">
        <Header />
        <div className="contact-line left"></div>
        <div className="contact-line right"></div>
        <div className="container">
        <ContactUs />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;
