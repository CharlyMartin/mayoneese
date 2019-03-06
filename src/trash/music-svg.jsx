// Librairies
import React from 'react';

function BlobSVG(props) {
  const { width, rotate, colour, shade } = props;

  const style = {
    width,
    transform: `rotate(${rotate}deg)`
  }
  
  const shape = {
    __html: `        
      <g fill="var(--${colour}-${shade})" stroke="none" stroke-width="1" fill-rule="evenodd">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.7996 0C73.4996 0 73.0996 -9.68575e-08 72.7996 0.0999999H72.6996C72.5996 0.0999999 72.5996 0.0999999 72.4996 0.0999999L27.6996 11.3C25.0996 11.8 23.0996 14.1 23.0996 16.8V69.7C20.6996 68.3 17.7996 67.4 14.6996 67.4C6.89961 67.4 0.599609 72.4 0.599609 78.6C0.599609 85 6.89961 90 14.6996 90C22.4996 90 28.7996 85 28.7996 78.7V33.9L73.7996 22.7V58.6C71.3996 57.2 68.4996 56.3 65.3996 56.3C57.5996 56.3 51.2996 61.3 51.2996 67.5C51.2996 73.7 57.5996 78.7 65.3996 78.7C73.1996 78.7 79.4996 73.7 79.4996 67.5V5.6C79.3996 2.5 76.8996 0 73.7996 0Z" />
      </g>
    `
  }

  return (
    <svg
      id="music"
      viewBox="0 0 80 90"
      style={style}
      dangerouslySetInnerHTML={shape}
      />
  )
}

export default BlobSVG;


// function BannerSVG({ data }) {
//   const style = {
//     backgroundImage: `url(${data})`,
//     width: `100%`,
//     height: `700px`,
//     bacgroundColor: `red`,
//   }

//   return <div className="banner-svg" style={style} />
// }