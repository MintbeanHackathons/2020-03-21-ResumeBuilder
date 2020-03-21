import React from 'react';
import './form.scss';
import Basics from '../Basics/Basics';

export default function Form(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value)
  }

  return(
    <form onSubmit={submitHandler}>
      {/* will flip between the different inputs */}
      <Basics/>
    </form>
  )
}