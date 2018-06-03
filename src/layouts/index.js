import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'

import './custom-bootstrap.scss'
import './main.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon/devicon.min.css'

import $ from 'jquery'
import mixitup from 'mixitup'

class Template extends React.Component {
  componentDidMount() {
    $('#loader').fadeOut()

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 20) {
        $('.header-top-area').addClass('menu-bg')
      } else {
        $('.header-top-area').removeClass('menu-bg')
      }
    })

    let offset = 200
    let duration = 500

    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400)
      } else {
        $('.back-to-top').fadeOut(400)
      }
    })
    $('.back-to-top').click(function(event) {
      event.preventDefault()
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        600
      )
      return false
    })

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 200) {
        $('.fixed-top').addClass('menu-bg')
      } else {
        $('.fixed-top').removeClass('menu-bg')
      }
    })

    let porfolio = document.getElementById('portfolio')
    mixitup(porfolio)
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
