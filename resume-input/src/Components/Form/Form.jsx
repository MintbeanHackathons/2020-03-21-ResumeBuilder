import React from 'react';
import './form.scss';
import Basics from '../Basics/Basics';

export default function Form(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value)
  }

  return(
    <>
      <h1 className="title">A form that doesn't do anything... yet</h1>
      <form className="form" onSubmit={submitHandler}>
        {/* will flip between the different inputs */}
        <Basics/>
      </form>
    </>
  )
}