// Librairies
import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import BannerList from '../components/banner-list';
import MailchimpForm from '../components/mailchimp-form';
import A from '../components/a';
import BlobList from '../components/blob-list';

// CSS
import '../css/pages/home.css';

// Data
import data from '../data/home';

function HomePage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <div id="home-page">
        <BannerList>
          <section id="hero">
            <div className="container">
              <div className="column-layout">
                <div className="column-text">
                  <h1>
                    {data.landing.value1}
                    <span className="title">{data.landing.value2}</span>
                  </h1>
                  <h3>{data.landing.description}</h3>
                
                  <MailchimpForm />
                  <p className="description text-small">{data.form.description}</p>
                </div>

                <div className="column-image">
                  {/* <HeroSVGs /> */}
                </div>

              </div>
            </div>
          </section>
        </BannerList>

        <BlobList>
          <div className="features">

            <section id="problem">
              <div className="container-sm">

                <h2>{data.problem.title}</h2>
                <span className="first-patagraph">
                  <p>{data.problem.text1}</p>
                  <A href={data.problem.link}>
                    {data.problem.linkText}
                  </A>
                </span>
                <p>{data.problem.text2}</p>
                <p>{data.problem.solution}</p>

              </div>
            </section>

            <section id="why">
              <div className="container-sm">
                <div className="text-right">
                  <h2>{data.why.title}</h2>
                  <p>{data.why.text}</p>
                </div>
              </div>
            </section>

            <section id="how">
              <div className="container-sm">
                <div className="text-left">
                  <h2>{data.how.title}</h2>
                  <p>{data.how.text}</p>
                </div>
              </div>
            </section>

            <section id="what">
              <div className="container-sm">
                <div className="text-right">
                  <h2>{data.what.title}</h2>
                  <p>{data.what.text}</p>
                </div>
              </div>
            </section>
          </div>
        </BlobList>

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