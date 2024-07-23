import React from "react";
import Carousel from "../Carousel/Carousel.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import LatestPosts from "../LatestPosts/LatestPosts.jsx";
import Categories from "../Categories/Categories.jsx";
import EditorsPicks from "../EditorsPicks/EditorsPicks.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import FollowUs from "../FollowUs/FollowUs.jsx";
import Trending from "../Trending/Trending.jsx";
import Footer from "../Footer/Footer.jsx";
import Circle from "../Circle/Circle.jsx";
import CircleSmall from "../CircleSmall/CircleSmall.jsx";



const Header = () => {
  return (
    <>
      <div className="container-fluid frame w-100">
        <header className="header">
          <div className="container ">
            <div className="d-flex align-items-center justify-content-between py-3 header-items">
              <div className="d-flex align-items-center ">
                
                <h5 className="text-white font-weight-semibold ">Logo/Name</h5>
              </div>

              <div className="d-none d-md-block">
                <nav aria-label="Global  ">
                  <ul className="nav">
                    <li className="nav-item ">
                      <a className="nav-link font-weight-semibold text-white home" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link font-weight-semibold text-white" href="#">
                        Posts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link font-weight-semibold text-white" href="#">
                        About us
                      </a>
                    </li>
                    <li className="nav-item contact">
                      <a className="nav-link font-weight-semibold text-white" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                  {/* Lines on the left and right */}
                  <div className="line left"></div>
                  <div className="line right"></div>
                </nav>
              </div>
              {/* <div className="searchbar "> 
              <IoSearch className="search-icon" />
                <input type="text" id="Search" className="form-control ps-5 bg-transparent input" placeholder="Search" />
              </div> */}
              <div className="searchbar">
      
      <IoSearch className="search-icon"  />

        <input type="text" id="Search" className="form-control ps-5 bg-transparent  search-input" placeholder="Search" />
        </div>
            </div>
          </div>
        </header>
<div className="home-page">
  
</div>
  
        <Carousel />

      </div>





      <div className="container frame-container py-5">

        <div className="row">

          <div className="col-6">

          <LatestPosts/>
          
          <Categories/>
          

          </div>
          
          <div className="col-6 ">
          <Circle/>

          <EditorsPicks/>
          <AboutUs/>
          <FollowUs/>
          <Trending/>
          


          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
