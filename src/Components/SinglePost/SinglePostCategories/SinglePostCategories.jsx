import React from 'react'
import './SinglePostCategories.css'
import useIntersectionObserver from '../../useIntersectionObserver ';



const SinglePostCategories = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.3,
      });
  return (
<>
<div className="container">
    <div className="row">
        <div className="col">
        <div className="container blogPostCategories-container fade-in-up" ref={elementRef}>
    <div className="row">
        <div className="col">
        <div className="singlePostCategories-heading-container mx-3 d-flex ">
    <h3 className="singlePostCategories-main-heading mb-4">Categories</h3>
    </div>

         <div className="singlePostCategories-container mx-2">
            <div className="singlePostCategory-content d-flex mt-2 text-white">
                <div className="col-6 ">
                    <h5>TECH</h5>
                    <ul  className='singlePostCategory-list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="singlepost-vector d-flex ">
                        <img src="assets/Images/Vector.png" alt="" width={15} height={15} />
                        <p>More on visual appeal</p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-2' src="assets/Images/img4.png" alt="" width={140} height={140} />
                
                </div>
            </div>
            {/* 2nd row */}
            <div className="singlePostCategory-content  d-flex mt-2 text-white">
            <div className="col-6 ">
                <img className='category-img ' src="assets/Images/img1.png" alt="" width={140} height={140} />
                
                </div>
                <div className="col-6   ">
                    <h5 className='mx-4'>TECH</h5>
                    <ul  className='singlePostCategory-list list-unstyled mx-4'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="singlepost-vector d-flex  ">
                        <img className='singlePost-vector-img' src="assets/Images/Vector.png" alt="" width={15} height={15} />
                        <p  >More on visual... </p>
                    </div>
                </div>
               
            </div>
            {/* 3rd row */}
            <div className="singlePostCategory-content  d-flex mt-2 text-white">
                <div className="col-6 ">
                    <h5>TECH</h5>
                    <ul  className='singlePostCategory-list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="singlepost-vector d-flex   ">
                        <img src="assets/Images/Vector.png" alt="" width={15} height={15} />
                        <p>More on visual appeal </p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-2' src="assets/Images/img4.png" alt="" width={140} height={140} />
                
                </div>
            </div>
            {/* 4th row */}
            <div className="singlePostCategory-content  d-flex mt-2 text-white">
            <div className="col-6 ">
                <img className='category-img ' src="assets/Images/img1.png" alt="" width={140} height={140} />
                
                </div>
                <div className="col-6   ">
                    <h5 className='mx-4'>TECH</h5>
                    <ul  className='singlePostCategory-list list-unstyled mx-4'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="singlepost-vector d-flex ">
                        <img className='singlePost-vector-img' src="assets/Images/Vector.png" alt="" width={15} height={15} />
                        <p  >More on visual... </p>
                    </div>
                </div>
               
            </div>
            {/* 5th row */}
            <div className="singlePostCategory-content d-flex mt-2 text-white">
                <div className="col-6 ">
                    <h5>TECH</h5>
                    <ul  className='singlePostCategory-list list-unstyled'>
                        <li>Lorem ipsum</li>
                        <li>Lorem ips</li>
                        <li>Lorem ip</li>
                        <li>Lorem ip</li>
                       
                    </ul>
                    <div className="singlepost-vector d-flex  ">
                        <img src="assets/Images/Vector.png" alt="" width={15} height={15} />
                        <p  >More on visual appeal </p>
                    </div>
                </div>
                <div className="col-6 ">
                <img className='category-img mx-3' src="assets/Images/img4.png" alt="" width={140} height={140} />
                
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
        </div>
    </div>
</div>

</>
)
}

export default SinglePostCategories