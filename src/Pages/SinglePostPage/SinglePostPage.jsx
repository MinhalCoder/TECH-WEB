import React from 'react'
import './SinglePostPage.css'
import Header from '../../Components/Header/Header'
import SinglePostHeroSec from '../../Components/SinglePost/SinglePostHeroSec/SinglePostHeroSec'
import SinglePostContent from '../../Components/SinglePost/SinglePostContent/SinglePostContent'

const SinglePostPage = () => {
  return (
   <>
   <div className="container singlePostPage">
    <div className="row">
        <div className="col">
        <Header/>
        <SinglePostHeroSec/>
        <SinglePostContent/>
        </div>
    </div>
   </div>
   </>
)
}

export default SinglePostPage