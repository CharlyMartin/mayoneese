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
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="svgs">
        <BannerSVG top="0" zIndex="-10" colour="yellow" shade="30" />
        <BannerSVG top="4vh" zIndex="-20" colour="yellow" shade="40" />
        <BannerSVG top="8vh" zIndex="-30" colour="yellow" shade="50" />
        <BannerSVG top="12vh" zIndex="-40" colour="orange" shade="40" />
        <BannerSVG top="16vh" zIndex="-50" colour="orange" shade="50" />
        <BannerSVG top="20vh" zIndex="-60" colour="red" shade="30" />
      </div>
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
export const query = graphql`
  query homePageQuery {
    banner: file(name: {eq: "banner"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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