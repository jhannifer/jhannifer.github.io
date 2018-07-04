import React, { Component } from 'react'

import './style.scss'

class ProjectInformation extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="project-meta d-flex justify-content-between flex-wrap">
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Cliente</span>
            <span className="project-meta__value">{this.props.client}</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Arquitetos</span>
            <span className="project-meta__value">{this.props.architects}</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Ano</span>
            <span className="project-meta__value">{this.props.year}</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Programas usados</span>
            <span className="project-meta__value">{this.props.programs}</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Status</span>
            <span className="project-meta__value">{this.props.status}</span>
          </div>{' '}
          <div className="project-meta__field  field--6-in-row">
            <span className="project-meta__label  mb0">Escala</span>
            <span className="project-meta__value">{this.props.scale}</span>
          </div>{' '}
        </div>
      </div>
    )
  }
}

export default ProjectInformation
