import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header3.css";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";



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
                      <Link to={"/BlogPostPage"} className="nav-link font-weight-semibold text-white" href="#">
                        Posts
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link  to={"/aboutus"} className="nav-link font-weight-semibold text-white" href="#">
                        About us
                      </Link>
                    </li>
                    <li className="nav-item contact">
                      <Link to={"/contactus"} className="nav-link font-weight-semibold text-white" href="#">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  {/* Lines on the left and right */}
                  <div className="header3-line left"></div>
                  <div className="header3-line right"></div>
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
