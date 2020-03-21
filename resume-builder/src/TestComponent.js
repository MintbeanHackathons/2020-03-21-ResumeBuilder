import React, { Component } from 'react';

class TestComponent extends Component {
  state = {
    sayStuff: 'stuff'
  };

  handleChange = (e) => {
    this.setState({
      sayStuff: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{JSON.stringify(this.state.sayStuff)}</p>
        <form>
          <input type="textarea" onChange={e => this.handleChange(e)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TestComponent;
