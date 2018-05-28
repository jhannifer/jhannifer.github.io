import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

class Projects extends React.Component {
  render() {
    configureAnchors({ offset: -60, scrollDuration: 600 })
    return (
      <div>
        <section className="section">
          <div className="container">
            <ScrollableAnchor id={'projetos'}>
              <div className="section-header">
                <h2
                  className="wow fadeInUp font--oranienbaum section-title--size"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  PROJETOS
                </h2>
              </div>
            </ScrollableAnchor>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="controls text-center wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <a
                    className="control mixitup-control-active btn btn-common"
                    data-filter="all"
                  >
                    Todos
                  </a>
                  <a
                    className="control btn btn-common"
                    data-filter=".architeture"
                  >
                    Arquitetura
                  </a>
                  <a className="control btn btn-common" data-filter=".draw">
                    Desenho
                  </a>
                </div>

                <div
                  id="portfolio"
                  className="row wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix architeture">
                    <div className="portfolio-item">
                      <div className="portfolio-img ">
                        <img src="img/portfolio/img1.jpg" alt="" />
                      </div>
                      <div className="portfoli-content ">
                        <div className="sup-desc-wrap ">
                          <div className="sup-desc-inner ">
                            <div className="sup-meta-wrap ">
                              <Link
                                to="#"
                                // to="/projects/centro-reabilitacao-psicosocial"
                                innerRef={el => {
                                  this.myLink = el
                                }}
                                className="sup-title"
                              >
                                <h4>Centro de Reabilitação Psicosocial</h4>
                              </Link>
                              <p className="sup-description">
                                para crianças e adolescentes
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix drawx">
                    <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src="img/portfolio/img2.jpg" alt="" />
                      </div>
                      <div className="portfoli-content">
                        <div className="sup-desc-wrap">
                          <div className="sup-desc-inner">
                            <div className="sup-meta-wrap">
                              <a className="sup-title" href="#">
                                <h4>Em breve...</h4>
                              </a>
                              <p className="sup-description">
                                {/* Responsive Wordpress Onepage Template */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix drawxx">
                    <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src="img/portfolio/img3.jpg" alt="" />
                      </div>
                      <div className="portfoli-content">
                        <div className="sup-desc-wrap">
                          <div className="sup-desc-inner">
                            <div className="sup-meta-wrap">
                              <a className="sup-title" href="#">
                                <h4>Em breve...</h4>
                              </a>
                              <p className="sup-description">
                                {/* Responsive Wordpress Onepage Template */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Projects
