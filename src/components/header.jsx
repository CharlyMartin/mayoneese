import { StaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import Img from "gatsby-image";

// SVG
import logo from '../images/mayoneese.svg';

// Data
import pages from '../data/internal-links'

// Component
function Header(props) {
  // console.log(props);

  return (
    <div className="container">
      <br/>
      <br/>
      <Link to={`/${pages.home}`}>
        <img src={logo} alt="Mayoneese Logo" width="120"/>
        {/* <Img fixed={props.logo.childImageSharp.fixed} /> */}
      </Link>
      <br/>
      <br/>
    </div>
  )
}

export default Header;

// StaticQuery
// export default () => (
//   <StaticQuery
//     query={query}
//     render={data => <Header {...data} />}
//   />
// )

// const query = graphql`
//   query headerQuery {
//     logo: file(name: {eq: "mayoneese"}) {
//       childImageSharp {
//         fixed(width: 200) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
