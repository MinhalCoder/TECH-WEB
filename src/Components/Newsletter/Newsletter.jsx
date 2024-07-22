import React from 'react'
import './Newsletter.css'


const Newsletter = () => {
  return (
<>
   <div className="newsletter  d-flex">
    <div className="col-6">
        <img className='mx-5  animated-image' src="src/assets/Images/newsletter.png" alt="" />
    </div>

    <div className="col-6 newsletter-content">
    <h1 className="newsletter-main-heading">Newsletter <br /> Signup</h1>
    <p>Subscribe For Exclusive Contents And Updates! </p>
    <div className="newsletter-searchbar w-75 mt-4">
                <input type="text" id="newsletterSearch" className="newsletter-input form-control ps-4 bg-transparent" placeholder="Enter Your Name..." />
              </div>

              <div className="newsletter-searchbar w-75 mt-3 ">
                <input type="text" id="newsletterSearch" className="newsletter-input form-control ps-4 bg-transparent" placeholder="Enter Your Email..." />
              </div>
              <a href="#"  className="btn newsletter-btn my-2 me-2 mt-4" > Subscribe  </a>
 
    </div>
   </div>
</>
)
}

export default Newsletter