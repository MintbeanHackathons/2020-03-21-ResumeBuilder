import React, { Component } from 'react';
import nanoid from 'nanoid';
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
        key: nanoid(),
        institution: null,
        area: null,
        studyType: null,
        startDate: null,
        endDate: null,
        gpa: null,
        courses: []
      })
    } else if (event.target.value === "work") {
      entryArray.push({
        key: nanoid(),
        company: null,
        position: null,
        website: null,
        startDate: null,
        endDate: null,
        summary: null,
        highlights: []
      })
    } else if (event.target.value === "skills") {
      entryArray.push({
        key: nanoid(),
        name: null
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
    console.log(event.target)
    const newState = {
      ...this.state,
      data: {
        ...this.state.data,
        basics: {
          name: event.target['first-name'] + " " + event.target['last-name'],
          label: event.target['occupation'],
          email: event.target['email'],
          phone: event.target['phone'],
          summary: event.target['summary'],
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
          <textarea className="form__input" type="text" name="summary" placeholder="Summary (Optional)" />

          <h2 className="form__subheader">Education</h2>
          {this.state.data.education.map(item => {
            return (
              <div className="form__education" key={item.key}>
                <input className="form__input" type="text" name="institution" placeholder="School Name" />
                <div className="form__education-dates">
                  <label className="form__education-start" htmlFor="startDate">Start Date</label>
                  <input className="form__input" type="date" name="startDate" />
                  <label className="form__education-start" htmlFor="endDate">End Date</label>
                  <input className="form__input" type="date" name="endDate" />
                </div>
                <div className="form__education-info">
                  <input className="form__input" type="text" name="studyType" placeholder="Degree" />
                  <input className="form__input" type="text" name="area" placeholder="Field" />
                </div>
              </div>
            )
          })}
          <button className="form__add-new" type="button" name="addNew" value="education" onClick={this.addNew}>Add New Education</button>

          <h2 className="form__subheader">Employment</h2>
          {this.state.data.work.map(item => {
            return (
              <div className="form__work" key={item.key}>
                <input className="form__input" type="text" name="company" placeholder="Employer Name" />
                <input className="form__input" type="text" name="position" placeholder="Title/Postion" />
                <div className="form__work-date">
                  <label className="form__education-start" htmlFor="startDate">Start Date</label>
                  <input className="form__input" type="date" name="startDate" />
                  <label className="form__education-start" htmlFor="endDate">End Date</label>
                  <input className="form__input" type="date" name="endDate" />
                </div>
                <textarea className="form__input" type="text" name="summary" placeholder="Description" />
              </div>
            )
          })}
          <button className="form__add-new" type="button" name="addNew" value="work" onClick={this.addNew}>Add New Employer</button>

          <h2 className="form__subheader">Skills</h2>
          {this.state.data.skills.map(item => {
            return (
              <div className="form__skills" key={item.key}>
                <input className="form__input" type="text" name="name" placeholder="Skill" />
              </div>
            )
          })}
          <button className="form__add-new" type="button" name="addNew" value="skills" onClick={this.addNew}>New Skill</button>

          <button className="form__button" name="submit">Convert to JSON</button>
        </form>
      </div>
    );
  }
}