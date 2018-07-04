import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer'
import Contact from '../../../components/Contact'
import ProjectInformation from '../../../components/ProjectInformation/ProjectInformation'
import ProjectConcept from '../../../components/Projects/ProjectConcept'
import ProjectImage from '../../../components/Projects/ProjectImage'

class CentroReabilitacaoPsicosical extends Component {
  render() {
    const site = this.props.data.site.siteMetadata
    const bannerTitle = (
      <h1 className="banner-title">Centro de Reabilitação Psicosocial</h1>
    )

    const concept = `
      O conceito desse projeto é
    `

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
          <Header type={'p-centro-reabilitacao'} bannerTitle={bannerTitle} />
          <ProjectConcept text={concept} />
          <div className="row justify-content-around">
            <ProjectImage
              image={'/img/projects/centro-reabilitacao/project1.jpg'}
            />
            <ProjectImage
              image={'/img/projects/centro-reabilitacao/project1.jpg'}
            />
          </div>

          <ProjectInformation
            architects={'Jhannifer Oliveira'}
            client={'Prefeitura de Lauro de Freitas'}
            year={2017}
            programs={'Revit, AutoCAD'}
            status={'Finalizado'}
            scale={'x'}
          />
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

export default CentroReabilitacaoPsicosical

export const pageQuery = graphql`
  query CentroReabilitacaoPsicosicalQuery {
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
