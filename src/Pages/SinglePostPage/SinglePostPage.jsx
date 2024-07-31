import React from 'react';
import './SinglePostPage.css';
import Header from '../../Components/Header/Header';
import SinglePostHeroSec from '../../Components/SinglePost/SinglePostHeroSec/SinglePostHeroSec';
import SinglePostContent from '../../Components/SinglePost/SinglePostContent/SinglePostContent';
import Footer from '../../Components/Footer/Footer';
import Newsletter from '../../Components/Newsletter/Newsletter';

const SinglePostPage = () => {
  return (
    <>
    <div className="container-fluid singlePostPage ">
      <div className="row">
        <div className="col">
          <Header />
          <div className="singlePost-line singlePost-left"></div>
          <div className="singlePost-line singlePost-right"></div>
          <SinglePostHeroSec />
          <SinglePostContent />
        </div>
      </div>
    </div>
    <Newsletter/>
    <Footer/>

    </>
    
  );
};

export default SinglePostPage;
