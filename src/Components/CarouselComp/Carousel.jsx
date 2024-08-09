import React from "react";
import CarouselSection from "../CarouselSection/CarouselSection.jsx";
import "./Carousel.css";
import CircleSmall from "../CircleSmall/CircleSmall.jsx";
import LatestPosts from "../LatestPosts/LatestPosts.jsx";
import Categories from "../Categories/Categories.jsx";
import EditorsPicks from "../EditorsPicks/EditorsPicks.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import FollowUs from "../FollowUs/FollowUs.jsx";
import Trending from "../Trending/Trending.jsx";
import Footer from "../Footer/Footer.jsx";
import Circle from "../Circle/Circle.jsx";
import useIntersectionObserver from "../useIntersectionObserver .jsx";

const Carousel = () => {
  const elementRef = useIntersectionObserver(
    (element) => {
      element.classList.add("fade-in-up-visible");
    },
    {
      threshold: 0.1,
    }
  );
  return (
    <>
      <CircleSmall />

      <div ref={elementRef} className="container Carousel fade-in-up ">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="carouselContent">
              <h1 className="carouselHeading">
                <span className="d-block">Grid System For</span>
                <span className="d-block">Better Design</span>
                <span className="d-block">User Interface</span>
              </h1>
              <a href="#" className="btn btn-1   my-4 me-2">
                Get started
              </a>
              <a href="#" className="btn  btn-gradient">
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
    

      <div className="container frame-container">
        <div className="row">
          <div className="col-7">
            <LatestPosts />

            <Categories />
          </div>

          <div className="col-5 ">
            <Circle />

            <EditorsPicks />
            <AboutUs />
            <FollowUs />
         
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
