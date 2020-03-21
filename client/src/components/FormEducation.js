import React, { useState } from "react";
import FormSingleInputArray from "./FormSingleInputArray";

export default function FormEducation() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }

  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfEducations").value;
    setNumber(inputValue);
  };

  let educations = tempArray.map((work, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Institution:</label>
          <input
            type="text"
            name={`educationInstitution${i}`}
            placeholder="Institution"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Area of Study:</label>
          <input
            type="text"
            name={`educationArea${i}`}
            placeholder="Field of Study"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Degree Received:</label>
          <input
            type="text"
            name={`educationStudyType${i}`}
            placeholder="Website"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Start Date:</label>
          <input
            type="date"
            name={`educationStartDate${i}`}
            placeholder="Start Date"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>End Date:</label>
          <input
            type="date"
            name={`educationEndDate${i}`}
            placeholder="End Date"
          />
        </div>

        <div style={{ display: "flex" }}>
          <label>GPA:</label>
          <input type="text" name={`educationGPA${i}`} placeholder="GPA" />
        </div>
        <FormSingleInputArray label="Education-Courses" />
      </section>
    );
  });
  return (
    <div>
      <h4>Education: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Educational Institutions:</label>
        <input
          className="numberOfEducations"
          type="number"
          name="numberOfEducations"
          placeholder="Number of Education Institutions"
          onChange={handleChange}
        />
      </div>
      {educations}
    </div>
  );
}
