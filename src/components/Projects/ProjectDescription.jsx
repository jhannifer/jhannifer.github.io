import React, { Component } from 'react'

import './style.scss'

class ProjectDescription extends Component {
  render() {
    return (
      <div className="mt-5">
        <h3 className="text-center concept-title">Descrição</h3>
        <p className="intro container narrow not-big text-center">
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default ProjectDescription
