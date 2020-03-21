import React, { useState } from "react";

export default function FormSingleInputArray({ label }) {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }
  const nameofInput = `.numberOf${label}s`;

  //onChange Handler
  const handleChange = () => {
    let inputValue = document.querySelector(nameofInput).value;
    setNumber(inputValue);
  };

  let inputs = tempArray.map((input, i) => {
    return (
      <section key={i}>
        <div
          style={{
            display: "flex"
          }}
        >
          <label>{label}:</label>
          <input type="text" name={`${label}${i}`} placeholder={`${label}`} />
        </div>
      </section>
    );
  });

  return (
    <div>
      <p>{label}: </p>
      <div
        style={{
          display: "flex"
        }}
      >
        <label>Number of {label}:</label>
        <input
          className={`numberOf${label}s`}
          type="number"
          name={`numberOf${label}s`}
          placeholder={`Number Of ${label}s`}
          onChange={handleChange}
        />
      </div>
      {inputs}
    </div>
  );
}
