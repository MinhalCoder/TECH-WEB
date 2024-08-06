import React from 'react';
import './SinglePostHerSec.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import Circle from '../../Circle/Circle';
import CircleSmall from '../../CircleSmall/CircleSmall';
import useIntersectionObserver from '../../useIntersectionObserver ';

const SinglePostHeroSec = () => {

  const elementRef = useIntersectionObserver((element) => {
    element.classList.add('fade-in-up-visible');
  }, {
    threshold: 0.1,
  });
  return (
    <>
    <CircleSmall/>
       <div className="container fade-in-up" ref={elementRef}>
      <div className="row">
        <div className="col-7">
          <h1 className="SinglePostHeroHeading ">
            <span className="d-block  ">The Key</span>
            <span className="d-block">Elements</span>
            <span className="d-block">  Of Modern</span>
            <span className="d-block"> Web Design</span>
          </h1>
          <div className="singleHeroAuthor">
            <div className="SinglePostHero-author-sec d-flex text-white">
              <img src="assets/Images/author1.png" alt="Author" width={80} />
              <div className="SinglePostHero-author-info">
                <p className='SinglePostHero-author-name'>Leslie Alexander</p>
                <p className='SinglePostHero-date'>Ceo / April 22, 2024</p>
              </div>
            </div>
            <img src="assets/Images/line.png" width={740} alt="" />
          </div>
        </div>
        
        <div className="col-5">

          <ImageSlider />
        </div>
      </div>
    </div>
    </>
 
  );
};

export default SinglePostHeroSec;
