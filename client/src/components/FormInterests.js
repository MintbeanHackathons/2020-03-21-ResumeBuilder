import React, { useState } from "react";
import FormSingleInputArray from "./FormSingleInputArray";

export default function FormInterests() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }
  //onChange Handler
  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfInterests").value;
    setNumber(inputValue);
  };

  let interests = tempArray.map((award, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Name:</label>
          <input type="text" name={`InterestName${i}`} placeholder="Interest" />
        </div>
        <FormSingleInputArray label="Keywords" />
      </section>
    );
  });

  return (
    <div>
      <h4>Interests: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Interests:</label>
        <input
          className="numberOfInterests"
          type="number"
          name="numberOfInterests"
          placeholder="Number of Interests"
          onChange={handleChange}
        />
      </div>
      {interests}
    </div>
  );
}
