import React from 'react'
import './AboutPageMain.css'
import Marquee from "react-fast-marquee";
import Card from './Card/Card';

const AboutPageMain = () => {
  return (
    <>
       <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
            <div className="col">
                <div className="aboutUsMain d-flex justify-content-center align-items-center ">
                <h1 className='aboutUsMain-heading' >ABOUT </h1>
                <h1 className='aboutUs-Stroke mx-5' >US</h1>
                </div>
               
            </div>
        </div>
    </div>

    <div className="container aboutUsMain-content-container">
        <div className="row">
            <div className="col-6">
            <p className='aboutUsMain-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis nostrum amet reprehenderit quasi provident, doloribus similique voluptates voluptas non voluptatibus pariatur, earum deleniti at possimus ratione asperiores quisquam debitis magni. obcaecati quasi aut repudiandae tenetur mollitia impedit voluptatibus ab? Quisquam dolor suscipit eum magnam..</p>
            </div>
            <div className="col-6">
               <img className='aboutUsMain-img' src="assets/Images/Carousel-image1.png" alt="" />
            </div>
        </div>
    </div>

    <div className="container aboutUsMain-content-container">
        <div className="row">
        <div className="col-6 ">
               <img  src="assets/Images/profile-img.png" alt="" />
            </div>
            <div className="col-6">
            <p className='aboutUsMain-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repudiandae dolores blanditiis quasi nam. Rem, pariatur harum eum excepturi unde praesentium reiciendis recusandae velit asperiores veniam officia voluptates deleniti itaque, officiis accusantium sed aut! Quos ducimus illo tempora sapiente hic officia porro at numquam magni rem enim qui quam, recusandae quas distinctio expedita dolorem tenetur omnis sit nihil? Culpa, deserunt?.</p>
            </div>
            
        </div>
    </div>

      <div className="container ">
        <div className="row">
            <div className="col">
                <div className="aboutUsMain-contact-title d-grid justify-content-center align-items-center ">
                <h3 className='text-center'>What People</h3>
                <h1> Say About Us</h1>
                </div>
                <div className="marquee-container">
                <div className="Marquee">
                    <Marquee  
                    speed={100}
                    >
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                    </Marquee>
                  </div>

                  <div className="Marquee2">
                  <Marquee  
                    speed={100}
                    direction='right'
                    >
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>
                    </Marquee>
                  </div>
                </div>
                 
            </div>
        </div>
      </div>
    </>
 
    
)
}

export default AboutPageMain