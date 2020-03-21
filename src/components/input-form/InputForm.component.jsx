import React from 'react';
import InputElem from '../input-elem/InputElem.component';
import InputSection from '../input-section/InputSection.component';
import AddSection from '../AddSection/AddSection.component.js';

import './input-form.styles.css';

class InputForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      "basics": {
        "name": "",
        "label": "",
        "picture": "",
        "email": "",
        "phone": "",
        "website": "",
        "summary": "",
        "location": {
          "address": "",
          "postalCode": "",
          "city": "",
          "countryCode": "",
          "region": ""
        },
        "profiles": [{
          "network": "",
          "username": "",
          "url": ""
        }]
      },
      "work": [{
        "company": "",
        "position": "",
        "website": "",
        "startDate": "",
        "endDate": "",
        "summary": "",
        "highlights": []
      }],
      "volunteer": [{
        "organization": "",
        "position": "",
        "website": "",
        "startDate": "",
        "endDate": "",
        "summary": "",
        "highlights": []
      }],
      "education": [{
        "institution": "",
        "area": "",
        "studyType": "",
        "startDate": "",
        "endDate": "",
        "gpa": "",
        "courses": []
      }],
      "awards": [{
        "title": "",
        "date": "",
        "awarder": "",
        "summary": ""
      }],
      "publications": [{
        "name": "",
        "publisher": "",
        "releaseDate": "",
        "website": "",
        "summary": ""
      }],
      "skills": [{
        "name": "",
        "level": "",
        "keywords": []
      }],
      "languages": [{
        "language": "",
        "fluency": ""
      }],
      "interests": [{
        "name": "",
        "keywords": []
      }],
      "references": [{
        "name": "",
        "reference": ""
      }]

    }
  }

  // This functino constantly updates the current state of this Class
  onChangeHandler = (e) => {
    const { value, name , dirName} = e.target;
    
    if (dirName.includes('.')){
      const address = dirName.split('.')
      this.setState(prevState => {
        let newState = Object.assign({},prevState[address[0]]);
        newState[address[1]][name] = value;
        return{
          ...prevState,
          [dirName]:newState
        }
      })
    }else if (dirName.includes('/')){
      //this will enable extra added elements to be added to the state
      const address = dirName.split('/')
      this.setState(prevState => {
        
        console.log(prevState,address)
        // let newState = Object.assign({},prevState[address[0]]);
        // newState[address[1]][name] = value;
        // return{
          // ...prevState,
          // [dirName]:newState
        // }
      })
    } else {
      this.setState(prevState => {
        let newState = Object.assign({},prevState[dirName])
        newState[name] = value;
        return{
          ...prevState,
          [dirName]:newState
        }
      })
    }

  }

  render(){

    // submitHandler will return the current state of this class to the parent: "App"
    const {submitHandler} = this.props;

    return (
      <form className='form' > 
        <InputSection title="Basics">
          <InputElem dirname="basics" placeholder="John Doe" name="name" label="Name" type='text'  onChange={this.onChangeHandler} />
          <InputElem dirname="basics" placeholder="Programmer" name="label" label="Label" type='text'  onChange={this.onChangeHandler} />
          <InputElem dirname="basics" placeholder="Link" name="picture" label="Picure" type='text'  onChange={this.onChangeHandler} />
          <InputElem dirname="basics" name="email" label="Email" type='email' placeholder="john@gmail.com"  onChange={this.onChangeHandler} />
          <InputElem dirname="basics" name="phone" label="Phone" type='tel' placeholder="(912) 555-4321"  onChange={this.onChangeHandler} />
          <InputElem dirname="basics" name="website" label="Website" type='url' placeholder="devkavian.netlify.com"  onChange={this.onChangeHandler} />
          <InputElem dirname="basics" name="summary" label="Summary" type='text' placeholder="A summary of John Doe..."  onChange={this.onChangeHandler} />
          
          <InputSection title="Location">
            <InputElem dirname="basics.location" name="address" label="Address" type='text' placeholder="2712 Broadway St"  onChange={this.onChangeHandler} />
            <InputElem dirname="basics.postalCode" name="postalCode" label="Postal Code" type='text' placeholder="CA 94115"  onChange={this.onChangeHandler} />
            <InputElem dirname="basics.city" name="city" label="City" type='text' placeholder="San Francisco"  onChange={this.onChangeHandler} />
            <InputElem dirname="basics.countryCode" name="countryCode" label="Country Code" type='text' placeholder="US"  onChange={this.onChangeHandler} />
            <InputElem dirname="basics.region" name="region" label="Region" type='text' placeholder="California"  onChange={this.onChangeHandler} />
          </InputSection>
          <InputSection title="Profiles">
            <AddSection>
              <InputElem dirname="basics.profiles" name="network" label="Network" type='text' placeholder="Twitter"  onChange={this.onChangeHandler} />
              <InputElem dirname="profiles.profiles" name="username" label="Username" type='text' placeholder="http://twitter.com/john"  onChange={this.onChangeHandler} />
              <InputElem dirname="profiles.profiles" name="url" label="Url" type='url' placeholder="http://twitter.com/john"  onChange={this.onChangeHandler} />
            </AddSection>
          </InputSection>
        </InputSection>
      

       


        <InputElem onClick={(e)=>{submitHandler(e,this.state)}} type="Submit" />
      </form>
    )

  }
}


// ({submitHandler}) {





export default InputForm;
