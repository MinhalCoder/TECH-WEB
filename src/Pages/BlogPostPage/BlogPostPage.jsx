import React from 'react'
import Header2 from '../../Components/Header2/Header2'
import Footer from '../../Components/Footer/Footer'
import Newsletter from '../../Components/Newsletter/Newsletter'
import BlogHeroSection from '../../Components/BlogPost/BlogHeroSection/BlogHeroSection'
import './BlogPostPage.css'
import BlogLatestPost from '../../Components/BlogPost/BlogLatestPost/BlogLatestPost'

const BlogPostPage = () => {
  return (
<>
<div className="blogPostPage">
<Header2/>
<BlogHeroSection/>
<BlogLatestPost/>
  <Newsletter/>
  <Footer/>
</div>
</>
  )
}

export default BlogPostPage