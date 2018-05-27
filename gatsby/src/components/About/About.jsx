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
                    Eu sou Jhannifer Oliveira, graduada em Arquitetura e
                    Urbanismo pela UNIME - Lauro de Freitas.
                  </p>
                  <p>
                    Acredito que a
                    Arquitetura é muito mais que estética e que possui o poder
                    de modificar a vida das pessoas e influenciar sua forma de
                    viver, fisica e mentalmente.
                  </p>
                  <p>
                    Nos meus projetos busco aplicar técnicas que intensificam o
                    conforto através de materiais, psicologia das cores e
                    principalmente a integração com a natureza em busca de um
                    projeto humanizado.
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
