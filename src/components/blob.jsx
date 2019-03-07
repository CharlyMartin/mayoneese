// Librairies
import React from 'react';

// CSS
import './blob.css';

function Blob(props) {
  const { width, rotate, colour, shade, left, top, right } = props;

  const style = {
    left,
    top, 
    right,
    width,
    transform: `rotate(${rotate}deg)`,
  }
  
  const shape = {
    __html: `        
      <g fill="var(--${colour}-${shade})" stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M389.667138,90.1406907 C417.876614,161.031718 377.397589,279.640055 309.548032,325.98749 C241.593606,372.334925 146.268649,346.535614 82.4040732,291.62646 C18.5394977,236.831464 -13.8646959,153.040781 5.64074102,95.1635655 C25.1461779,37.1721938 96.5612452,4.98013312 180.665333,0.52803963 C264.874289,-3.92405387 361.56253,19.2496636 389.667138,90.1406907 Z" />
      </g>
    `
  }

  const isDark = () => {
    return (Number(shade) > 20) ? 'dark' : 'light';
  }

  return (
   <svg
      viewBox="0 0 399 350"
      className={`blob ${isDark()}`}
      style={style}
      dangerouslySetInnerHTML={shape}
      />
  )
}

export default Blob;


// function BannerSVG({ data }) {
//   const style = {
//     backgroundImage: `url(${data})`,
//     width: `100%`,
//     height: `700px`,
//     bacgroundColor: `red`,
//   }

//   return <div className="banner-svg" style={style} />
// }