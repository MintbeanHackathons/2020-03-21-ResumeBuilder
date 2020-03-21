import React from 'react';

import './App.css';

import InputForm from './components/input-form/InputForm.component';

function App() {

  // this function will display the input as json on the screen
  const Display_JsonResumeObject = (e,state) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <div className="App">
      <InputForm submitHandler={Display_JsonResumeObject} />
    </div>
  );
}

export default App;
