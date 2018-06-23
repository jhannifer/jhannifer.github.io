import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from '../../../components/Header/Header'

class CentroReabilitacaoPsicosical extends Component {
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
          <Header type={'p-centro-reabilitacao'} />
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