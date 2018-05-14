import React, { Component } from 'react'

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

class About extends Component {
  render() {
    configureAnchors({ offset: -60, scrollDuration: 600 })

    return (
      <ScrollableAnchor id={'sobre'}>
        <section className="section about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-3 align ">
                <img
                  src="img/jhanniferoliveira.jpg"
                  className="rounded-circle jhannifer-thumb"
                />
              </div>
              <div className="col-12 col-md-7 mt-3 mt-sm-0">
                <h2
                  className="section-title section-title--size wow fadeInUp text-center text-md-left font--oranienbaum"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  SOBRE MIM
                </h2>
                <div
                  className="wow fadeInLeft text-justify"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default About
