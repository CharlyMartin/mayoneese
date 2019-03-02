// Librairies
import { Link } from 'gatsby';
import React from 'react';

// SVG
import logo from '../images/logo.png';

// Data
import pages from '../data/internal-links';

// CSS
import '../css/components/navbar.css';

// Component
function Header(props) {
  // console.log(props);

  return (
    <div className="container">
      <Link to={`/${pages.home}`}>
        <img src={logo} alt="Mayoneese Logo" id="logo"/>
        {/* <Img fixed={props.logo.childImageSharp.fixed} /> */}
      </Link>
    </div>
  )
}

export default Header;

// StaticQuery
// export default () => (
//   <StaticQuery
//     query={query}
//     render={data => <Header {...data} />}
//   />
// )

// const query = graphql`
//   query headerQuery {
//     logo: file(name: {eq: "mayoneese"}) {
//       childImageSharp {
//         fixed(width: 200) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
