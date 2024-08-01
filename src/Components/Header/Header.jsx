import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { HiMenu } from "react-icons/hi"; // Add this for menu icon
import NavItem from "../../NavItem.jsx";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [showMenu, setShowMenu] = useState(false);
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

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="container-fluid frame w-100">
        <header className="header">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between py-3 header-items">
              <div className="d-flex align-items-center">
                <h5 className="text-white font-weight-semibold">Logo/Name</h5>
              </div>

              <button className="navbar-toggler d-md-none" onClick={handleMenuToggle}>
                <HiMenu className="navbar-toggler-icon" />
              </button>

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

              <div className={`searchbar ${showMenu ? 'd-none' : ''}`}>
                <IoSearch className="search-icon" />
                <input
                  type="text"
                  id="Search"
                  className="form-control ps-5 bg-transparent search-input"
                  placeholder="Search"
                />
              </div>

              {showMenu && (
                <div className="mobile-menu d-md-none">
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
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
