import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer'
import Contact from '../../../components/Contact'
import ProjectInformation from '../../../components/ProjectInformation/ProjectInformation'
import ProjectConcept from '../../../components/Projects/ProjectConcept'
import ProjectImage from '../../../components/Projects/ProjectImage'
import ProjectDescription from '../../../components/Projects/ProjectDescription'

class CentroReabilitacaoPsicosical extends Component {
  render() {
    const site = this.props.data.site.siteMetadata
    const bannerTitle = (
      <h1 className="banner-title">
        Centro de Reabilitação Psicosocial para Crianças e Adolescentes
      </h1>
    )

    const description = `
    O Centro de reabilitação psicossocial é voltado para pessoas que sofrem com transtornos mentais. Projetado para proporcionar o bem estar aos pacientes, com ambientes confortáveis e oferecendo atividades diferenciadas para que o paciente possa se sentir livre e estimulado a interações familiares.
    Pessoas que sofrem com transtornos mentais precisam ser tratadas o quanto antes, pois trata-se de um problema sério e pode levar a extremos como o suicídio. Pesquisas revelam que o transtorno mental vem aumentando e dentro de 25 anos 1 em cada 4 habitantes enfrentará algum tipo de transtorno mental. Com isso surgiu a necessidade de criar um ambiente planejado especificamente com esse foco.
    `

    const concept = `O cérebro é o responsável pelos sentimentos, coordenação motora, fala, memória, entre outros. A pessoa que sofre de algum tipo de transtorno mental tem o cérebro prejudicado de alguma forma. Então, para que a criança e o adolescente melhore e consiga se reerguer, ele necessita de ajuda mútua: família, amigos, comunidade e especialistas em saúde mental.
    São cinco pilares que precisam estar e se sustentar juntos, mostrando força e determinação em busca de uma melhora e retomada do cérebro saudável. Partindo desse princípio as imagens abaixo ilustram bem a ideia do conceito para esse projeto.    
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

          <ProjectDescription text={description} />

          <div className="row justify-content-around">
            <ProjectImage
              image={
                '/img/projects/centro-reabilitacao/localizacao_terreno.jpg'
              }
            />
            <ProjectImage
              image={'/img/projects/centro-reabilitacao/planta_situacao.jpg'}
            />
          </div>

          <ProjectConcept text={concept} />

          <div className="mt-5">
            <h3 className="text-center concept-title">
              A evolução do conceito
            </h3>
          </div>

          <div className="row justify-content-around">
            <ProjectImage
              image={'/img/projects/centro-reabilitacao/conceito1.jpg'}
            />
            <ProjectImage
              image={'/img/projects/centro-reabilitacao/conceito2.jpg'}
            />

            <ProjectImage
              image={'/img/projects/centro-reabilitacao/conceito3.jpg'}
            />
          </div>

          <div className="row justify-content-around mt-3">
            <ProjectImage
              image={'/img/projects/centro-reabilitacao/conceito4.jpg'}
            />
          </div>

          <div className="row justify-content-around container mx-auto">
            <div className="col-md-4">
              <ProjectImage
                customClass={'p-100'}
                image={'/img/projects/centro-reabilitacao/sol.jpg'}
                subtitle={
                  'Ensolejamento - A implantação favorece 100% na iluminação natural.'
                }
              />
            </div>
            <div className="col-md-4">
              {' '}
              <ProjectImage
                customClass={'p-100'}
                image={'/img/projects/centro-reabilitacao/ventos.jpg'}
                subtitle={
                  'Ventos predominantes - A implantação aproveita a circulação natural dos ventos deixando o ambiente confortável'
                }
              />
            </div>
            <div className="col-md-4">
              {' '}
              <ProjectImage
                customClass={'p-100'}
                image={'/img/projects/centro-reabilitacao/pedestre.jpg'}
                subtitle={
                  'Circulação de pedestre - Espaços de integração com a comunidade.'
                }
              />
            </div>
          </div>

          <div className="row justify-content-around container mt-3 mx-auto">
            <div className="col-md-4">
              <ProjectImage
                customClass={'p-100'}
                image={'/img/projects/centro-reabilitacao/agua_pluvial.jpg'}
                subtitle={
                  'Tratamento de águas cinzas e reaproveitamento de água pluvial'
                }
              />
            </div>
            <div className="col-md-4">
              {' '}
              <ProjectImage
                customClass={'p-100'}
                image={'/img/projects/centro-reabilitacao/lazer_terraco.jpg'}
                subtitle={
                  'Terraço produtivo e áreas de lazer Espaços abertos de encontros e trocas sociais entre os pacientes.'
                }
              />
            </div>
            <div className="col-md-4">
              {' '}
              <ProjectImage
                customClass={'p-100'}
                image={
                  '/img/projects/centro-reabilitacao/jardim_terapeutico.jpg'
                }
                subtitle={
                  'Jardins terapêuticos - Espaços humanizados atendendo as necessidades físicas e mentais dos pacientes.'
                }
              />
            </div>
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
