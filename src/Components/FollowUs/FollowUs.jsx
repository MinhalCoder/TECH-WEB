import React from 'react'
import './FollowUs.css'


const FollowUs = () => {
  return (

    <>
     <div className="followus-heading-container d-flex  mt-3 ">
    <h2 className="followus-main-heading">Follow Us</h2>
    </div> 

    <div className="follow-icon-box d-flex justify-content-between mt-4">
        <a href=""><img src="/src/assets/Images/insta.png" alt="" /> </a>
        <a href=""><img src="/src/assets/Images/X.png" alt="" /></a>
        <a href=""><img src="/src/assets/Images/web.png" alt="" /></a>
        <a href=""><img src="/src/assets/Images/linkedin.png" alt="" /></a>
        <a href=""><img src="/src/assets/Images/fb.png" alt="" /></a>
        
    </div>
    </>
   
    
)
}

export default FollowUs