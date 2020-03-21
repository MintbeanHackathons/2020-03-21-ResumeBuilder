import React from "react";
import "./basics.scss";
import Button from "../Button/Index";

export default function Basics(props) {
  


  return (
    <div className="basic">
      <div className="basic__container">
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="name">
            Name
          </label>
          <input className="" type="text" name="name" placeholder="Name" />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="jobTitle">Job Title?</label>
          <input type="text" name="jobTitle" placeholder="Job title" />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="phone">Phone number</label>
          <input type="text" name="phone" placeholder="Phone number" />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="website">Website</label>
          <input type="text" name="website" placeholder="Website" />
        </div>
        <label className="basic__label" htmlFor="summary">About you (max 300 characters)</label>
        <textarea name="summary" maxlength="300" placeholder="Short summary" />
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter street name and number"
            placeholder="address"
          />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="postalCode">Postal Code</label>
          <input type="text" name="postalCode" placeholder="Postal Code" />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="city">City</label>
          <input type="text" name="city" placeholder="City" />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="region">Province/State</label>
          <input type="text" name="region" placeholder="Province/State" />
        </div>
        <div className="basic__pairs">
          <label className="basic__label" htmlFor="country">Country</label>
          <input type="text" name="country" placeholder="Country" />
        </div>
      </div>
      <Button textNext="Next"/>
    </div>
  );
}
