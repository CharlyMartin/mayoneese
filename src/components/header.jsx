// Librairies
import { Link } from 'gatsby';
import React from 'react';

// Images
import logo from '../images/logo.png';
import Blob from './blob-svg';

// Data
import pages from '../data/internal-links';

// CSS
import './header.css';

// Component
function Header(props) {
  // console.log(props);

  return (
    <header className="navbar">
      <div className="container"> 
        <Link to={`/${pages.home}`}>
          {/* <Img fixed={props.logo.childImageSharp.fixed} /> */}
          <span className="navbar-content">
            <img src={logo} alt="Mayoneese Logo" id="logo" />
            <Blob
              width="270px"
              colour="yellow"
              shade="10"
              top="-190px"
              left="-65px"
              rotate="180"
            />
          </span>
        </Link>
      </div>
    </header>
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
