import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link';

class Projects extends Component {
  constructor(props) {
    super(props)
    navigateTo('/')
  }
  render() {
    return <div>Projects</div>
  }
}

export default Projects
