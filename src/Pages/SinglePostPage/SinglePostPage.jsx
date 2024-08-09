import React, { useState, useEffect } from 'react';
import './SinglePostPage.css';
import Header from '../../Components/Header/Header';
import SinglePostHeroSec from '../../Components/SinglePost/SinglePostHeroSec/SinglePostHeroSec';
import SinglePostContent from '../../Components/SinglePost/SinglePostContent/SinglePostContent';
import Footer from '../../Components/Footer/Footer';
import Newsletter from '../../Components/Newsletter/Newsletter';

const SinglePostPage = () => {
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);

  useEffect(() => {
    const mainContainer = document.querySelector('.main-content'); // Adjust the selector to target the correct container

    if (isCommentSectionVisible) {
      mainContainer.classList.add('blurred');
    } else {
      mainContainer.classList.remove('blurred');
    }

    return () => {
      mainContainer.classList.remove('blurred');
    };
  }, [isCommentSectionVisible]);

  return (
    <>
      <div className="container-fluid main-content text-light">
        <div className="row">
          <div className="col">
            <Header />
            <div className="singlePost-line singlePost-left"></div>
            <div className="singlePost-line singlePost-right"></div>
            <SinglePostHeroSec />
            <SinglePostContent setCommentSectionVisible={setIsCommentSectionVisible} />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SinglePostPage;
