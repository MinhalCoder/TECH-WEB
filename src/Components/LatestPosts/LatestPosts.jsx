import { BsArrowRightCircleFill } from "react-icons/bs";
import "./LatestPosts.css";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import useIntersectionObserver from "../useIntersectionObserver ";


// Custom hook for detecting window width
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

const LatestPosts = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
    }, {
        threshold: 0.1,
    });

    const windowWidth = useWindowWidth(); // Use the custom hook to get window width
    const isMobileView = windowWidth <= 767; // Define your breakpoint for responsive view

    return (
        <>
            <Link className="text-decoration-none" to={"/SinglePostPage"}>
                <div className="container fade-in-up" ref={elementRef}>
                    <div className="row">
                        <div className="col">
                            <div className="latestposts-heading-container d-flex align-items-center">
                                <h1 className="latestpost-main-heading">Latest Posts</h1>
                                <BsArrowRightCircleFill className="latestpost-right-arrow-icon" color="white" size="2em" />
                            </div>

                            <div className="latestposts mt-5">
                                <div className="latestpost-img-main">
                                    <img src="assets/Images/img1.png" alt="" width={450} />
                                </div>
                                <div className="latestpost-title">
                                    <p className="latestpost-title-heading mt-4 fs-3 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                    <img src="assets/Images/line.png" width={444} alt="" />
                                </div>

                                <div className="latestpost-author-sec d-flex text-white">
                                    <img src="assets/Images/author1.png" alt="Author" width={50} />
                                    <div className="author-info">
                                        <p>Leslie Alexander</p>
                                        <p className='author-info-date'>Ceo / April 22, 2024</p>
                                    </div>
                                    <img src="assets/Images/arrow-btn.png" className='latestpost-arrow-icon' alt="" width={50} />
                                </div>

                                {isMobileView ? (
                                    <div className="marquee-container">
                                        <Marquee>
                                            <div className="latestpost-container mt-4 d-flex">
                                                <div className="latestpost-post1">
                                                    <div className="latestpost-img d-flex">
                                                        <img src="assets/Images/img1.png" alt="" width={180} height={180} />
                                                    </div>
                                                    <div className="latestpost1-title">
                                                        <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                                        <img src="assets/Images/line.png" width={180} alt="" />
                                                    </div>
                                                    <div className="latestpost1-author-sec d-flex text-white">
                                                        <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
                                                        <div className="latestpost1-author-info mx-2">
                                                            <p className='latestpost1-author'>Leslie Alexander</p>
                                                            <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
                                                        </div>
                                                        <img src="assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
                                                    </div>
                                                </div>

                                                {/* 2nd Post */}
                                                <div className="latestpost-post2">
                                                    <div className="latestpost-img d-flex">
                                                        <img src="assets/Images/img2.png" alt="" width={180} height={180} />
                                                    </div>
                                                    <div className="latestpost1-title">
                                                        <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                                        <img src="assets/Images/line.png" width={180} alt="" />
                                                    </div>
                                                    <div className="latestpost1-author-sec d-flex text-white">
                                                        <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
                                                        <div className="latestpost1-author-info mx-2">
                                                            <p className='latestpost1-author'>Leslie Alexander</p>
                                                            <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
                                                        </div>
                                                        <img src="assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* post 3&4 */}
                                            <div className="latestpost-container mt-4 d-flex">
                                                <div className="latestpost-post1">
                                                    <div className="latestpost-img d-flex">
                                                        <img src="assets/Images/img2.png" alt="" width={180} height={180} />
                                                    </div>
                                                    <div className="latestpost1-title">
                                                        <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                                        <img src="assets/Images/line.png" width={180} alt="" />
                                                    </div>
                                                    <div className="latestpost1-author-sec d-flex text-white">
                                                        <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
                                                        <div className="latestpost1-author-info mx-2">
                                                            <p className='latestpost1-author'>Leslie Alexander</p>
                                                            <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
                                                        </div>
                                                        <img src="assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
                                                    </div>
                                                </div>

                                                {/* 4th Post */}
                                                <div className="latestpost-post2">
                                                    <div className="latestpost-img d-flex">
                                                        <img src="assets/Images/img1.png" alt="" width={180} height={180} />
                                                    </div>
                                                    <div className="latestpost1-title">
                                                        <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                                        <img src="assets/Images/line.png" width={180} alt="" />
                                                    </div>
                                                    <div className="latestpost1-author-sec d-flex text-white">
                                                        <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
                                                        <div className="latestpost1-author-info mx-2">
                                                            <p className='latestpost1-author'>Leslie Alexander</p>
                                                            <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
                                                        </div>
                                                        <img src="assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Marquee>
                                    </div>
                                ) : (
                                    <div className="latestpost-container mt-4 d-flex">
                                        <div className="latestpost-post1">
                                            <div className="latestpost-img d-flex">
                                                <img src="assets/Images/img1.png" alt="" width={180} height={180} />
                                            </div>
                                            <div className="latestpost1-title">
                                                <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                                <img src="assets/Images/line.png" width={180} alt="" />
                                            </div>
                                            <div className="latestpost1-author-sec d-flex text-white">
                                                <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
                                                <div className="latestpost1-author-info mx-2">
                                                    <p className='latestpost1-author'>Leslie Alexander</p>
                                                    <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
                                                </div>
                                                <img src="assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
                                            </div>
                                        </div>

                                        {/* 2nd Post */}
                                        <div className="latestpost-post2">
                                            <div className="latestpost-img d-flex">
                                                <img src="assets/Images/img2.png" alt="" width={180} height={180} />
                                            </div>
                                            <div className="latestpost1-title">
                                                <p className="latestpost1-title-heading mt-4 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipiscing... </p>
                                                <img src="assets/Images/line.png" width={180} alt="" />
                                            </div>
                                            <div className="latestpost1-author-sec d-flex text-white">
                                                <img src="assets/Images/author1.png" alt="Author" width={30} height={30} />
                                                <div className="latestpost1-author-info mx-2">
                                                    <p className='latestpost1-author'>Leslie Alexander</p>
                                                    <p className='latestpost1-author-info-date'>Ceo / April 22, 2024</p>
                                                </div>
                                                <img src="assets/Images/arrow2.png" className='latestpost1-arrow-icon' alt="" width={25} height={30} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default LatestPosts;
