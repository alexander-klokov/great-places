import React from 'react';

import './Avatar.css';

export const Avatar = props => {
  const {className, style, width} = props
  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{width, height: width}}
      />
    </div>
  )
}
