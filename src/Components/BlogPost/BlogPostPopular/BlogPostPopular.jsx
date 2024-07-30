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
        <div className="col-6">
        <div className="blogPostPoular-heading-container d-flex ">
                        <h2 className="blogPostPopular-main-heading ">Popular Posts</h2>
            <BsArrowRightCircleFill className="blogPopular-right-arrow-icon   mt-3" color="white" size="2em" />
                        </div>

                        <div className="blogPostPopular mt-5">
                            <div className="latestpost-img-main">
                                <img  src="assets/Images/img2.png" alt="" width={450} height={300}/>
                            </div>
                            <div className="latestpost-title">
                                <p className="latestpost-title-heading mt-4 fs-3 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={444} alt="" />      
                            </div>

                            <div className="latestpost-author-sec d-flex text-white">
    <img src="assets/Images/author1.png" alt="Author" width={50} />
    <div className="author-info">
        <p >Leslie Alexander</p>
        <p className='author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow-btn.png" className='latestpost-arrow-icon' alt="" width={50} />
</div>

         <div className="latestpost-container mt-4 d-flex justify-content-between">
            <div className="latestpost-post1 ">
            <div className="latestpost-img d-flex">
                                <img src="assets/Images/img1.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={25} height={30} />
</div>


            </div>

            {/* 2nd Post */}

            <div className="latestpost-post2">
            <div className="latestpost-img d-flex">
                                <img src="assets/Images/img4.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>
         </div>
           {/* post 3&4 */}
           <div className="latestpost-container mt-4 d-flex justify-content-between">
            <div className="latestpost-post1 ">
            <div className="latestpost-img d-flex">
                                <img src="assets/Images/img4.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>

            {/* 4th Post */}

            <div className="latestpost-post2">
            <div className="latestpost-img d-flex">
                                <img src="assets/Images/img2.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="blogPostPopular1-title">
                                <p className="blogPostPopular1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="blogPostPopular1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="blogPostPopular1-author-info mx-2">
        <p className='blogPostPopular1-author '>Leslie Alexander</p>
        <p className='blogPostPopular1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='blogPostPopular1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>
         </div>

                        </div>
        </div>

        {/* Categories */}
        <div className="col-6">
         <BlogPostCategories/>
        </div>
    </div>
   </div>
</>
  )
}

export default BlogPostPopular