import React, { useState } from "react";

export default function FormAwards() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }

  //onChange Handler
  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfAwards").value;
    setNumber(inputValue);
  };

  let awards = tempArray.map((award, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Title:</label>
          <input type="text" name={`awardTitle${i}`} placeholder="Title" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Date:</label>
          <input type="date" name={`awardDate${i}`} placeholder="Date" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Awarder:</label>
          <input type="text" name={`awardAwarder${i}`} placeholder="Awarder" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Summary:</label>
          <input type="text" name={`awardSummary${i}`} placeholder="Summary" />
        </div>
      </section>
    );
  });

  return (
    <div>
      <h4>Awards: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Awards:</label>
        <input
          className="numberOfAwards"
          type="number"
          name="numberOfAwards"
          placeholder="Number of Awards"
          onChange={handleChange}
        />
      </div>
      {awards}
    </div>
  );
}
