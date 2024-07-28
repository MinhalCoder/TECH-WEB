import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Newsletter from '../../Components/Newsletter/Newsletter'
import AboutPageMain from '../../Components/AboutPageMain/AboutPageMain'
import Header3 from '../../Components/Header3/Header3'
import './AboutUsPage.css'

const AboutUsPage = () => {
  return (
<>
<div className="aboutus-page">
<Header3/>
<AboutPageMain/>
  <Newsletter/>
  <Footer/>
</div>
</>  )
}

export default AboutUsPage