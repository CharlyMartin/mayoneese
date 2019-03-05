// Librairies
import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerList from '../components/banner-list';
import BlobSVG from '../components/blog-svg';
import MailchimpForm from '../components/mailchimp-form';

// CSS
import '../css/pages/home.css';

// Data
import data from '../data/home';

function HomePage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <div id="home-page">
        {/* <div className="svgs">
          <BannerSVG top="0" zIndex="-10" colour="yellow" shade="30" />
          <BannerSVG top="5vh" zIndex="-20" colour="yellow" shade="40" />
          <BannerSVG top="10vh" zIndex="-30" colour="yellow" shade="50" />
          <BannerSVG top="15vh" zIndex="-40" colour="orange" shade="40" />
          <BannerSVG top="20vh" zIndex="-50" colour="orange" shade="50" />
          <BannerSVG top="25vh" zIndex="-60" colour="red" shade="40" />
          <BannerSVG top="30vh" zIndex="-70" colour="red" shade="50" />
          <BannerSVG top="35vh" zIndex="-80" colour="purple" shade="40" />
          <BannerSVG top="40vh" zIndex="-90" colour="purple" shade="50" />
        </div> */}

        <BannerList />
        
        <section id="hero">
          <div className="container">
            <div className="column-layout">
              <div className="column-text">
                <h1>
                  {data.landing.value1}
                  <span className="title">{data.landing.value2}</span>
                </h1>
                <h2>{data.landing.description}</h2>
              
                <MailchimpForm />
                <p className="description">{data.form.description}</p>
              </div>

              <div className="column-image">
                <div className="svg-container">
                  <BlobSVG colour="grey" width="100%" shade="00" rotate={-10}/>
                </div>
              </div>
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