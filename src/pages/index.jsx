// Librairies
import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerSVG from '../components/banner-svg';
import Form from '../components/form';

// CSS
import '../css/pages/home.css';

// Data
import data from '../data/home';

function HomePage(props) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <div id="home-page">
        <div className="svgs">
          <BannerSVG top="0" zIndex="-10" colour="yellow" shade="30" />
          <BannerSVG top="5vh" zIndex="-20" colour="yellow" shade="40" />
          <BannerSVG top="10vh" zIndex="-30" colour="yellow" shade="50" />
          <BannerSVG top="15vh" zIndex="-40" colour="orange" shade="40" />
          <BannerSVG top="20vh" zIndex="-50" colour="orange" shade="50" />
          <BannerSVG top="25vh" zIndex="-60" colour="red" shade="40" />
          <BannerSVG top="30vh" zIndex="-70" colour="red" shade="50" />
          <BannerSVG top="35vh" zIndex="-80" colour="purple" shade="40" />
          <BannerSVG top="40vh" zIndex="-90" colour="purple" shade="50" />
        </div>

        <section id="hero" className="container">
          <div className="column-layout">
            <div className="column-text">
              <h1>
                {data.landing.value1}
                <span className="title">{data.landing.value2}</span>
              </h1>
              <h2>{data.landing.description}</h2>
              
              <Form />
              <p className="description">{data.form.description}</p>
            </div>

            <div className="column-image">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam consequatur commodi odio omnis, et voluptatum, aut labore aliquam nam adipisci velit rem nulla delectus quia itaque molestias maiores ex.
            </div>
          </div>
        </section>


      </div>
    </Layout>
  )
}

export default HomePage;

// This page query will be availabe in the props obj under data
// export const query = graphql`
//   query homePageQuery {
//     banner: file(name: {eq: "banner"}) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
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