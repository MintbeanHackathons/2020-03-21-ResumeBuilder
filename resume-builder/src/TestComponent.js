import React, { Component } from 'react';

class TestComponent extends Component {
  state = {
    "basics": {
      "name": "John Doe",
      "label": "Programmer",
      "picture": "",
      "email": "john@gmail.com",
      "phone": "(912) 555-4321",
      "website": "http://johndoe.com",
      "summary": "A summary of John Doe...",
      "location": {
        "address": "2712 Broadway St",
        "postalCode": "CA 94115",
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      },
      "profiles": [{
        "network": "Twitter",
        "username": "john",
        "url": "http://twitter.com/john"
      }]
    },
    "work": [{
      "company": "Company",
      "position": "President",
      "website": "http://company.com",
      "startDate": "2013-01-01",
      "endDate": "2014-01-01",
      "summary": "Description...",
      "highlights": [
        "Started the company"
      ]
    }],
    "volunteer": [{
      "organization": "Organization",
      "position": "Volunteer",
      "website": "http://organization.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Description...",
      "highlights": [
        "Awarded 'Volunteer of the Month'"
      ]
    }],
    "education": [{
      "institution": "University",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "gpa": "4.0",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    }],
    "awards": [{
      "title": "Award",
      "date": "2014-11-01",
      "awarder": "Company",
      "summary": "There is no spoon."
    }],
    "publications": [{
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "website": "http://publication.com",
      "summary": "Description..."
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    }],
    "languages": [{
      "language": "English",
      "fluency": "Native speaker"
    }],
    "interests": [{
      "name": "Wildlife",
      "keywords": [
        "Ferrets",
        "Unicorns"
      ]
    }],
    "references": [{
      "name": "Jane Doe",
      "reference": "Reference..."
    }]
  }
  // TODO
  // 1. Use immutability-helper to handle nested data
  // 2. Programatically create an input for each key
  // 3. Setup append for array outputs && create
  //    a button to clear all array contents


  // programatically create input elements
  // componentDidMount() {
  //   for (let i=0; i < Object.keys(this.state.basics).length; i++) {
  //     console.log(Object.keys(this.state.basics)[i])
  //     let newInput = document.createElement("input")
  //     let elementLabel = document.createElement("p")
  //     elementLabel.innerText = Object.keys(this.state.basics)[i]
  //     newInput.className = Object.keys(this.state.basics)[i]
  //     document.querySelector('.basics').appendChild(elementLabel)
  //     document.querySelector('.basics').appendChild(newInput)
  //   }
  // }

  // this is bad, wouldn't use in final implementation
  handleNameChange = e => {
    e.preventDefault()
    this.setState({
      basics: {
        name: e.target.elements[0].value,
        label: e.target.elements[1].value,
        picture: e.target.elements[2].value
      }
      // insert rest of resume elements here
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleNameChange}>
            <h3 className="basics">Basics</h3>
            <p>Name</p>
            <input type="textarea"/>
            <p>Label</p>
            <input></input>
            <p>Picture</p>
            <input></input>
            <p>Email</p>
            <input></input>
            <p>Phone</p>
            <input></input>
            <p>Website</p>
            <input></input>
            <p>Summary</p>
            <input></input>
            <h3>Work</h3>

            <h3>Volunteer</h3>

            <h3>Education</h3>

            <h3>Awards</h3>

            <h3>Publications</h3>

            <h3>Language</h3>

            <h3>Interests</h3>

            <h3>References</h3>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h3>JSON resume:</h3>
          <p>{JSON.stringify(this.state)}</p>
        </div>
        
      </div>
    );
  }
}

export default TestComponent;
