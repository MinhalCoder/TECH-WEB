import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import './BlogLatestPost.css'
import useIntersectionObserver from '../../useIntersectionObserver ';


const BlogLatestPost = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.1,
      });
  return (
   <div className="container fade-in-up" ref={elementRef}>
    <div className="row">
        <div className="col">
        <div className="heading-container d-flex ">
                        <h1 className="blog-latestpost-main-heading">Latest Posts</h1>
            <BsArrowRightCircleFill className="blog-latestpost-right-arrow-icon   mt-3" color="white" size="2em" />
                        </div>

                        <div className="blog-latestposts mt-5">
                            <div className="blog-latestpost-img-main">
                                <img  src="assets/Images/img1.png" alt="" width={999} height={444} />
                            </div>
                            <div className="blog-latestpost-title">
                                <p className="blog-latestpost-title-heading mt-4 fs-3 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={999} alt="" />      
                            </div>

                            <div className="blog-latestpost-author-sec d-flex text-white">
    <img src="assets/Images/author1.png" alt="Author" width={50} />
    <div className="author-info">
        <p >Leslie Alexander</p>
        <p className='author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow-btn.png" className='blog-latestpost-arrow-icon' alt="" width={50} />
</div>

         <div className="blog-latestpost-container mt-4 d-flex justify-content-between">
            <div className="blog-latestpost-post1 ">
            <div className="blog-latestpost-img d-flex">
                                <img src="assets/Images/img1.png" alt="" width={450} height={300}/>
                            </div>
                            <div className="blog-latestpost1-title">
                                <p className="blog-latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={450} alt="" />      
                            </div>
                            <div className="blog-latestpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blog-latestpost1-author-info mx-2">
        <p className='blog-latestpost1-author '>Leslie Alexander</p>
        <p className='blog-latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blog-latestpost1-arrow-icon' alt="" width={25} height={30} />
</div>


            </div>

            {/* 2nd Post */}

            <div className="blog-latestpost-post2">
            <div className="blog-latestpost-img d-flex">
                                <img src="assets/Images/img2.png" alt="" width={450} height={300}/>
                            </div>
                            <div className="blog-latestpost1-title">
                                <p className="blog-latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={450} alt="" />      
                            </div>
                            <div className="blog-latestpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blog-latestpost1-author-info mx-2">
        <p className='blog-latestpost1-author '>Leslie Alexander</p>
        <p className='blog-latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blog-latestpost1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>
         </div>
           {/* post 3&4 */}
           <div className="blog-latestpost-container mt-4 d-flex justify-content-between">
            <div className="blog-latestpost-post1 ">
            <div className="blog-latestpost-img d-flex">
                                <img src="assets/Images/img2.png" alt="" width={450} height={300}/>
                            </div>
                            <div className="blog-latestpost1-title">
                                <p className="blog-latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={450} alt="" />      
                            </div>
                            <div className="blog-latestpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blog-latestpost1-author-info mx-2">
        <p className='blog-latestpost1-author '>Leslie Alexander</p>
        <p className='blog-latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blog-latestpost1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>

            {/* 4th Post */}

            <div className="blog-latestpost-post2">
            <div className="blog-latestpost-img d-flex">
                                <img src="assets/Images/img1.png" alt="" width={450} height={300}/>
                            </div>
                            <div className="blog-latestpost1-title">
                                <p className="blog-latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={450} alt="" />      
                            </div>
                            <div className="blog-latestpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blog-latestpost1-author-info mx-2">
        <p className='blog-latestpost1-author '>Leslie Alexander</p>
        <p className='blog-latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blog-latestpost1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>
         </div>

                        </div>
        </div>
    </div>
   </div>
)
}

export default BlogLatestPost