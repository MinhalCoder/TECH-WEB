import React from 'react'
import Header from '../../Components/Header/Header'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
import './HomePage.css'


const HomePage = () => {
  return (
<>
<div className="home-page">
<Header/>
  <Newsletter/>
  <Footer/>
</div>
 

</>  )
}

export default HomePage