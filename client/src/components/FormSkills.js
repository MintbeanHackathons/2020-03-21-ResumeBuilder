import React, { useState } from "react";
import FormSingleInputArray from "./FormSingleInputArray";

export default function FormSkills() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }
  //onChange Handler
  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfSkills").value;
    setNumber(inputValue);
  };

  let skills = tempArray.map((award, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Skill:</label>
          <input type="text" name={`skillName${i}`} placeholder="Skill" />
        </div>

        <div style={{ display: "flex" }}>
          <label>Level:</label>
          <input
            type="text"
            name={`skillLevel${i}`}
            placeholder="Skill Level"
          />
        </div>
        <FormSingleInputArray label="Keywords" />
      </section>
    );
  });

  return (
    <div>
      <h4>Skills: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Skills:</label>
        <input
          className="numberOfSkills"
          type="number"
          name="numberOfSkills"
          placeholder="Number of Skills"
          onChange={handleChange}
        />
      </div>
      {skills}
    </div>
  );
}
