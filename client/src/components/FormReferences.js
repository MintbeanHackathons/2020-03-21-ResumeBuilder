import React, { useState } from "react";

export default function FormReferences() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }
  //onChange Handler
  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfReferences").value;
    setNumber(inputValue);
  };

  let references = tempArray.map((award, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Name:</label>
          <input
            type="text"
            name={`referenceName${i}`}
            placeholder="Reference Name"
          />
        </div>

        <div style={{ display: "flex" }}>
          <label>Reference:</label>
          <input type="text" name={`reference${i}`} placeholder="Reference" />
        </div>
      </section>
    );
  });

  return (
    <div>
      <h4>References: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of References:</label>
        <input
          className="numberOfReferences"
          type="number"
          name="numberOfReferences"
          placeholder="Number of References"
          onChange={handleChange}
        />
      </div>
      {references}
    </div>
  );
}
