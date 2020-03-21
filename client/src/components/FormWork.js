import React, { useState } from "react";
import FormSingleInputArray from "./FormSingleInputArray";

export default function FormWork() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }

  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfWorks").value;
    setNumber(inputValue);
  };

  let works = tempArray.map((work, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Company:</label>
          <input type="text" name={`workCompany${i}`} placeholder="Company" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Position:</label>
          <input type="text" name={`workPosition${i}`} placeholder="position" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Website:</label>
          <input type="text" name={`workWebsite${i}`} placeholder="Website" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Start Date:</label>
          <input
            type="date"
            name={`workStartDate${i}`}
            placeholder="Start Date"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>End Date:</label>
          <input type="date" name={`workEndDate${i}`} placeholder="End Date" />
        </div>

        <div style={{ display: "flex" }}>
          <label>Summary:</label>
          <input type="text" name={`workSummary${i}`} placeholder="Summary" />
        </div>
        <FormSingleInputArray label="Work-Highlights" />
      </section>
    );
  });
  return (
    <div>
      <h4>Work: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Work Experiences:</label>
        <input
          className="numberOfWorks"
          type="number"
          name="numberOfWorks"
          placeholder="Number of Work Experiences"
          onChange={handleChange}
        />
      </div>
      {works}
    </div>
  );
}
