import React, { Component } from 'react'

import './style.scss'

class ProjectImage extends Component {
  render() {
    let subtitle = ''

    if (this.props.subtitle) {
      subtitle = <p>{this.props.subtitle}</p>
    }

    return (
      <div className="project-image-container">
        <img
          src={this.props.image}
          className={`img-fluid ${this.props.customClass}`}
          alt=""
        />
        {subtitle}
      </div>
    )
  }
}

export default ProjectImage
