// Librairies
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Data
import data from '../data/home-page';

function HomePage(props) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="container">
        <h1>
          {data.landing.value1}
          <span>{data.landing.value2}</span>
        </h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        <Img fixed={props.data.astronaut.childImageSharp.fixed} />
        <br/>
        
        <Link to="/page-2/">Go to page 2</Link>
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