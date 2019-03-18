import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'

import jQuery from 'jquery'

// import 'bootstrap'

import './custom-bootstrap.scss'
import './main.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon/devicon.min.css'

import mixitup from 'mixitup'

class Template extends React.Component {
  componentDidMount() {
    jQuery('#loader').fadeOut()

    jQuery(window).on('scroll', function() {
      if (jQuery(window).scrollTop() > 20) {
        jQuery('.header-top-area').addClass('menu-bg')
      } else {
        jQuery('.header-top-area').removeClass('menu-bg')
      }
    })

    let offset = 200
    let duration = 500

    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.back-to-top').fadeIn(400)
      } else {
        jQuery('.back-to-top').fadeOut(400)
      }
    })
    jQuery('.back-to-top').click(function(event) {
      event.preventDefault()
      jQuery('html, body').animate(
        {
          scrollTop: 0,
        },
        600
      )
      return false
    })

    jQuery(window).on('scroll', function() {
      if (jQuery(window).scrollTop() > 200) {
        jQuery('.fixed-top').addClass('menu-bg')
      } else {
        jQuery('.fixed-top').removeClass('menu-bg')
      }
    })

    let porfolio = document.getElementById('portfolio')
    mixitup(porfolio, {
      selectors: {
        control: '[data-mixitup-control]',
      },
    })
    // const WOW = require('wowjs')
    // this.wow = new WOW.WOW()
    // this.wow.init()
  }

  componentDidUpdate() {
    // this.wow.sync()
  }

  render() {
    const { location, children } = this.props
    return <div>{children()}</div>
  }
}

export default Template
