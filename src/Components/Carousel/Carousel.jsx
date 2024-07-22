import React from 'react';
import CarouselSection from '../CarouselSection/CarouselSection';
import './Carousel.css';
import CircleSmall from '../CircleSmall/CircleSmall';

const Carousel = () => {
  return (
    <>
          <CircleSmall/>

      <div className="container Carousel  ">

        <div className="row align-items-center">
          <div className="col-md-6">

            <div className="carouselContent">
              <h1 className="carouselHeading">
                <span className="d-block">Grid System For</span>
                <span className="d-block">Better Design</span>
                <span className="d-block">User Interface</span>
              </h1>
              <a
                href="#"
                className="btn btn-1   my-4 me-2"
               
              >
                Get started
              </a>
              <a
                href="#"
                className="btn  btn-gradient"
                
              >
                Get started
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="carouselSection">
              <CarouselSection />
            </div>
          </div>

        </div>
      </div>
       <img className='carousel-bottom-frame' src="src/assets/Images/frame2.png" alt="" />
    </>
  );
};

export default Carousel;
