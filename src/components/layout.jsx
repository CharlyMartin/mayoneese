// Librairies
import React from 'react';
import PropTypes from "prop-types";
import { StaticQuery, graphql } from 'gatsby';

// Components
import Header from './header';
import Footer from './footer';

// CSS
import '../css/app.css';

// Data
const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        {/* <Footer /> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;