import React from 'react';
import './basics.scss';


export default function Basics(props) {


  return(
    <div className="basic">
      <label className="" htmlFor="name">Name</label>
      <input className="" type="text" name="name" placeholder="Name"/>
      <label htmlFor="jobTitle">Job Title?</label>
      <input type="text" name="jobTitle" placeholder="Job title"/>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="Email"/>
      <label htmlFor="phone">Phone number</label>
      <input type="text" name="phone" placeholder="Phone number"/>
      <label htmlFor="website">Website</label>
      <input type="text" name="website" placeholder="Website"/>
      <label htmlFor="summary">About you (max 300 characters)</label>
      <textarea name="summary" maxlength="300" placeholder="Short summary"/>
      <label htmlFor="address">Address</label>
      <input type="text" name="address" placeholder="Enter street name and number" placeholder="address"/>
      <label htmlFor="postalCode">Postal Code</label>
      <input type="text" name="postalCode" placeholder="Postal Code"/>
      <label htmlFor="city">City</label>
      <input type="text" name="city" placeholder="City"/>
      <label htmlFor="region">Province/State</label>
      <input type="text" name="region" placeholder="Province/State"/>
      <label htmlFor="country">Country</label>
      <input type="text" name="country" placeholder="Country"/>
    </div>
  )
}