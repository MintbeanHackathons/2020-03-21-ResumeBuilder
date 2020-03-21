import React, { Component } from 'react';

class TestComponent extends Component {
  state = {
    sayStuff: 'stuff'
  };

  render() {
    return (
      <div>
        <p>{this.state.sayStuff}</p>
      </div>
    );
  }
}

export default TestComponent;
