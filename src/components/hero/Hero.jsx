import React from 'react'
import './hero.css'
import Header from '../header/Header'
import HeroText from '../HeroText/HeroText'
// import Arrow from '../arrow/Arrow'
// import Card from '../glassCard/Card'



function Hero() {
  return (
   <div className='hero'>
    <Header/>
    <HeroText/>
    {/* <Arrow/> */}
   </div>
  )
}

export default Hero