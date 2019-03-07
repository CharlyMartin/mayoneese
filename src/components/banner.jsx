// import Librairies
import React from 'react';

// Import CSS
import './banner.css';

function Banner({colour, shade, position, children}) {
  
  const style = {
    background: `var(--${colour}-${shade})`,
  }
  
  return (
    <div className={`banner ${position}`} style={style}>
      {children}
      <div className="banner-placeholder" />
    </div>
  );
};

export default Banner;