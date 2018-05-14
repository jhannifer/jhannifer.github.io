import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

class Contact extends React.Component {
  render() {
    configureAnchors({ offset: -60, scrollDuration: 600 })
    return (
      <ScrollableAnchor id={'contato'}>
        <div>
          <section className="section contact">
            <div className="container">
              <div className="row justify-content-md-center">
                <div
                  className="col-md-10 wow rollIn"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <h2 className="section-title">CONTACT US</h2>
                  <p className="subtitle">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have
                    <br /> uffered alteration, by injected humour, or new
                    randomised words.
                  </p>
                  <form id="contactForm">
                    <div className="row">
                      <div className="text-center">
                        <h2>You are using Free Version</h2>
                        <h4>
                          Please, purchase full version to get all features and
                          pages
                        </h4>
                        <br />
                        <b>Including:</b>
                        <p>- 2 Homepage Variations</p>
                        <p>- All Elements and Features</p>
                        <p>- Documentation File</p>
                        <p>- Quick Support</p>
                        <p>- Permission to Use in Commercial Projects</p>
                        <p>- Footer Credit Removal</p>
                        <p>- SASS Files</p>
                        <br />
                        <a
                          href="http://rebrand.ly/basic-purchase"
                          target="_blank"
                          className="btn btn-common btn-lg"
                        >
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <div className="section contact-icon">
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="300ms"
                  >
                    <div className="icon icon-primary">
                      <i className="icon-map" />
                    </div>
                    <p>Avenue C, Block.04, DW, USA</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="500ms"
                  >
                    <div className="icon icon-secondary">
                      <i className="icon-envelope" />
                    </div>
                    <p>info@yourdamainname.com</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="700ms"
                  >
                    <div className="icon icon-tertiary">
                      <i className="icon-phone" />
                    </div>
                    <p>(+699)1234-7575-45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    )
  }
}

export default Contact
