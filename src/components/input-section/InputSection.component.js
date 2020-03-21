import React from 'react';
import './InputSection.styles.css';

function InputSection({title,children}) {
  return (
    // section creator for inputs
    <div className="section-wrapper" >
      <span className="title" >{title}</span>
      <div className="children-wrapper">
        {children}
      </div>
    </div>
  )
}

export default InputSection;
