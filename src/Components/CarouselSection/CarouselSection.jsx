import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselSection = () => {

  return (
    <Carousel 
    autoPlay={true}
    infiniteLoop={true}
    transitionTime={300}
    showThumbs={false}
    showStatus={false}>
                <div >
                    <img className="carousel-image" src="/src/assets/Images/Carousel-image1.png" />
                </div>
                <div>
                    <img src="/src/assets/Images/Carousel-image2.png" />
                </div>
                <div>
                    <img src="/src/assets/Images/Carousel-image3.png" />
                </div>
                <div>
                    <img src="/src/assets/Images/Carousel-image4.png" />
                </div>
            </Carousel>
  );
};

export default CarouselSection;
