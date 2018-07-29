import React, { Component } from 'react'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

class ProjectParallax extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="project__parallax__container">
          <Parallax
            className="your-class"
            offsetYMax={-80}
            offsetYMin={20}
            slowerScrollRate
          >
            <div
              className="parallax__image"
              style={{ backgroundImage: `url(${this.props.image})` }}
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    )
  }
}

export default ProjectParallax
