// Librairies
import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerList from '../components/banner-list';
import MailchimpForm from '../components/mailchimp-form';

// SVG Components
import BlobSVG from '../components/blob-svg';
import MusicSVG from '../components/music-svg';
import VinylSVG from '../components/vinyl-svg';
import HeadphonesSVG from '../components/headphones-svg';

// CSS
import '../css/pages/home.css';

// Data
import data from '../data/home';

function HomePage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <div id="home-page">
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
                <div className="svgs-container">
                  <MusicSVG colour="purple" width="var(--s-8)" shade="50" rotate={-10} />
                  <VinylSVG colour="purple" width="var(--s-8)" shade="50" rotate={-10} />
                  <HeadphonesSVG colour="purple" width="var(--s-8)" shade="50" rotate={-10} />
                  <BlobSVG colour="grey" width="100%" shade="00" rotate={-10} zIndex="-10" />
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