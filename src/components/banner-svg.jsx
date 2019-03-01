// Librairies
import React from 'react';

function BannerSVG({ id, zIndex, top, colour, shade }) {  

  const divStyle = {
    position: 'absolute',
    left: '0',
    right: '0',
    zIndex,
    top
  }

  const svgInlineStyle = `width: 100%; height:100%`
  
  const svg = {
    __html: `
      <svg viewBox="0 0 1440 829" style="${svgInlineStyle}">
        <g id="banner" fill="var(--${colour}-${shade})" stroke="none" stroke-width="1" fill-rule="evenodd">
          <path d="M0,0 L1440,0 L1440,578.048796 C1292.5659,667.712567 1101.23257,738.423463 866,790.181484 C630.767434,841.939505 342.100767,841.939505 0,790.181484 L0,0 Z" id="Path"></path>
        </g>
      </svg>
    `
  }

  return <div className="svg-container"
              id={id}
              style={divStyle}
              dangerouslySetInnerHTML={svg} />
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