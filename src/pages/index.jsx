// Librairies
import React from 'react'
import { Link, graphql } from 'gatsby'
// import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerSVG from '../components/banner-svg';

// CSS
import '../css/pages/home.css'

// Data
import data from '../data/home-page';

function HomePage(props) {
  // console.log(bannerSVG);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BannerSVG top="0" zIndex="-1" colour="yellow" shade="30" />
      <BannerSVG top="35px" zIndex="-2" colour="yellow" shade="40" />
      <BannerSVG top="70px" zIndex="-3" colour="yellow" shade="50" />
      <div className="container">
        <h1>
          {data.landing.value1}
          <div>{data.landing.value2}</div>
        </h1>
        <h2>{data.landing.description}</h2>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}

export default HomePage;

// This page query will be availabe in the props obj under data
// export const query = graphql`
//   query homePageQuery {
//     gatsbyIcon: file(name: {eq: "gatsby-icon"}) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     astronaut: file(name: {eq: "gatsby-astronaut"}) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `


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