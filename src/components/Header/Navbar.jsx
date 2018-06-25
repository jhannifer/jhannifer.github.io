import React, { Component } from 'react'
import { withPrefix } from 'gatsby-link'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isHomepage = window.location.pathname === '/'
    let fullHref = ''
    
    if (!isHomepage) {
      fullHref = `${window.location.origin}`
    }
    
    console.log(isHomepage)
    console.log(fullHref)

    return (
      <div>
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
              <a className="navbar-brand" href="/">
                <img
                  src="/img/logo.svg"
                  className="logo-img"
                  alt="Logo do portfolio da arquiteta Jhannifer Oliveira"
                />
              </a>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarCollapse"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href={`${fullHref}#home`}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`${fullHref}#sobre`}>
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`${fullHref}#projetos`}>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`${fullHref}#contato`}>
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <ul className="mobile-menu">
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
        </ul> */}
      </div>
    )
  }
}

export default Navbar
