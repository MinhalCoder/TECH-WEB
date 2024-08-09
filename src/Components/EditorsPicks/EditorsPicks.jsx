import React from 'react'
import './EditorsPicks.css'
import AboutUs from '../AboutUs/AboutUs'
import useIntersectionObserver from '../useIntersectionObserver ';

const EditorsPicks = () => {
    const elementRef = useIntersectionObserver((element) => {
        element.classList.add('fade-in-up-visible');
      }, {
        threshold: 0.3,
      });
  return (

    <>
     <div className="editorspicks-posts fade-in-up" ref={elementRef}>
                <div className="editorspicks-post-container">
                <h2 className="editorspicks-main-heading mt-5">Editors Picks</h2>
                <div className="editors-content mt-4">
                    <div className="editors-img-row d-flex justify-content-between text-white t">
                    <img src="assets/Images/img3.png" alt="" width={160} height={120}/>
                    <h4 className='fw-light mx-4 editors-post-title'>Lorem dolor sit  consectetur. Totam, nemo!</h4>
                    </div>
                    <img className='editors-picks-line' src="assets/Images/line.png" width={380} alt="" />      

                    <div className="editors-author-sec d-flex text-white">
    <img src="assets/Images/author1.png" alt="Author" width={40} />
    <div className="editors-author-info">
        <p className='name' >Leslie Alexander</p>
        <p className='editors-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow-btn.png" className='editors-arrow-icon' alt="" width={40} />
</div>
                </div>
                {/* 2nd post */}
                <div className="editors-content mt-1">
                    <div className="editors-img-row d-flex justify-content-between text-white t">
                    <img src="assets/Images/img3.png" alt="" width={160} height={120}/>
                    <h4 className='fw-light mx-4 editors-post-title'>Lorem dolor sit  consectetur. Totam, nemo!</h4>
                    </div>
                    <img className='editors-picks-line' src="assets/Images/line.png" width={380} alt="" />      

                    <div className="editors-author-sec d-flex text-white">
    <img src="assets/Images/author1.png" alt="Author" width={40} />
    <div className="editors-author-info">
        <p className='name' >Leslie Alexander</p>
        <p className='editors-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow-btn.png" className='editors-arrow-icon' alt="" width={40} />
</div>
                </div>
                {/* 3rd post */}
                <div className="editors-content mt-1">
                    <div className="editors-img-row d-flex justify-content-between text-white t">
                    <img src="assets/Images/img3.png" alt="" width={160} height={120}/>
                    <h4 className='fw-light mx-4 editors-post-title'>Lorem dolor sit  consectetur. Totam, nemo!</h4>
                    </div>
                    <img className='editors-picks-line' src="assets/Images/line.png" width={380} alt="" />      

                    <div className="editors-author-sec d-flex text-white">
    <img src="assets/Images/author1.png" alt="Author" width={40} />
    <div className="editors-author-info">
        <p className='name' >Leslie Alexander</p>
        <p className='editors-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow-btn.png" className='editors-arrow-icon' alt="" width={40} />
</div>
                </div>
                {/* 4th post */}
                <div className="editors-content mt-1">
                    <div className="editors-img-row d-flex justify-content-between text-white t">
                    <img src="assets/Images/img3.png" alt="" width={160} height={120}/>
                    <h4 className='fw-light mx-4 editors-post-title'>Lorem dolor sit  consectetur. Totam, nemo!</h4>
                    </div>
                    <img className='editors-picks-line' src="assets/Images/line.png" width={380} alt="" />      

                    <div className="editors-author-sec d-flex text-white">
    <img src="assets/Images/author1.png" alt="Author" width={40} />
    <div className="editors-author-info">
        <p className='name' >Leslie Alexander</p>
        <p className='editors-author-info-date'>Ceo / April 22, 2024</p>
    </div>
    <img src="assets/Images/arrow-btn.png" className='editors-arrow-icon' alt="" width={40} />
</div>
                </div>
                </div>
                    </div>

    </>
   

                    
  )
}

export default EditorsPicks