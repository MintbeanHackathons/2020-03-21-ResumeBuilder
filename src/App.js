import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {

  // setting initial state to match the schema on https://jsonresume.org/schema/
  state = {
    data: {
      basics: {
        name: null,
        label: null,
        picture: null,
        email: null,
        phone: null,
        website: null,
        summary: null,
        location: {
          address: null,
          postalCode: null,
          city: null,
          countryCode: null,
          region: null
        },
        profiles: []
      },
      work: [],
      volunteer: [],
      education: [],
      awards: [],
      publications: [],
      skills: [],
      languages: [],
      interests: [],
      references: []
    }
  }

  // adds a new entry to the respective section
  addNew = (event) => {
    const entryArray = this.state.data[event.target.value].slice()
    if (event.target.value === "education") {
      entryArray.push({
        institution: null,
        area: null,
        studyType: null,
        startDate: null,
        endDate: null,
        gpa: null,
        courses: []
      })
    }

    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.value]: entryArray
      }
    })
  }

  // event handler to retrieve form data
  formHandler = (event) => {
    event.preventDefault()
    console.log(event.target.name)
    // if (event.target.name === "education") {
    //   console.log("edd")
    // }
  }

  render() {
    return (
      <div className="main">
        <h1 className="main__title">Resume Builder</h1>

        <form className="form" id="form" onSubmit={this.formHandler}>

          <h2 className="form__subheader">Basic Information</h2>
          <input className="form__input" type="text" name="first-name" placeholder="First Name" />
          <input className="form__input" type="text" name="last-name" placeholder="Last Name" />
          <input className="form__input" type="text" name="occupation" placeholder="Occupation" />
          <input className="form__input" type="text" name="email" placeholder="Email" />
          <input className="form__input" type="text" name="phone" placeholder="Phone" />
          <input className="form__input" type="text" name="website" placeholder="Website (Optional)" />

          <h2 className="form__subheader">Summary</h2>
          <textarea className="form__input" type="text" name="website" placeholder="Summary (Optional)" />

          <h2 className="form__subheader">Education</h2>
          {this.state.data.education.map(item => {
            return (
              <div className="form__education" key={this.state.data.education.length}>
                <input className="form__input" type="text" name="schoolName" placeholder="School Name" />
                <div className="form__education-dates">
                  <label className="form__education-start" htmlFor="schoolStart">Start Date</label>
                  <input className="form__input" type="date" name="schoolStart" />
                </div>
              </div>
            )
          })}
          <button className="form__add-new" type="button" name="addNew" value="education" onClick={this.addNew}>Add New Education</button>

          <h2 className="form__subheader">Employment</h2>
          <button className="form__add-new" type="button" name="addNew" value="work" onClick={this.addNew}>Add New Employer</button>

          <button className="form__button" name="submit">Convert to JSON</button>
        </form>

      </div>
    );
  }
}