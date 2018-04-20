import React from 'react'
import Helmet from 'react-helmet'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    const head = Helmet.rewind()
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang="pt_br">
        <head>
          <meta charset="utf-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="keywords"
            content="Arquitetura, architeture, urbanismo, urban, jhannifer, jhannifer oliveira, escritório arquitetura, lauro de freitas, arquitetura lauro de freitas, arquiteta e urbanista, arquitetura salvador,
              ilustracao, sketch, croqui de arquitetura, desenhos, fotografia
            "
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="jhanniferoliveira" content="main" />

          <title>Jhannifer Oliveira | Arquiteta e Urbanista</title>
          {this.props.headComponents}
          {css}
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/code-fx/Pure-CSS3-Animated-Border@V1.0/css/animated-border/animated-border.min.css"
          />

          <script
            src="https://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
