// Librairies
import React from 'react';

function HeadphonesSVG(props) {
  const { width, rotate, colour, shade } = props;

  const style = {
    width,
    transform: `rotate(${rotate}deg)`
  }
  
  const shape = {
    __html: `        
      <g fill="var(--${colour}-${shade})" stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M75.9 52.2V38C75.9 17.1 58.9 0.100006 38 0.100006C17.1 0.100006 0.1 17.1 0.1 38V52.3C3.7998e-07 53 0 53.7 0 54.4C0 66.3 9.2 75.9 20.5 75.9C22.2 75.9 23.5 74.6 23.5 72.9V35.9C23.5 34.2 22.2 32.9 20.5 32.9C14.9 32.9 9.8 35.3 6.1 39.1V38C6.1 20.4 20.4 6.10001 38 6.10001C55.6 6.10001 69.9 20.4 69.9 38V39C66.2 35.2 61.1 32.8 55.5 32.8C53.8 32.8 52.5 34.1 52.5 35.8V72.8C52.5 74.5 53.8 75.8 55.5 75.8C66.8 75.8 76 66.2 76 54.3C76 53.6 76 52.9 75.9 52.2Z" />
      </g>
    `
  }

  return (
    <svg
      id="headphones"  
      viewBox="0 0 76 76"
      style={style}
      dangerouslySetInnerHTML={shape}
      />
  )
}

export default HeadphonesSVG;


// function BannerSVG({ data }) {
//   const style = {
//     backgroundImage: `url(${data})`,
//     width: `100%`,
//     height: `700px`,
//     bacgroundColor: `red`,
//   }

//   return <div className="banner-svg" style={style} />
// }