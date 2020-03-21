import React, { useState } from "react";

export default function FormPublications() {
  const [number, setNumber] = useState(0);

  //Creating array so I can make a map for profile inputs
  let tempArray = [];
  for (let i = 0; i < number; i++) {
    tempArray.push(i);
  }

  const handleChange = () => {
    let inputValue = document.querySelector(".numberOfPublications").value;
    setNumber(inputValue);
  };

  let publications = tempArray.map((publication, i) => {
    return (
      <section key={i}>
        <div style={{ display: "flex" }}>
          <label>Name:</label>
          <input type="text" name={`publicationName${i}`} placeholder="Title" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Publisher:</label>
          <input
            type="text"
            name={`publicationPublisher${i}`}
            placeholder="Title"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Release Date:</label>
          <input type="date" name={`publicationDate${i}`} placeholder="Date" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Website:</label>
          <input
            type="text"
            name={`publicationWebsite${i}`}
            placeholder="Awarder"
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Summary:</label>
          <input
            type="text"
            name={`publicationSummary${i}`}
            placeholder="Summary"
          />
        </div>
      </section>
    );
  });

  return (
    <div>
      <h4>Publication: </h4>
      <div style={{ display: "flex" }}>
        <label>Number of Publications:</label>
        <input
          className="numberOfPublications"
          type="number"
          name="numberOfPublications"
          placeholder="Number of Publications"
          onChange={handleChange}
        />
      </div>
      {publications}
    </div>
  );
}
