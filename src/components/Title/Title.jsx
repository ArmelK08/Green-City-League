import React from 'react';
import './title.css';
import Trait from '../Trait/Trait';

function Title({ text = 'Default Title', className = '', style = {} }) {
  return (
    <div className="title-container">
      <h1 className={`title ${className}`} style={style}>
        {text}
      </h1>
      
    </div>
  );
}

export default Title;
