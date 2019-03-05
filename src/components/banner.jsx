import React from 'react';

const Banner = ({colour, shade, children, zIndex, top, angle}) => {
  
  const style = {
    height: 'inherit',
    minHeight: '95vh',
    width: '110%',
    background: `var(--${colour}-${shade})`,
    borderRadius: '0% 0% 75% 25% / 0% 0% 30% 5%',
    position: 'absolute',
    top,
    left: '-5%',
    right: '0',
    zIndex,
    transform: `rotate(${angle}deg)`
  }
  
  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Banner;