import React from 'react'
import './BlogPostCategories.css'
import FollowUs from '../../FollowUs/FollowUs'
import { IoSearch } from "react-icons/io5";
import useIntersectionObserver from '../../useIntersectionObserver ';

const BlogPostCategories = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.3,
      });
  return (
<>
   <div className="container blogPostCategories-container fade-in-up" ref={elementRef}>
    <div className="row">
        <div className="col">
        <div className="blogPostCategories-heading-container mx-3 d-flex ">
    <h3 className="blogPostCategories-main-heading mb-4">Categories</h3>
    </div>

         <div className="blogPostCategories-container mx-2">
            <div className="blogPostCategory-content d-flex mt-2 text-white">
                <div className="col-6 ">
                    <h5>TECH</h5>
                    <ul  className='blogPostCategory-list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between">
                        <img src="assets/Images/Vector.png" alt="" width={20} height={20} />
                        <p>More on visual appeal</p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-2' src="assets/Images/img4.png" alt="" width={180} height={140} />
                
                </div>
            </div>
            {/* 2nd row */}
            <div className="blogPostCategory-content  d-flex mt-2 text-white">
            <div className="col-6 ">
                <img className='category-img ' src="assets/Images/img1.png" alt="" width={180} height={140} />
                
                </div>
                <div className="col-6   ">
                    <h5 className='mx-4'>TECH</h5>
                    <ul  className='blogPostCategory-list list-unstyled mx-4'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between  mx-4">
                        <img src="assets/Images/Vector.png" alt="" width={20} height={20} />
                        <p  >More on visual... </p>
                    </div>
                </div>
               
            </div>
            {/* 3rd row */}
            <div className="blogPostCategory-content  d-flex mt-2 text-white">
                <div className="col-6 ">
                    <h5>TECH</h5>
                    <ul  className='blogPostCategory-list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between  ">
                        <img src="assets/Images/Vector.png" alt="" width={20} height={20} />
                        <p>More on visual appeal </p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-2' src="assets/Images/img4.png" alt="" width={180} height={140} />
                
                </div>
            </div>
            {/* 4th row */}
            <div className="blogPostCategory-content  d-flex mt-2 text-white">
            <div className="col-6 ">
                <img className='category-img ' src="assets/Images/img1.png" alt="" width={180} height={140} />
                
                </div>
                <div className="col-6   ">
                    <h5 className='mx-4'>TECH</h5>
                    <ul  className='blogPostCategory-list list-unstyled mx-4'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between  mx-4">
                        <img src="assets/Images/Vector.png" alt="" width={20} height={20} />
                        <p  >More on visual... </p>
                    </div>
                </div>
               
            </div>
            {/* 5th row */}
            <div className="blogPostCategory-content d-flex mt-2 text-white">
                <div className="col-6 ">
                    <h5>TECH</h5>
                    <ul  className='blogPostCategory-list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="vector d-flex justify-content-between ">
                        <img src="assets/Images/Vector.png" alt="" width={20} height={20} />
                        <p  >More on visual appeal </p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-3' src="assets/Images/img4.png" alt="" width={180} height={140} />
                
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>

   <FollowUs/>

   <h3 className="trending-main-heading mt-4">Search</h3>
    <div className="search2-bar w-75">
      
              <IoSearch className="search2-icon" />

                <input type="text" id="Search2" className="form-control ps-5 bg-transparent  search2-input" placeholder="Search" />
                </div>
</>
)
}

export default BlogPostCategories