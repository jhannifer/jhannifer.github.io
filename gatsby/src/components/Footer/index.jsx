import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
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
                      Lorem ipsum dolor sit amet, con sectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.Lorem
                      ipsum dolor sit amet, con sectetur adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                  <form className="subscribe-box">
                    <input placeholder="Your email" type="text" />
                    <input className="btn-system" value="Send" type="submit" />
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
                  <a className="twitter" href="https://twitter.com/GrayGrids">
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
                  <a className="dribble" href="https://dribbble.com/GrayGrids">
                    <i className="fa fa-dribbble" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
