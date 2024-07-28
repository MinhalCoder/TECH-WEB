import React from 'react'
import './FollowUs.css'
import CircleSmall from '../CircleSmall/CircleSmall'
import useIntersectionObserver from '../useIntersectionObserver ';


const FollowUs = () => {
  const elementRef = useIntersectionObserver((element) => {
    element.classList.add('fade-in-up-visible');
  }, {
    threshold: 0.1,
  });
  return (

    <>

     <div className="followus-heading-container d-flex  mt-3 fade-in-up " ref={elementRef}>
    <h2 className="followus-main-heading">Follow Us</h2>
    </div> 
    <div className="follow-icon-box d-flex justify-content-between mt-4">
        <a href=""><img src="assets/Images/insta.png" alt="" /> </a>
        <a href=""><img src="assets/Images/X.png" alt="" /></a>
        <a href=""><img src="assets/Images/web.png" alt="" /></a>
        <a href=""><img src="assets/Images/linkedin.png" alt="" /></a>
        <a href=""><img src="assets/Images/fb.png" alt="" /></a>

    </div>
    <CircleSmall/>

    </>
   
    
)
}

export default FollowUs