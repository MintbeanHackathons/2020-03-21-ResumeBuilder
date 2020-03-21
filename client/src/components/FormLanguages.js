import React, { useState } from "react";

export default function FormLanguages() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }
  //onChange Handler
  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfLanguages").value;
    setNumber(inputValue);
  };

  let languages = tempArray.map((award, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Language:</label>
          <input type="text" name={`language${i}`} placeholder="Language" />
        </div>

        <div style={{ display: "flex" }}>
          <label>Fluency:</label>
          <input
            type="text"
            name={`languageFluency${i}`}
            placeholder="Fluency"
          />
        </div>
      </section>
    );
  });

  return (
    <div>
      <h4>Languages: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Languages:</label>
        <input
          className="numberOfLanguages"
          type="number"
          name="numberOfLanguages"
          placeholder="Number of Languages"
          onChange={handleChange}
        />
      </div>
      {languages}
    </div>
  );
}
