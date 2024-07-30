import useIntersectionObserver from '../../useIntersectionObserver ';
import './Share.css'

const Share = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.1,
      });
      return (
    
        <>
    
         <div className="share-heading-container d-flex  mt-3 fade-in-up " ref={elementRef}>
        <h2 className="share-main-heading">Share</h2>
        </div> 
        <div className="share-icon-box d-flex justify-content-between mt-4">
            <a href=""><img src="assets/Images/insta.png" alt="" /> </a>
            <a href=""><img src="assets/Images/X.png" alt="" /></a>
            <a href=""><img src="assets/Images/web.png" alt="" /></a>
            <a href=""><img src="assets/Images/linkedin.png" alt="" /></a>
            <a href=""><img src="assets/Images/fb.png" alt="" /></a>
            <a href=""><img src="assets/Images/share.png" alt="" /></a>
    
        </div>
    
        </>
       
        
    )
    }
    

export default Share