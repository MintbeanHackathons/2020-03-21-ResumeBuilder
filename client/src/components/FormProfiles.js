import React, { useState } from "react";

export default function FormProfiles() {
  const [number, setNumber] = useState(0);

  //onChange Handler
  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfProfiles").value;

    setNumber(inputValue);
  };

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }

  let profiles = tempArray.map((profile, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Network:</label>
          <input
            type="text"
            name={`profileNetwork${i}`}
            placeholder="Summary"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Username:</label>
          <input
            type="text"
            name={`profileUsername${i}`}
            placeholder="Summary"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Url:</label>
          <input type="text" name={`profileUrl${i}`} placeholder="Summary" />
        </div>
      </section>
    );
  });

  return (
    <div>
      <h4>Profiles: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Profiles:</label>
        <input
          className="numberOfProfiles"
          type="number"
          name="numberOfProfiles"
          placeholder="Number of Profiles"
          onChange={handleChange}
        />
      </div>
      {profiles}
    </div>
  );
}
