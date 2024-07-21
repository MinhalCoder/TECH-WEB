import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./LatestPosts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditorsPicks from '../EditorsPicks/EditorsPicks';
import AboutUs from '../AboutUs/AboutUs';

const LatestPosts = () => {
  return (
<>

            <div className="container  ">
                <div className="row">
                    <div className="col-6">
                        <div className="heading-container d-flex ">
                        <h1 className="latestpost-main-heading">Latest Posts</h1>
            <BsArrowRightCircleFill className="latestpost-right-arrow-icon   mt-3" color="white" size="2em" />
                        </div>

                        <div className="latestposts mt-5">
                            <div className="latestpost-img-main">
                                <img  src="src/assets/Images/img1.png" alt="" width={450}/>
                            </div>
                            <div className="latestpost-title">
                                <p className="latestpost-title-heading mt-4 fs-3 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="src/assets/Images/line.png" width={444} alt="" />      
                            </div>

                            <div className="latestpost-author-sec d-flex text-white">
    <img src="src/assets/Images/author1.png" alt="Author" width={50} />
    <div className="author-info">
        <p >Leslie Alexander</p>
        <p className='author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="src/assets/Images/arrow-btn.png" className='latestpost-arrow-icon' alt="" width={50} />
</div>

         <div className="latestpost-container mt-4 d-flex justify-content-between">
            <div className="latestpost-post1 ">
            <div className="latestpost-img d-flex">
                                <img src="src/assets/Images/img1.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="latestpost1-title">
                                <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="src/assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="latestpost1-author-sec d-flex  text-white">
    <img src="src/assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="latestpost1-author-info mx-2">
        <p className='latestpost1-author '>Leslie Alexander</p>
        <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="src/assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
</div>


            </div>

            {/* 2nd Post */}

            <div className="latestpost-post2">
            <div className="latestpost-img d-flex">
                                <img src="src/assets/Images/img2.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="latestpost1-title">
                                <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="src/assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="latestpost1-author-sec d-flex  text-white">
    <img src="src/assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="latestpost1-author-info mx-2">
        <p className='latestpost1-author '>Leslie Alexander</p>
        <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="src/assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>
         </div>
           {/* post 3&4 */}
           <div className="latestpost-container mt-4 d-flex justify-content-between">
            <div className="latestpost-post1 ">
            <div className="latestpost-img d-flex">
                                <img src="src/assets/Images/img2.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="latestpost1-title">
                                <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="src/assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="latestpost1-author-sec d-flex  text-white">
    <img src="src/assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="latestpost1-author-info mx-2">
        <p className='latestpost1-author '>Leslie Alexander</p>
        <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="src/assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
</div>

            </div>

            {/* 4th Post */}

            <div className="latestpost-post2">
            <div className="latestpost-img d-flex">
                                <img src="src/assets/Images/img1.png" alt="" width={180} height={180}/>
                            </div>
                            <div className="latestpost1-title">
                                <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                <img src="src/assets/Images/line.png" width={180} alt="" />      
                            </div>
                            <div className="latestpost1-author-sec d-flex  text-white">
    <img src="src/assets/Images/author1.png" alt="Author" width={30} height={30} />
    <div className="latestpost1-author-info mx-2">
        <p className='latestpost1-author '>Leslie Alexander</p>
        <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="src/assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
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

export default LatestPosts