import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Navbar from './Navbar'

const ParallaxHeader = props => {
  return (
    <ParallaxProvider>
      <Navbar />
      <div className="project__parallax__container">
        <Parallax
          className="your-class"
          offsetYMax={-80}
          offsetYMin={20}
          slowerScrollRate
        >
          <div
            className="parallax__image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </Parallax>
      </div>
    </ParallaxProvider>
  )
}

export default ParallaxHeader
