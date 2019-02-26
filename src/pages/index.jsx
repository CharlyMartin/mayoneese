// Librairies
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import SVG from '../components/svg';

// Data
import data from '../data/home-page';

function HomePage(props) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SVG />
      <div className="container">
        <h1>
          {data.landing.value1}
          <div>{data.landing.value2}</div>
        </h1>
        <h2>{data.landing.description}</h2>
      </div>
    </Layout>
  )
}

export default HomePage;

// This page query will be availabe in the props obj under data
export const query = graphql`
  query homePageQuery {
    gatsbyIcon: file(name: {eq: "gatsby-icon"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    astronaut: file(name: {eq: "gatsby-astronaut"}) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


// {
//   allFile(filter: {sourceInstanceName: {eq: "images"}}) {
//     edges {
//       node {
//         relativePath
//         childImageSharp {
//           fluid(maxWidth: 1000) {
//             srcSet
//           }
//         }
//       }
//     }
//   }
// }