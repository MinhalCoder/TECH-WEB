import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import './BlogPostPopular.css'
import BlogPostCategories from '../BlogPostCategories/BlogPostCategories';
import useIntersectionObserver from '../../useIntersectionObserver ';

const BlogPostPopular = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.1,
      });
  return (
<>
   <div className="container mt-5  fade-in-up " ref={elementRef} >
    <div className="row d-flex align-items-center justify-content-between">
        <div className="col-7">
        <div className="blogPostPoular-heading-container d-flex ">
                        <h2 className="blogpost-main-heading ">Popular Posts</h2>
            <BsArrowRightCircleFill className="blogPopular-right-arrow-icon   mt-3" color="white" size="3em" />
                        </div>

                        <div className="blogPostPopular mt-5">
                            <div className="blogpost-img-main">
                                <img  src="assets/Images/img2.png" alt="" />
                            </div>
                            <div className="blogpost-title">
                                <p className="blogpost-title-heading mt-4 fs-3 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img className='w-100' src="assets/Images/line.png"  alt="" />      
                            </div>

                            <div className="blogpost-author-sec d-flex text-white">
    <img src="assets/Images/author1.png" alt="Author" width={80} />
    <div className="blogpost-author-info">
        <p className='fs-4'>Leslie Alexander</p>
        <p className='blogpost-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow-btn.png" className='blogpost-arrow-icon' alt="" width={50} />
</div>

         <div className="blogpost-container mt-4 d-flex justify-content-between">
            <div className="blogpost-post1 ">
            <div className="blogpost-img d-flex">
                                <img src="assets/Images/img1.png" alt="" width={270} height={270}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={270} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={50} height={50} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={35} height={35} />
</div>


            </div>

            {/* 2nd Post */}

            <div className="blogpost-post2">
            <div className="blogpost-img d-flex">
                                <img src="assets/Images/img4.png" alt="" width={270} height={270}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={270} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={50} height={50} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={35} height={35} />
</div>

            </div>
         </div>
           {/* post 3&4 */}
           <div className="blogpost-container mt-4 d-flex justify-content-between">
            <div className="blogpost-post1 ">
            <div className="blogpost-img d-flex">
                                <img src="assets/Images/img4.png" alt="" width={270} height={270}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={270} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={50} height={50} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={35} height={35} />
</div>

            </div>

            {/* 4th Post */}

            <div className="blogpost-post2">
            <div className="blogpost-img d-flex">
                                <img src="assets/Images/img2.png" alt="" width={270} height={270}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={270} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={50} height={50} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={35} height={35} />
</div>

            </div>
         </div>

                        </div>
        </div>

        {/* Categories */}
        <div className="col-5">
         <BlogPostCategories/>
        </div>
    </div>
   </div>
</>
  )
}

export default BlogPostPopular