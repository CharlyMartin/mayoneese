// Librairies
import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet htmlAttributes={{lang}}
                  title={title}
                  titleTemplate={`%s | ${data.site.siteMetadata.title}`}>

            <meta name="description"          content={metaDescription} />
            <meta property="og:url"           content={data.site.siteMetadata.siteUrl} />
            <meta property="og:type"          content="website" />
            <meta property="og:locale"        content={lang} />
            <meta property="og:site_name"     content={data.site.siteMetadata.title} />
            <meta property="og:title"         content={data.site.siteMetadata.title} />
            <meta property="og:description"   content={metaDescription} />
            <meta property="og:image"         content={image} />
            <meta property="og:image:width"   content="1200" />
            <meta property="og:image:height"  content="800" />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const query = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
