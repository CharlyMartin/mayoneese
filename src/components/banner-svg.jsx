// Librairies
import React from 'react';

// Helpers
import { inlineStyle } from '../helpers/functions';

class BannerSVG extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { zIndex, top, colour, shade } = this.props;
  
    const svgStyle = {
      'position': 'absolute',
      'left': '0',
      'right': '0',
      'z-index': zIndex,
      'top': top,
      'height': '100vh',
    }
    
    const svg = {
      __html: `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg viewBox="0 0 180 90" style="${inlineStyle(svgStyle)}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="Shape/Banner" fill="var(--${colour}-${shade})">
                <path d="M0,0 L180,0 L180,62.7555991 C161.570737,72.4899047 137.654071,80.1666003 108.25,85.7856858 C78.8459292,91.4047714 42.7625959,91.4047714 0,85.7856858 L0,0 Z" id="Path"></path>
                </g>
            </g>
        </svg>
      `
    }

    return <span
      className="svg-container"
      dangerouslySetInnerHTML={svg}
      style={{overflow: 'hidden'}}
      />
  }
}

export default BannerSVG;


// function BannerSVG({ data }) {
//   const style = {
//     backgroundImage: `url(${data})`,
//     width: `100%`,
//     height: `700px`,
//     bacgroundColor: `red`,
//   }

//   return <div className="banner-svg" style={style} />
// }