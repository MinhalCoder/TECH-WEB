import FollowUs from '../FollowUs/FollowUs';
import useIntersectionObserver from '../useIntersectionObserver ';
import './ContactUs.css'
import CircleSmall from '../CircleSmall/CircleSmall'
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Faq from "react-faq-component";
import React, { useEffect, useState } from "react";
import { BsLine } from 'react-icons/bs';




const ContactUs = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.1,
      });






// Faq
      const data = {
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };
    
    
    const styles = {
      bgColor: 'transparent',
      titleTextColor: "white",
      rowTitleColor: "white",
      rowContentColor: '#c2c2c2',
      arrowColor: "white",
    
    };
    
    const config = {
      animate: true,
      // arrowIcon: "V",
      tabFocus: true
    };
  return (
    <>
     <div className="fade-in-up" ref={elementRef}>
       <div className="container d-flex justify-content-center align-items-center " >
        <div className="row">
            <div className="col">
                <div className="contactUs d-flex justify-content-center align-items-center ">
                <h1 className='contactUs-heading' >Contact </h1>
                <h1 className='contactUs-Stroke mx-5' >Us</h1>
                </div>
               
            </div>
        </div>
    </div>
 <div className="container form-container">
    <div className="row">
        <div className="col-4">
        <p className='contactUs-content'>We’d Love To Hear From you! Whether You Have a Question, Feedback, Or a Collaboration Idea, Feel Free To Reach Out To Us...</p>
        <div className="contact-icon-box d-flex justify-content-between mt-2">
        <a href=""><img src="assets/Images/insta.png" alt="" /> </a>
        <a href=""><img src="assets/Images/X.png" alt="" /></a>
        <a href=""><img src="assets/Images/web.png" alt="" /></a>
        <a href=""><img src="assets/Images/linkedin.png" alt="" /></a>
        <a href=""><img src="assets/Images/fb.png" alt="" /></a>

    </div>
    <CircleSmall/>
        </div>
        <div className="col-8">
        <form action="">
        <div className="contact-searchbar w-75 mt-4">
                <input type="text" id="newsletterSearch" className="contact-input form-control ps-4 bg-transparent" placeholder="Enter Your Name..." />
              </div>

              <div className="contact-searchbar w-75 mt-3 ">
                <input type="text" id="newsletterSearch" className="contact-input form-control ps-4 bg-transparent" placeholder="Enter Your Email..." />
              </div>

              <div className="text-area">
                <textarea className="contact-text-area mt-3" placeholder="Enter Your Message..." ></textarea>
                <a href="#"  className="btn contact-btn" > Submit  </a>

              </div>

        </form>
        </div>
    </div>
 </div>

 <div className="container">
    <div className="row">
        <div className="col">
        <div className="contact-title d-grid  ">
                <h1 className='text-center'>Reach Out Anytime</h1>
                <h3 className='text-center'> we're here for you</h3>
                </div>
                <div className="contact-cards d-flex  ">
                   <div className="contact-card mx-3 ">
                    <div className="contact-card-item d-flex ">
                    <div className="contact-card-icon">
                    <MdMailOutline  color='white' size={18} />
                    </div>
                    <p className='contactcard-title ' >Message Us</p>
                    </div>
                    <p className='contactcard-title2 '>Support@...</p>
                  
                   </div>
                   <div className="contact-card mx-3 ">
                    <div className="contact-card-item d-flex ">
                    <div className="contact-card-icon">
                    <IoCallOutline  color='white' size={18} />
                    </div>
                    <p className='contactcard-title ' >Call Us</p>
                    </div>
                    <p className='contactcard-title2 '>(400)-000-0000</p>
                  
                   </div>
                   <div className="contact-card mx-3 ">
                    <div className="contact-card-item d-flex ">
                    <div className="contact-card-icon">
                    <HiOutlineLocationMarker   color='white' size={18} />
                    </div>
                    <p className='contactcard-title ' > Location</p>
                    </div>
                    <p className='contactcard-title2 '>.....................................................</p>
                  
                   </div>
                </div>
                <div className="contact-frame">
                    <img src="assets/Images/frame4.png" alt="" />
                </div>
        </div>
    </div>
 </div>
    </div>


    {/* FAQ */}
    <div className="conatiner ">
        <div className="row">
            <div className="col">
                <h1 className='faq-heading'>FAQ</h1>
                <div className="faq-container">
                <Faq  data={data}
                styles={styles}
                config={config} />
                </div>
            </div>
        </div>
    </div>
   
    </>
   
  )
}

export default ContactUs