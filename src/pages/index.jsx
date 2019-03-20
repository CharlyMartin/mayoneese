// Librairies
import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Img from "gatsby-image"

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import MailchimpForm from '../components/mailchimp-form'
import A from '../components/a'
import H2Blob from '../components/h2'

// CSS
import './index.css'

// Data
import data from '../data/home'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bannerShadows: [],
      shadowRendered: false,
    }

    this.handleButtonHover = this.handleButtonHover.bind(this)
  }

  buildShadow(height, colour, shade) {
    return `0 ${height}px 0 var(--${colour}-${shade})`
  }

  triggerShadows() {
    const shadows = [
      ['yellow', 30],
      ['yellow', 40],
      ['yellow', 50],
      ['orange', 40],
      ['orange', 50],
      ['red', 40],
      ['red', 50],
      ['purple', 40],
      ['purple', 50],
    ]

    for (let i = 0; i < shadows.length; i++) {
      const [colour, shade] = shadows[i]

      setTimeout(() => {
        // console.log(colour, shade)
        const shadows = [...this.state.bannerShadows]
        shadows.push(this.buildShadow(i * 25, colour, shade))

        this.setState({
          bannerShadows: shadows,
        })
      }, i * 70)
    }
  }

  handleButtonHover(event) {
    // console.log(event)
    if (!this.state.shadowRendered) {
      this.triggerShadows()
    }
    this.setState({ shadowRendered: true })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['Mayoneese', 'Music', 'House', 'Disco']} />

        <div id="home-page">
          <Banner
            colour="yellow"
            shade="30"
            position="bottom"
            shadows={this.state.bannerShadows}
          >
            <section id="hero">
              <div className="container">
                <div className="hero-content">
                  <h1 className="title">
                    {data.landing.value1}
                    <span className="title">{data.landing.value2}</span>
                  </h1>
                  <h3>{data.landing.description}</h3>

                  <MailchimpForm hoverCallback={this.handleButtonHover} />
                  <p className="description text-small">
                    {data.form.description}
                  </p>
                </div>
              </div>
            </section>
          </Banner>

          <div className="features">
            <section id="problem">
              <div className="container-sm">
                <div className="text-left">
                  <H2Blob colour="purple" position="right">
                    {data.problem.title}
                  </H2Blob>

                  <span className="first-patagraph">
                    <p>{data.problem.text1}</p>
                    <A href={data.problem.link} colour="purple">
                      {data.problem.linkText}
                    </A>
                  </span>

                  <p>{data.problem.text2}</p>
                  <p>{data.problem.solution}</p>
                </div>
              </div>
            </section>

            <section id="why">
              <div className="container-sm">
                <div className="text-right">
                  <H2Blob colour="red" position="left">
                    {data.why.title}
                  </H2Blob>
                  <p>{data.why.text}</p>
                </div>
              </div>
            </section>

            <section id="how">
              <div className="container-sm">
                <div className="text-left">
                  <H2Blob colour="orange" position="right">
                    {data.how.title}
                  </H2Blob>
                  <p>{data.how.text}</p>
                </div>
              </div>
            </section>

            <section id="what">
              <div className="container-sm">
                <div className="text-right">
                  <H2Blob colour="yellow" position="left">
                    {data.what.title}
                  </H2Blob>
                  <p>{data.what.text}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomePage

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
