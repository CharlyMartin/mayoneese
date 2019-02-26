import { StaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import Img from "gatsby-image";

// Data
const query = graphql`
  query headerQuery {
    logo: file(name: {eq: "logo"}) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

// Component
function Header(props) {
  console.log(props)

  return (
    <div className="container">
      <br/>
      <Link to="/">
        <Img fixed={props.logo.childImageSharp.fixed} />
      </Link>
      <br/>
    </div>
  )
}

// StaticQuery
export default () => (
  <StaticQuery
    query={query}
    render={data => <Header {...data} />}
  />
)


