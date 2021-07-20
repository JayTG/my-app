import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>

            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>TIME FOR ADVENTURE!</h1>
            <p>Explore all options</p>
            <div className="hero-btns">
              <Button className='btns' buttonStyle='btn--outline'
              butstonSize='btn--large'>
                  LETS BEGIN
              </Button>  
              <Button className='btns' buttonStyle='btn--primary'
              buttonSize='btn--medium'>
                  WATCH TRAILER <i className=' far fa-play-circle' />
              </Button>  
            </div>
        </div>
    )
}

export default HeroSection
