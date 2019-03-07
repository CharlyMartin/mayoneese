import React from 'react';

const Banner = ({colour, shade, zIndex, spread, angle}) => {
  
  const style = {
    minHeight: '98vh',
    width: '120vw',
    background: `var(--${colour}-${shade})`,
    borderRadius: '0% 0% 60% 60% / 0% 0% 50% 25%',
    position: 'absolute',
    top: `${spread}vh`,
    left: '-10v%',
    right: '-10%',
    zIndex,
    transform: `rotate(${angle}deg)`
  }
  
  return (
    <div style={style} />
  );
};

export default Banner;