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

<div className="blog-line left"></div>
<div className="blog-line  right"></div>

<div className="container">
<BlogHeroSection/>
<BlogLatestPost/>

</div>
<Newsletter/>
<Footer/>
</div>
</>
  )
}

export default BlogPostPage