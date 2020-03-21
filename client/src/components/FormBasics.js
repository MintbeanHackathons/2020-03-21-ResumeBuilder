import React from "react";
import FormProfiles from "./FormProfiles";

export default function FormBasics() {
  return (
    <section>
      <h3>Basics:</h3>
      <div style={{ display: "flex" }}>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div style={{ display: "flex" }}>
        <label>Label:</label>
        <input type="text" name="label" placeholder="Label" />
      </div>
      <div style={{ display: "flex" }}>
        <label>Picture:</label>
        <input type="file" name="picture" placeholder="Picture" />
      </div>
      <div style={{ display: "flex" }}>
        <label>Email:</label>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div style={{ display: "flex" }}>
        <label>Phone:</label>
        <input type="tel" name="phone" placeholder="555-555-5555" />
      </div>
      <div style={{ display: "flex" }}>
        <label>Website:</label>
        <input type="text" name="website" placeholder="Website" />
      </div>
      <div style={{ display: "flex" }}>
        <label>Summary:</label>
        <input type="text" name="summary" placeholder="Summary" />
      </div>

      <div>
        <h4>Location:</h4>
        <div style={{ display: "flex" }}>
          <label>Address:</label>
          <input type="text" name="address" placeholder="Address" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Postal Code:</label>
          <input type="text" name="postalCode" placeholder="Postal Code" />
        </div>
        <div style={{ display: "flex" }}>
          <label>City:</label>
          <input type="text" name="city" placeholder="City" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Country Code:</label>
          <input type="text" name="countryCode" placeholder="Country Code" />
        </div>
        <div style={{ display: "flex" }}>
          <label>Region (State or Province):</label>
          <input type="text" name="region" placeholder="Region" />
        </div>
      </div>
      <FormProfiles />
    </section>
  );
}
