import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./Trending.css";
import { IoSearch } from "react-icons/io5";
import Circle from '../Circle/Circle';
import CircleSmall from '../CircleSmall/CircleSmall';
import useIntersectionObserver from '../useIntersectionObserver ';



const Trending = () => {
  const elementRef = useIntersectionObserver((element) => {
    element.classList.add('fade-in-up-visible');
  }, {
    threshold: 0.2,
  });
  return (

<>
   <div className="fade-in-up" ref={elementRef}>
   <div className="trending-heading-container d-flex  ">
    <h1 className="trending-main-heading">Trending Posts</h1>
<BsArrowRightCircleFill className="trending-right-arrow-icon   mt-3" color="white" size="2em" />
    </div>
    <div className="trending-posts-container">
        <div className="trending-post mt-3 ">
           <img src="assets/Images/img4.png" alt="" width={400} />
           <h5 className='text-white fw-light mt-4 mx-2'>Start developing</h5>
           <p  >Starting to develop idea is always the hardest part but it's also very exciting.</p>
           <a href="#"  className="btn trending-btn my-2 me-2 w-100 " > Button  </a>

        </div>

        <div className="trending-post mt-4 ">
           <img src="assets/Images/img4.png" alt="" width={400} />
           <h5 className='text-white fw-light mt-4 mx-2'>Start developing</h5>
           <p  >Starting to develop idea is always the hardest part but it's also very exciting.</p>
           <a href="#"  className="btn trending-btn my-2 me-2 w-100 " > Button  </a>

        </div>
    </div>

   </div>


    <CircleSmall/>

    <h3 className="trending-main-heading mt-4">Search</h3>
    <div className="search2-bar search2bar-bg w-75">
      
              <IoSearch className="search2-icon" />

                <input type="text" id="Search2" className="form-control ps-5 bg-transparent  search2-input" placeholder="Search" />
                </div>

      

</>)
}

export default Trending