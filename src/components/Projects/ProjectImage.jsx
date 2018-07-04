import React, { Component } from 'react'

import './style.scss'

class ProjectImage extends Component {
  render() {
    return (
      <div className="project-image-container">
        <img src={this.props.image} className="img-fluid" alt="" />
      </div>
    )
  }
}

export default ProjectImage
