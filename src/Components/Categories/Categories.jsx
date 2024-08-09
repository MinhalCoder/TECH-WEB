import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./Categories.css";
import useIntersectionObserver from '../useIntersectionObserver ';

const Categories = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.1,
      });
  return (
   <>
   <div className="fade-in-up" ref={elementRef}>
   <div className="categories-heading-container mx-3 d-flex ">
    <h1 className="Categories-main-heading mb-lg-5">Categories</h1>
<BsArrowRightCircleFill className="categories-right-arrow-icon mt-2" color="white" size="3em" />
    </div>

         <div className="categories-container mx-2">
            <div className="category-content d-flex mt-5 text-white">
                <div className="col-6  ">
                <h3>TECH</h3>

                    <div className="content">
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="category-vector d-flex  mt-4 ">
                        <img src="assets/Images/Vector.png" alt="" width={30} height={30} />
                        <p className='vector-text'>More on visual appeal....</p>
                    </div>
                    </div>
                   
                </div>
                <div className="col-6 ">
                    <div className="category-content-img">
                    <img className='category-img category-image' src="assets/Images/img2.png" alt="" width={250} height={250} />

                    </div>
                
                </div>
            </div>
            {/* 2nd row */}

            <div className="content-none">
            <div className="category-content d-flex mt-5 text-white">
            <div className="col-6 ">
                <img className='category-img ' src="assets/Images/img1.png" alt="" width={250} height={250} />
                
                </div>
                <div className="col-6   mx-4">
                <h3 className='mx-4'>TECH</h3>

<div className="content">
<ul  className='list list-unstyled mx-4'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="category-vector d-flex  mt-4 mx-4">
                        <img src="assets/Images/Vector.png" alt="" width={30} height={30} />
                        <p className='vector-text' >More on visual appeal.... </p>
                    </div>
</div>

                   
                </div>
               
            </div>
            {/* 3rd row */}
            <div className="category-content category-image category-content-3 d-flex mt-5 text-white">
                <div className="col-6 ">
                    <h3>TECH</h3>
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="category-vector d-flex  mt-4 ">
                        <img src="assets/Images/Vector.png" alt="" width={30} height={30} />
                        <p className='vector-text'>More on visual appeal.... </p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img ' src="assets/Images/img2.png" alt="" width={250} height={250} />
                
                </div>
            </div>
            {/* 4th row */}
            <div className="category-content d-flex mt-5 text-white">
            <div className="col-6 ">
                <img className='category-img' src="assets/Images/img1.png" alt="" width={250} height={250} />
                
                </div>
                <div className="col-6  mx-4">
                    <h3 className='mx-4' >TECH</h3>
                    <ul  className='list list-unstyled mx-4'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="category-vector d-flex  mt-4 mx-4 ">
                        <img src="assets/Images/Vector.png" alt="" width={30} height={30} />
                        <p  className='vector-text'>More on visual appeal....</p>
                    </div>
                </div>
               
            </div>
            {/* 5th row */}
            <div className="category-content category-image d-flex mt-5 text-white">
                <div className="col-6 ">
                    <h3>TECH</h3>
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="category-vector d-flex  mt-4">
                        <img src="assets/Images/Vector.png" alt="" width={30} height={30} />
                        <p className='vector-text' >More on visual appeal.... </p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img ' src="assets/Images/img2.png" alt="" width={250} height={250} />
                
                </div>
            </div>
            </div>
           
            </div>
   </div>
  
            
   </>  )
}

export default Categories