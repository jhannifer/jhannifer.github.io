import React, { Component } from 'react'

import './style.scss'

class ProjectInformation extends Component {
  render() {
    return (
      <div className="container">
        <div className="project-meta d-flex justify-content-between flex-wrap">
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Client</span>
            <span className="project-meta__value">Statsbygg</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Architects</span>
            <span className="project-meta__value">Snøhetta</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Year</span>
            <span className="project-meta__value">2014</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Program</span>
            <span className="project-meta__value">Cultural</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Status</span>
            <span className="project-meta__value">Completed</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Scale</span>
            <span className="project-meta__value">38.500 m²</span>
          </div>{' '}
        </div>
      </div>
    )
  }
}

export default ProjectInformation
