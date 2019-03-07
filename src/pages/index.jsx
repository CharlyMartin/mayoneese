// Librairies
import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Img from "gatsby-image"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/banner';
import MailchimpForm from '../components/mailchimp-form';
import A from '../components/a';
import H2Blob from '../components/h2'

// CSS
import './index.css';

// Data
import data from '../data/home';

function HomePage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <div id="home-page">
        <Banner colour="yellow" shade="30" position="bottom">
          <section id="hero">
            <div className="container">
              <div className="hero-content">
                <h1>
                  {data.landing.value1}
                  <span className="title">{data.landing.value2}</span>
                </h1>
                <h3>{data.landing.description}</h3>
              
                <MailchimpForm />
                <p className="description text-small">{data.form.description}</p>
              </div>
            </div>
          </section>
        </Banner>

        
        <div className="features">

          <section id="problem">
            <div className="container-sm">
              <div className="text-left">

                <H2Blob colour="purple" position="right">{data.problem.title}</H2Blob>

                <span className="first-patagraph">
                  <p>{data.problem.text1}</p>
                  <A href={data.problem.link}>
                    {data.problem.linkText}
                  </A>
                </span>

                <p>{data.problem.text2}</p>
                <p className="solution">{data.problem.solution}</p>

              </div>
            </div>
          </section>

          <section id="why">
            <div className="container-sm">
              <div className="text-right">
                <H2Blob colour="red" position="left">{data.why.title}</H2Blob>
                <p>{data.why.text}</p>
              </div>
            </div>
          </section>

          <section id="how">
            <div className="container-sm">
              <div className="text-left">
                <H2Blob colour="orange" position="right">{data.how.title}</H2Blob>
                <p>{data.how.text}</p>
              </div>
            </div>
          </section>

          <section id="what">
            <div className="container-sm">
              <div className="text-right">
                <H2Blob colour="yellow" position="left">{data.what.title}</H2Blob>
                <p>{data.what.text}</p>
              </div>
            </div>
          </section>
          
        </div>
        
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