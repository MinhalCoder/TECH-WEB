import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Newsletter from '../../Components/Newsletter/Newsletter'
import BlogHeroSection from '../../Components/BlogPost/BlogHeroSection/BlogHeroSection'
import './BlogPostPage.css'
import BlogLatestPost from '../../Components/BlogPost/BlogLatestPost/BlogLatestPost'
import Header from '../../Components/Header/Header'

const BlogPostPage = () => {
  return (
<>
<div className="blogPostPage">
<Header/>
{/* Lines on the left and right */}
<div className="blog-line left"></div>
      <div className="blog-line  right"></div><BlogHeroSection/>
<BlogLatestPost/>
  <Newsletter/>
  <Footer/>
</div>
</>
  )
}

export default BlogPostPage