// Librairies
import React from 'react';

function BannerSVG({ id, zIndex, top, colour, shade }) {  
  const style = {
    zIndex,
    top
  } 
  
  const svg = {
    __html: `
      <svg viewBox="0 0 1440 829" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="banner" fill="var(--${colour}-${shade})" stroke="none" stroke-width="1" fill-rule="evenodd">
          <path d="M0,0 L1440,0 L1440,578.048796 C1292.5659,667.712567 1101.23257,738.423463 866,790.181484 C630.767434,841.939505 342.100767,841.939505 0,790.181484 L0,0 Z" id="Path"></path>
        </g>
      </svg>
    `
  }

  return <div className="svg-container"
              id={id}
              style={style}
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