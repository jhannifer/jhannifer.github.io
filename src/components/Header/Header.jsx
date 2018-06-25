import React, { Component } from 'react'

import Navbar from './Navbar'

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

class Header extends Component {
  render() {
    return (
      <ScrollableAnchor id={'home'}>
        <header id="hero-area" className={this.props.type || ''}>
          <Navbar />
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10">
                <div className="carousel-slider owl-carousel owl-theme">
                  <div className="item active">
                    <div className="contents text-center">
                      {this.props.bannerTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ScrollableAnchor>
    )
  }
}

export default Header
