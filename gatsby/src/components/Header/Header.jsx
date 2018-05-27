import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
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
                <img src="img/logo.svg" className="logo-img" alt="Logo do portfolio da arquiteta Jhannifer Oliveira" />
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
                  <a className="nav-link" href="#projetos">
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
    )
  }
}

export default Header
