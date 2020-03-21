import React, { useState } from "react";
import FormSingleInputArray from "./FormSingleInputArray";

export default function FormVolunteer() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }

  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfVolunteers").value;
    setNumber(inputValue);
  };

  let works = tempArray.map((work, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Organization:</label>
          <input
            type="text"
            name={`volunteerOrganization${i}`}
            placeholder="Company"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Position:</label>
          <input
            type="text"
            name={`volunteerPosition${i}`}
            placeholder="position"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Website:</label>
          <input
            type="text"
            name={`volunteerWebsite${i}`}
            placeholder="Website"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Start Date:</label>
          <input
            type="date"
            name={`volunteerStartDate${i}`}
            placeholder="Start Date"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>End Date:</label>
          <input
            type="date"
            name={`volunteerEndDate${i}`}
            placeholder="End Date"
          />
        </div>

        <div style={{ display: "flex" }}>
          <label>Summary:</label>
          <input
            type="text"
            name={`volunteerSummary${i}`}
            placeholder="Summary"
          />
        </div>
        <FormSingleInputArray label="Volunteer-Highlights" />
      </section>
    );
  });
  return (
    <div>
      <h4>Volunteer: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Volunteer Experiences:</label>
        <input
          className="numberOfVolunteers"
          type="number"
          name="numberOfVolunteerss"
          placeholder="Number of Volunteer Experiences"
          onChange={handleChange}
        />
      </div>
      {works}
    </div>
  );
}
