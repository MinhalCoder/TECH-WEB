import BlogPostPopular from "../BlogPostPopular/BlogPostPopular"
import './BlogHeroSection.css'

const BlogHeroSection = () => {
  return (
    <>
     <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
            <div className="col-6 blog-img-container">
                <img className="hero-section-img w-100 object-fit-contain" src="assets/Images/img5.png" alt="" />
            </div>
            <div className="col-6 mt-lg-5">
            <h1 className="BlogCarouselHeading ">
                <span className="d-block">Grid System For</span>
                <span className="d-block">Better Design</span>
                <span className="d-block">User Interface</span>
              </h1>
            </div>
        </div>
     </div>

     <BlogPostPopular/>
    </>
  )
}

export default BlogHeroSection