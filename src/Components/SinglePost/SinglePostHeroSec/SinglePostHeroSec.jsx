import React from 'react';
import './SinglePostHerSec.css';
import ImageSlider from '../ImageSlider/ImageSlider';

const SinglePostHeroSec = () => {
  return (
    <div className="container  ">
      <div className="row">
        <div className="col-7">
          <h1 className="SinglePostHeroHeading">
            <span className="d-block">The Key</span>
            <span className="d-block">Elements</span>
            <span className="d-block">Of</span>
            <span className="d-block">Modern</span>
            <span className="d-block">Web Design</span>
          </h1>
          <div className="singleHeroAuthor">
            <div className="SignlePostHero-author-sec d-flex text-white">
              <img src="assets/Images/author1.png" alt="Author" width={50} />
              <div className="SignlePostHero-author-info">
                <p>Leslie Alexander</p>
                <p className='SignlePostHero-author-info-date'>Ceo / April 22, 2024</p>
              </div>
            </div>
            <img src="assets/Images/line.png" width={444} alt="" />
          </div>
        </div>
        <div className="col-5">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default SinglePostHeroSec;
