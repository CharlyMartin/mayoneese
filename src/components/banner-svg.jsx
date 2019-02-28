import React from 'react';

function svgCode(id) {
  return {
    __html: `
      <svg width="1440px" height="829px" viewBox="0 0 1440 829" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="${id}" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M0,0 L1440,0 L1440,578.048796 C1292.5659,667.712567 1101.23257,738.423463 866,790.181484 C630.767434,841.939505 342.100767,841.939505 0,790.181484 L0,0 Z" id="Path"></path>
        </g>
      </svg>
    `
  }
}

function BannerSVG(props) {
  return <span dangerouslySetInnerHTML={svgCode(props.id)} />
}

export default BannerSVG;
