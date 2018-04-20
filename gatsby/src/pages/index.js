import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

// import Banner from '../components/Banner'
// import SkillList from '../components/SkillList'
// import Projects from '../components/Projects'
// import Contact from '../components/Contact'

class Index extends React.Component {
  render() {
    const site = this.props.data.site.siteMetadata

    return (
      <div>
        <Helmet
          title={site.title}
          meta={[
            { property: 'og:title', content: site.title },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: site.description },
            { property: 'og:url', content: site.url },
            { property: 'og:author', content: site.author },
          ]}
        />
        return (
        <div>
          <header id="hero-area">
            <nav
              className="navbar navbar-expand-lg navbar-light fixed-top scrolling-navba bg-faded"
              id="white-bg"
            >
              <div className="container">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <a className="navbar-brand" href="index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto w-100 justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#sobre">
                        Sobre
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contato">
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <ul className="mobile-menu">
              <li>
                <a href="#hero-area">Home</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>

            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-10">
                  <div className="carousel-slider owl-carousel owl-theme">
                    <div className="item active">
                      <div className="contents text-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="sobre" className="section about">
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="section">
            <div className="container">
              <div className="section-header">
                <h2
                  className="wow fadeInUp font--oranienbaum section-title--size"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  PROJETOS
                </h2>
              </div>
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
                      All
                    </a>
                    <a
                      className="control btn btn-common"
                      data-filter=".marketing"
                    >
                      Design
                    </a>
                    <a
                      className="control btn btn-common"
                      data-filter=".planning"
                    >
                      Development
                    </a>
                    <a
                      className="control btn btn-common"
                      data-filter=".research"
                    >
                      Print
                    </a>
                  </div>

                  <div
                    id="portfolio"
                    className="row wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix marketing planning ">
                      <div className="portfolio-item">
                        <div className="portfolio-img ">
                          <img src="img/portfolio/img1.jpg" alt="" />
                        </div>
                        <div className="portfoli-content ">
                          <div className="sup-desc-wrap ">
                            <div className="sup-desc-inner ">
                              <div className="sup-meta-wrap ">
                                <a
                                  className="sup-title"
                                  href="projects/projeto-um.html"
                                >
                                  <h4>GeckPro</h4>
                                </a>
                                <p className="sup-description">
                                  Responsive Wordpress Onepage Template
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix planning">
                      <div className="portfolio-item">
                        <div className="portfolio-img">
                          <img src="img/portfolio/img2.jpg" alt="" />
                        </div>
                        <div className="portfoli-content">
                          <div className="sup-desc-wrap">
                            <div className="sup-desc-inner">
                              <div className="sup-meta-wrap">
                                <a className="sup-title" href="#">
                                  <h4>GeckBlog</h4>
                                </a>
                                <p className="sup-description">
                                  Responsive Wordpress Onepage Template
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix research">
                      <div className="portfolio-item">
                        <div className="portfolio-img">
                          <img src="img/portfolio/img3.jpg" alt="" />
                        </div>
                        <div className="portfoli-content">
                          <div className="sup-desc-wrap">
                            <div className="sup-desc-inner">
                              <div className="sup-meta-wrap">
                                <a className="sup-title" href="#">
                                  <h4>Remy</h4>
                                </a>
                                <p className="sup-description">
                                  Responsive Wordpress Onepage Template
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix marketing research">
                      <div className="portfolio-item">
                        <div className="portfolio-img">
                          <img src="img/portfolio/img4.jpg" alt="" />
                        </div>
                        <div className="portfoli-content">
                          <div className="sup-desc-wrap">
                            <div className="sup-desc-inner">
                              <div className="sup-meta-wrap">
                                <a className="sup-title" href="#">
                                  <h4>Remy</h4>
                                </a>
                                <p className="sup-description">
                                  Responsive Wordpress Onepage Template
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix marketing planning">
                      <div className="portfolio-item">
                        <div className="portfolio-img">
                          <img src="img/portfolio/img5.jpg" alt="" />
                        </div>
                        <div className="portfoli-content">
                          <div className="sup-desc-wrap">
                            <div className="sup-desc-inner">
                              <div className="sup-meta-wrap">
                                <a className="sup-title" href="#">
                                  <h4>GeckPro</h4>
                                </a>
                                <p className="sup-description">
                                  Responsive Wordpress Onepage Template
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix planning research">
                      <div className="portfolio-item">
                        <div className="portfolio-img">
                          <img src="img/portfolio/img6.jpg" alt="" />
                        </div>
                        <div className="portfoli-content">
                          <div className="sup-desc-wrap">
                            <div className="sup-desc-inner">
                              <div className="sup-meta-wrap">
                                <a className="sup-title" href="#">
                                  <h4>Coelho</h4>
                                </a>
                                <p className="sup-description">
                                  Responsive Wordpress Onepage Template
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

          <section id="contato" className="section contact">
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

          <footer>
            <section className="footer-Content">
              <div
                className="container wow fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h3 className="logo-title">Basic</h3>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="widget">
                      <div className="textwidget">
                        <p>
                          Lorem ipsum dolor sit amet, con sectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.Lorem ipsum dolor sit amet, con sectetur
                          adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore.
                        </p>
                      </div>
                      <form className="subscribe-box">
                        <input placeholder="Your email" type="text" />
                        <input
                          className="btn-system"
                          value="Send"
                          type="submit"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 col-xs-12">
                    <div className="widget">
                      <h3 className="block-title">Links</h3>
                      <ul className="menu">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Works</a>
                        </li>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 col-xs-12">
                    <div className="widget">
                      <h3 className="block-title">Services</h3>
                      <ul className="menu">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">Graphics Design</a>
                        </li>
                        <li>
                          <a href="#">Branding</a>
                        </li>
                        <li>
                          <a href="#">UX Consulting</a>
                        </li>
                        <li>
                          <a href="#">Mobile Apps</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="widget">
                      <h3 className="block-title">Flicker Gallery</h3>
                      <ul className="featured-list">
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img1.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img2.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img3.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img4.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img5.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img6.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img7.jpg" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img alt="" src="img/featured/img8.jpg" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div id="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="site-info pull-left wow fadeInLeft"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <p>
                        Template by
                        <a rel="nofollow" href="http://graygrids.com">
                          GrayGrids
                        </a>
                      </p>
                    </div>
                    <div
                      className="bottom-social-icons social-icon pull-right  wow fadeInRight"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <a
                        className="twitter"
                        href="https://twitter.com/GrayGrids"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                      <a
                        className="facebook"
                        href="https://web.facebook.com/GrayGrids
                "
                      >
                        <i className="fa fa-facebook " />
                      </a>
                      <a
                        className="google-plus "
                        href="https://plus.google.com/+GrayGrids"
                      >
                        <i className="fa fa-google-plus" />
                      </a>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/GrayGrids"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                      <a
                        className="dribble"
                        href="https://dribbble.com/GrayGrids"
                      >
                        <i className="fa fa-dribbble" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <a href="#" className="back-to-top">
            <i className="fa fa-arrow-up" />
          </a>

          <div id="loader">
            <div className="cssload-thecube">
              <div className="cssload-cube cssload-c1" />
              <div className="cssload-cube cssload-c2" />
              <div className="cssload-cube cssload-c4" />
              <div className="cssload-cube cssload-c3" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        author
      }
    }
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            description
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
