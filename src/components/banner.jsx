import React from 'react';

const Banner = ({colour, shade, children, zIndex, spread, angle}) => {
  
  const style = {
    minHeight: '99vh',
    width: '120vw',
    background: `var(--${colour}-${shade})`,
    borderRadius: '0% 0% 60% 60% / 0% 0% 50% 25%',
    position: 'absolute',
    top: `${spread}vh`,
    left: '-10vw',
    right: '-10vw',
    zIndex,
    transform: `rotate(${angle}deg)`
  }
  
  return (
    <div style={style} />
    //   {children}
    // </div>
  );
};

export default Banner;