import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



// import styling 
import '../styling/form-master.scss';
import './EducForm.scss';

//import application components

export default class EducForm extends Component {

    readInput(e) {
        e.preventDefault();

        
        // set the variables and build the object
        let jsonInst = e.target.userInst.value;
        let jsonArea = e.target.userArea.value;
        let jsonStudy = e.target.userStudy.value;
        let jsonStart = e.target.userStart.value;
        let jsonEnd = e.target.userEnd.value;
        let jsonGpa = e.target.userGpa.value;
        let jsonCourse = e.target.userCourse.value;
        
        let newObj = { 
            "institution": jsonInst,
            "studyType": jsonStudy,
            "startDate": jsonStart,
            "endDate": jsonEnd,
            "gpa": jsonGpa,
            "courses": jsonCourse,
            "area": jsonArea
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('education')) {
            let oldOutput = JSON.parse(localStorage.getItem('education'));
            let output = JSON.stringify({ "education": [ {oldOutput}, {newObj}]});
            console.log('second pass:', output);
            // let varName = 'language';

            localStorage.setItem('education', output);
    
            console.log('localStorage:', localStorage.getItem('education'));
        } 
        else {
        let output = JSON.stringify({
            "education": [ {newObj} ]
        })
        console.log('first pass:', output);
        let varName = 'education';

        localStorage.setItem(varName, output);
  
        console.log('localStorage:', localStorage.getItem(`${varName}`));

    
    }}
    
    returnTo() {
        // reset the form 
        let clearInputTitle = document.querySelector('.educ__inst-field');
            clearInputTitle.value = " ";
        let clearInputDate = document.querySelector('.educ__area-field');
            clearInputDate.value = " ";
        let clearInputStudy = document.querySelector('.educ__study-field');
            clearInputStudy.value = " ";
        let clearInputStart = document.querySelector('.educ__start-field');
            clearInputStart.value = "yyyy-mm-dd";
        let clearInputEnd = document.querySelector('.educ__end-field');
            clearInputEnd.value = "yyyy-mm-dd";
        let clearInputGpa = document.querySelector('.educ__gpa-field');
            clearInputGpa.value = " ";
        let clearInputCourse = document.querySelector('.educ__course-field');
            clearInputCourse.value = " ";

    }

    render() {
        return (
            <section className="educ">
                <form className="educ__form form-layout" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="educ__intro">
                        <h1>Resume Builder - Education</h1>
                    </section>
                    <div className="educ__form-inst form-div">
                        <label className="educ__inst-label form-label" htmlFor="inst">Institution:</label>
                        <input className="educ__inst-field form-field" type="text" name="inst" id="userInst" required/>
                    </div>
                    <div className="educ__form-area form-div">
                        <label className="educ__area-label form-label" htmlFor="area">Program:</label>
                        <input className="educ__area-field form-field" type="text" name="area" id="userArea" required/>
                    </div>
                    <div className="educ__form-study form-div">
                        <label className="educ__study-label form-label" htmlFor="study">Degree:</label>
                        <input className="educ__study-field form-field" type="text" name="study" id="userStudy" required/>
                    </div>
                    <div className="educ__form-start form-div">
                        <label className="educ__start-label form-label" htmlFor="start">Start Date:</label>
                        <input className="educ__start-field form-field" type="text" name="start" id="userStart" placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div className="educ__form-end form-div">
                        <label className="educ__end-label form-label" htmlFor="end">End Date:</label>
                        <input className="educ__end-field form-field" type="text" name="end" id="userEnd" placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div className="educ__form-gpa form-div">
                        <label className="educ__gpa-label form-label" htmlFor="gpa">GPA:</label>
                        <input className="educ__gpa-field form-field" type="text" name="gpa" id="userGpa" required/>
                    </div>
                    <div className="educ__form-course form-div">
                        <label className="educ__course-label form-label" htmlFor="course">Special Courses:</label>
                        <input className="educ__course-field form-field" type="text" name="course" id="userCourse" required/>
                    </div>
                    <button className="educ__button" name="educ-button">Save Changes</button>                    
                </form>
                    <button className="educ__repeat" name="educ-repeat" onClick={this.returnTo}>
                        <NavLink className="resume__link" activeClassName="active" to='/EducForm'>More Education</NavLink>
                    </button>
            </section>
        );
    }
}

