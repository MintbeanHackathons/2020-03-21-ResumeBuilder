import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <form className="form">
          <input className="form__input" name="name" placeholder="Full Name" /> 
        </form>
      </div>
    );
  }
}
