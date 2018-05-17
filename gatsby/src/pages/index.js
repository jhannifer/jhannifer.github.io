import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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
        <div>
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />

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
