import React from 'react'
import './Footer.css'
import Circle from '../Circle/Circle'
import useIntersectionObserver from '../useIntersectionObserver ';
import { MdMailOutline } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const elementRef = useIntersectionObserver((element) => {
    element.classList.add('fade-in-up-visible');
  }, {
    threshold: 0.1,
  });
  return (
<>
    <footer className='fade-in-up' ref={elementRef}>
      <Circle/>
      <div className="footer-container d-flex justify-content-between mt-5  text-white"> 
        <div className="footer-left">
        <h1>Logo/Web Name</h1>
        <p className='footer-description mt-5'>The .......... empowers businesses to showcase their offerings with a visually stunning interface and immersive digital experience.</p>
        <div className="footer-follow-icon-box d-flex justify-content-between mt-5">
        <a href=""><img src="assets/Images/insta.png" alt="" /> </a>
        <a href=""><img src="assets/Images/X.png" alt="" /></a>
        <a href=""><img src="assets/Images/web.png" alt="" /></a>
        <a href=""><img src="assets/Images/linkedin.png" alt="" /></a>
        <a href=""><img src="assets/Images/fb.png" alt="" /></a>  
    </div>
         

  
        </div>
        <div className="footer-mid">
          <h3>Home</h3>
          <ul className="list-unstyled mt-5 ">
              <li className="mb-2"><a href="#!" className="footerlist-a ">Home</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Features</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Blog</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Pricing</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">About</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Contact</a></li>
            </ul>
        </div>
        <div className="footer-right">
          <h3>Resources</h3>
          <ul className="list-unstyled mt-5 ">
              <li className="mb-2"><a href="#!" className="footerlist-a">Blog</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Footer</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Events</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Help Centre</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Tutorials</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Support</a></li>
            </ul>
        </div>
        <div className="footer-right">
          <h3>Legal</h3>
          <ul className="list-unstyled mt-5 ">
              <li className="mb-2"><a href="#!" className="footerlist-a">Terms</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Privacy</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Cookies</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Licenses</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Settings</a></li>
            </ul>
        </div>
     
        <div className="footer-right">
          <h3>Utilities Page</h3>
          <ul className="list-unstyled mt-5 ">
              <li className="mb-2"><a href="#!" className="footerlist-a">Register</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Login</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Logout</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">404</a></li>
            </ul>
        </div>
        
      </div>
{/*       
      <div className="footer-contact mt-2 d-flex justify-content-between align-items-center">
          
          <p><MdMailOutline className='footer-contact-icon ' color='white' />
         info@yourwebsite.com</p>
          <p><IoCallOutline className='footer-contact-icon'  />
         +1 (123) 456-7890</p>
          <p><HiOutlineLocationMarker className='footer-contact-icon'  /> 123 Main Street, City, Country</p>
           
        </div>
       */}
      <img className='footer-line' src="assets/Images/line.png" alt=""  />
    
      <div className="text-center py-2 text-white fs-6 fw-light mt-3 mb-4">
        Copyright ©2024 ---------------- All rights reserved
      </div>
    </footer>


</>  )
}

export default Footer