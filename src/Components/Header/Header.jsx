import React from "react";
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
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavItem from "../../NavItem.jsx";


const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveLink('Home');
        break;
      case '/BlogPostPage':
        setActiveLink('Posts');
        break;
      case '/aboutus':
        setActiveLink('About us');
        break;
      case '/contactus':
        setActiveLink('Contact');
        break;
      default:
        setActiveLink('');
    }
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/BlogPostPage', label: 'Posts' },
    { to: '/aboutus', label: 'About us' },
    { to: '/contactus', label: 'Contact' },
  ];
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
              <nav aria-label="Global">
      <ul className="nav">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            to={item.to}
            label={item.label}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </ul>
     
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



  
       </div> 
    </>
  );
};

export default Header;
