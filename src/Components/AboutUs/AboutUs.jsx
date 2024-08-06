import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./AboutUs.css";
import useIntersectionObserver from '../useIntersectionObserver ';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.1,
      });
  return (
    <>
    <div className="fade-in-up" ref={elementRef}>
    <div className="aboutus-heading-container d-flex " >
    <h1 className="aboutus-main-heading">About Us</h1>
    <Link to="/AboutUs" className="text-decoration-none">
<BsArrowRightCircleFill className="aboutus-right-arrow-icon  mt-1 " color="white" size="2.6em" />
</Link>   
    </div>

    <div className="aboutus   ">
        <img  className='aboutus-img' src="assets/Images/about-img.png" alt="" width={300} height={400} />
    </div>
    <div className="aboutus-content mt-4">
    <h4 className='text-white d-block aboutus-content-heading'  >I’m [Your Name], the founder of [Your Blog Name].....</h4>
    <a href="#"  className="btn aboutus-btn my-2 me-2" > Get started  </a>
    </div>
    </div>
   

    </>
   
        
)
}

export default AboutUs