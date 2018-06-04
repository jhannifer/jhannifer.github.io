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
                  <h2 className="section-title">ENTRE EM CONTATO</h2>
                  {/* <p className="subtitle">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have
                    <br /> uffered alteration, by injected humour, or new
                    randomised words.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="contact__infos container d-flex flex-wrap justify-content-around">
                <div className="">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="300ms"
                  >
                    {/* <div className="icon icon-primary">
                      <i className="fa fa-plane" />
                    </div> */}
                    <p>
                      <i className="fa fa-map-marker" /> Lauro de Freitas - BA
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="500ms"
                  >
                    {/* <div className="icon icon-secondary">
                      <i className="icon-envelope" />
                    </div> */}
                    <p>
                      <i className="fa fa-envelope-o" />{' '}
                      jhanniferoliveira@gmail.com
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="700ms"
                  >
                    {/* <div className="icon icon-tertiary">
                      <i className="icon-phone" />
                    </div> */}
                    <p>
                      <i className="fa fa-phone" /> (71) 99139-9725 / 3051-1297
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="700ms"
                  >
                    {/* <div className="icon icon-tertiary">
                      <i className="icon-phone" />
                    </div> */}
                    <p>
                      <a
                        href="https://instagram.com/jhanniferoliveiraarquitetura"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />   jhanniferoliveiraarquitetura
                      </a>
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className="box-icon wow fadeInUp"
                    data-wow-duration="1200ms"
                    data-wow-delay="700ms"
                  >
                    {/* <div className="icon icon-tertiary">
                      <i className="icon-phone" />
                    </div> */}
                    <p>
                      <a
                        href="https://www.linkedin.com/in/jhannifer"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" /> Jhannifer Oliveira
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div className="section contact-icon">
            <div className="overlay" />

          </div> */}
        </div>
      </ScrollableAnchor>
    )
  }
}

export default Contact
