import React from 'react';
import './inputEleme.styles.css';

// Customized input element to prevent repetition of input code
function InputElem({label,type,...otherProps}) {
  return (
    <div className="input-container">
      {label ? <label className="label">{label}</label> : null}
      <input {...otherProps} type={type} className="input" />
    </div>
  )
}

export default InputElem;
