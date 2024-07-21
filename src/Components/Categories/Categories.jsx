import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./Categories.css";

const Categories = () => {
  return (
   <>
    <div className="categories-heading-container mx-3 d-flex ">
    <h1 className="Categories-main-heading mb-lg-5">Categories</h1>
<BsArrowRightCircleFill className="categories-right-arrow-icon   mt-3" color="white" size="2em" />
    </div>

         <div className="categories-container mx-2">
            <div className="category-content d-flex mt-5 text-white">
                <div className="col-6 ">
                    <h3>TECH</h3>
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between mt-5">
                        <img src="src/assets/Images/vector.png" alt="" width={20} height={20} />
                        <p>More on visual appeal</p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-5' src="src/assets/Images/img2.png" alt="" width={220} height={250} />
                
                </div>
            </div>
            {/* 2nd row */}
            <div className="category-content d-flex mt-5 text-white">
            <div className="col-6 ">
                <img className='category-img' src="src/assets/Images/img1.png" alt="" width={220} height={250} />
                
                </div>
                <div className="col-6  mx-5">
                    <h3>TECH</h3>
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between mt-5">
                        <img src="src/assets/Images/vector.png" alt="" width={20} height={20} />
                        <p>More on visual appeal</p>
                    </div>
                </div>
               
            </div>
            {/* 3rd row */}
            <div className="category-content d-flex mt-5 text-white">
                <div className="col-6 ">
                    <h3>TECH</h3>
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between mt-5">
                        <img src="src/assets/Images/vector.png" alt="" width={20} height={20} />
                        <p>More on visual appeal</p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-5' src="src/assets/Images/img2.png" alt="" width={220} height={250} />
                
                </div>
            </div>
            {/* 4th row */}
            <div className="category-content d-flex mt-5 text-white">
            <div className="col-6 ">
                <img className='category-img' src="src/assets/Images/img1.png" alt="" width={220} height={250} />
                
                </div>
                <div className="col-6  mx-5">
                    <h3>TECH</h3>
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between mt-5">
                        <img src="src/assets/Images/vector.png" alt="" width={20} height={20} />
                        <p>More on visual appeal</p>
                    </div>
                </div>
               
            </div>
            {/* 5th row */}
            <div className="category-content d-flex mt-5 text-white">
                <div className="col-6 ">
                    <h3>TECH</h3>
                    <ul  className='list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between mt-5">
                        <img src="src/assets/Images/vector.png" alt="" width={20} height={20} />
                        <p>More on visual appeal</p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-5' src="src/assets/Images/img2.png" alt="" width={220} height={250} />
                
                </div>
            </div>
            </div>
   </>  )
}

export default Categories