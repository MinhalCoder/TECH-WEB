import React from 'react'
import './Footer.css'
import Circle from '../Circle/Circle'

const Footer = () => {
  return (
<>
    <footer>
      <Circle/>
      <div className="footer-container d-flex justify-content-between mt-5  text-white"> 
        <div className="footer-left">
        <h3>Logo/Web Name</h3>
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
          <h3>Utilities Page</h3>
          <ul className="list-unstyled mt-5 ">
              <li className="mb-2"><a href="#!" className="footerlist-a">Register</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">Login</a></li>
              <li className="mb-2"><a href="#!" className="footerlist-a">404</a></li>
            </ul>
        </div>
      </div>

      <div className="text-center py-2 text-white fs-6 fw-light mt-3">
        Copyright ©2024 ----------------
      </div>
    </footer>


</>  )
}

export default Footer