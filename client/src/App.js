import React from "react";
import Form from "./components/Form";

function App() {
  //Quick note on progress: I have the form displaying fully but no function to it :(
  //Struggled to think of a more efficient way to quickly make the form and free up time
  return (
    <div className="App">
      <header className="App-header">
        <h2>Resume Builder</h2>
      </header>
      <Form />
    </div>
  );
}

export default App;
