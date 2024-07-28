import React from 'react'
import Header from '../../Components/Header/Header'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
import './HomePage.css'
import Carousel from '../../Components/CarouselComp/Carousel'




const HomePage = () => {
  return (
<>
<div className="home-page  ">
<Header/>
<Carousel/>
  <Newsletter className="" />
  <Footer/>
</div>
 

</>  )
}

export default HomePage