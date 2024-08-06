import React from 'react'
import './AboutPageMain.css'
import Marquee from "react-fast-marquee";
import Card from './Card/Card.jsx';
import useIntersectionObserver from '../useIntersectionObserver ';
import CircleSmall from '../CircleSmall/CircleSmall.jsx';
import Circle from '../Circle/Circle.jsx';

const AboutPageMain = () => {
  const elementRef = useIntersectionObserver((element) => {
    element.classList.add('fade-in-up-visible');
  }, {
    threshold: 0.1,
  });
  return (
    <>
    <div className="fade-in-up" ref={elementRef}>
    <div className="container d-flex justify-content-center align-items-center " >
        <div className="row">
            <div className="col">
                <div className="aboutUsMain d-flex justify-content-center align-items-center ">
                <h1 className='aboutUsMain-heading' >About </h1>
                <h1 className='aboutUs-Stroke mx-5' >Us</h1>
                </div>
               
            </div>
        </div>
    </div>
    <CircleSmall/>

    <div className="container aboutUsMain-content-container">
        <div className="row">
            <div className="col-6">
            <p className='aboutUsMain-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero, suscipit similique esse quo nemo qui deserunt quisquam consequatur asperiores voluptas nihil incidunt nesciunt pariatur autem et quod sed vel sequi aliquid illo. Voluptatem odit velit vero fuga voluptate, consequatur qui ratione recusandae magni, facere a quibusdam tempora esse? A harum corrupti consectetur ipsa, consequatur facilis cumque inventore dolore perspiciatis laudantium, recusandae  incidunt itaque, dolores unde accusamus nisi maiores expedita tempora saepe repellat iure eius totam. Quis, rem libero..</p>
            </div>
            <div className="col-6">
               <img className='aboutUsMain-img' src="assets/Images/Carousel-image1.png" alt="" />
            </div>
        </div>
    </div>
<Circle/>
    <div className="container aboutUsMain-content-container">
        <div className="row">
        <div className="col-6 ">
               <img  src="assets/Images/profile-img.png" alt="" />
            </div>
            <div className="col-6">
            <p className='aboutUsMain-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit reprehenderit numquam error omnis inventore, obcaecati quidem perferendis in soluta expedita possimus et commodi iusto repellat! Facere eos quidem id temporibus iure eius, adipisci voluptatem alias sequi itaque reiciendis eveniet eaque provident porro cupiditate a natus quod ad nam quo esse ab praesentium. Quam quaerat pariatur illo magnam odit sed, dolorem ad officia molestias vero atque ratione doloremque ipsum expedita sapiente officiis qui natus itaque necessitatibus nesciunt minus. Amet et cumque magni incidunt!.</p>
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
                <CircleSmall/>
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
    </div>
   
    </>
 
    
)
}

export default AboutPageMain