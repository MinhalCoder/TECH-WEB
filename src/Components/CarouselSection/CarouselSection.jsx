import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './CarouselSection.css'; // Import your custom CSS

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnChange = (index) => {
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // If you want to programmatically change the slide
    document.querySelector('.carousel').setState({ selectedItem: index });
  };

  return (
    <div className="carousel-container">
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      transitionTime={300}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={false} // Hide default indicators
      stopOnHover={false}
      selectedItem={currentIndex}
      onChange={handleOnChange}
      swipeable={false}
      >
        <div>
          <img className="carousel-image" src="assets/Images/Carousel-image1.png" />
        </div>
        <div>
          <img src="assets/Images/Carousel-image2.png"  />
        </div>
        <div>
          <img src="assets/Images/Carousel-image3.png" />
        </div>
        <div>
          <img src="assets/Images/Carousel-image5.png" />
        </div>
        <div>
          <img src="assets/Images/Carousel-image6.png" />
        </div>
      </Carousel>
      <div className="custom-indicators">
        {[0, 1, 2, 3,4].map((index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
