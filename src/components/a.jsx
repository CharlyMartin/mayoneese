import React from 'react';

function A(props) {
  const style = {
    background: `var(--${props.colour}-50)`
  }

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={props.class}
      style={style}
      >
      {props.children}
    </a>
  )  
}

export default A;



