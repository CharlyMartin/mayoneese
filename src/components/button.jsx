import React from 'react';

import '.button.css'

const Button = (props) => {
  return (    
    <span className={`button ${props.class}`}>
      {props.text}
    </span>
  );
};

export default Button;