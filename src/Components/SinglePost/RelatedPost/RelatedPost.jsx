import React from 'react'
import './RelatedPost.css'
import useIntersectionObserver from '../../useIntersectionObserver ';


const RelatedPost = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.1,
      });
  return (
<>
<div className="container">
    <div className="row">
        <div className="col">
        <div className="relatedpost-heading-container d-flex  mt-3 fade-in-up " ref={elementRef}>
        <h2 className="relatedpost-main-heading">Related Posts</h2>
        </div> 

        <div className="relatedpost-container mt-4 d-flex ">
            <div className="relatedpost-post1 ">
            <div className="relatedpost-img d-flex">
                                <img src="assets/Images/img1.png" alt="" width={140} height={140}/>
                            </div>
                            <div className="relatedpost1-title">
                                <p className="relatedpost1-title-heading mt-4  fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={140} alt="" />      
                            </div>
                            <div className="relatedpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={24} height={24} />
    <div className="relatedpost1-author-info mx-2">
        <p className='relatedpost1-author '>Leslie Alexander</p>
        <p className='relatedpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='relatedpost1-arrow-icon' alt="" width={24} height={24} />
</div>


            </div>

            {/* 2nd Post */}

            <div className="relatedpost-post2">
            <div className="relatedpost-img d-flex">
                                <img src="assets/Images/img3.png" alt="" width={140} height={140}/>
                            </div>
                            <div className="relatedpost1-title">
                                <p className="relatedpost1-title-heading mt-4  fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={140} alt="" />      
                            </div>
                            <div className="relatedpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={24} height={24} />
    <div className="relatedpost1-author-info mx-2">
        <p className='relatedpost1-author '>Leslie Alexander</p>
        <p className='relatedpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='relatedpost1-arrow-icon' alt="" width={25} height={24} />
</div>

            </div>
         </div>
           {/* post 3&4 */}
           <div className="relatedpost-container mt-4 d-flex ">
            <div className="relatedpost-post1 ">
            <div className="relatedpost-img d-flex">
                                <img src="assets/Images/img3.png" alt="" width={140} height={140}/>
                            </div>
                            <div className="relatedpost1-title">
                                <p className="relatedpost1-title-heading mt-4  fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={140} alt="" />      
                            </div>
                            <div className="relatedpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={24} height={24} />
    <div className="relatedpost1-author-info mx-2">
        <p className='relatedpost1-author '>Leslie Alexander</p>
        <p className='relatedpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='relatedpost1-arrow-icon' alt="" width={25} height={24} />
</div>

            </div>

            {/* 4th Post */}

            <div className="relatedpost-post2">
            <div className="relatedpost-img d-flex">
                                <img src="assets/Images/img1.png" alt="" width={140} height={140}/>
                            </div>
                            <div className="relatedpost1-title">
                                <p className="relatedpost1-title-heading mt-4  fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={140} alt="" />      
                            </div>
                            <div className="relatedpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={24} height={24} />
    <div className="relatedpost1-author-info mx-2">
        <p className='relatedpost1-author '>Leslie Alexander</p>
        <p className='relatedpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='relatedpost1-arrow-icon' alt="" width={25} height={24} />
</div>



            </div>

            
         </div>
{/* 5th post */}
         <div className="relatedpost-container mt-4 d-flex ">
            <div className="relatedpost-post1 ">
            <div className="relatedpost-img d-flex">
                                <img src="assets/Images/img1.png" alt="" width={140} height={140}/>
                            </div>
                            <div className="relatedpost1-title">
                                <p className="relatedpost1-title-heading mt-4  fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={140} alt="" />      
                            </div>
                            <div className="relatedpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={24} height={24} />
    <div className="relatedpost1-author-info mx-2">
        <p className='relatedpost1-author '>Leslie Alexander</p>
        <p className='relatedpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='relatedpost1-arrow-icon' alt="" width={24} height={24} />
</div>


            </div>

            {/* 6th Post */}

            <div className="relatedpost-post2">
            <div className="relatedpost-img d-flex">
                                <img src="assets/Images/img3.png" alt="" width={140} height={140}/>
                            </div>
                            <div className="relatedpost1-title">
                                <p className="relatedpost1-title-heading mt-4  fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="assets/Images/line.png" width={140} alt="" />      
                            </div>
                            <div className="relatedpost1-author-sec d-flex  text-white">
    <img src="assets/Images/author1.png" alt="Author" width={24} height={24} />
    <div className="relatedpost1-author-info mx-2">
        <p className='relatedpost1-author '>Leslie Alexander</p>
        <p className='relatedpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow2.png" className='relatedpost1-arrow-icon' alt="" width={25} height={24} />
</div>

            </div>
         </div>

         
        </div>
    
    </div>
</div>
</>
)
}

export default RelatedPost