import React, { Component } from 'react'

import './style.scss'

class ProjectConcept extends Component {
  render() {
    return (
      <div className="mt-5">
        <h3 className="text-center concept-title">Conceito</h3>
        <p className="intro narrow not-big text-center">{this.props.text}</p>
      </div>
    )
  }
}

export default ProjectConcept
