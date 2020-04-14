import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



// import styling 
import '../styling/form-master.scss';
import './WorkForm.scss';

//import application components

export default class WorkForm extends Component {

    readInput(e) {
        e.preventDefault();

        
        // set the variables and build the object
        let jsonOrg = e.target.userOrg.value;
        let jsonPos = e.target.userPos.value;
        let jsonWeb = e.target.userWeb.value;
        let jsonStart = e.target.userStart.value;
        let jsonEnd = e.target.userEnd.value;
        let jsonSum = e.target.userSum.value;
        let jsonHigh = e.target.userHigh.value;
        
        let newObj = { 
            "organization": jsonOrg,
            "website": jsonWeb,
            "startDate": jsonStart,
            "endDate": jsonEnd,
            "summary": jsonSum,
            "highlights": jsonHigh,
            "position": jsonPos
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('work')) {
            let oldOutput = JSON.parse(localStorage.getItem('work'));
            let output = JSON.stringify({ "work": [ {oldOutput}, {newObj}]});
            console.log('second pass:', output);

            localStorage.setItem('work', output);
    
            console.log('localStorage:', localStorage.getItem('basics'), localStorage.getItem('language'), localStorage.getItem('profiles'), localStorage.getItem('work'));
        } 
        else {
        let output = JSON.stringify({
            "work": [ {newObj} ]
        })
        console.log('first pass:', output);
        let varName = 'work';

        localStorage.setItem(varName, output);
  
        console.log('localStorage:', localStorage.getItem(`${varName}`));

    
    }}
    
    returnTo() {
        // reset the form 
        let clearInputOrg = document.querySelector('.work__org-field');
            clearInputOrg.value = " ";
        let clearInputPos = document.querySelector('.work__pos-field');
            clearInputPos.value = " ";
        let clearInputWeb = document.querySelector('.work__web-field');
            clearInputWeb.value = " ";
        let clearInputStart = document.querySelector('.work__start-field');
            clearInputStart.value = "yyyy-mm-dd";
        let clearInputEnd = document.querySelector('.work__end-field');
            clearInputEnd.value = "yyyy-mm-dd";
        let clearInputSum = document.querySelector('.work__sum-field');
            clearInputSum.value = " ";
        let clearInputCourse = document.querySelector('.work__high-field');
            clearInputCourse.value = " ";

    }

    render() {
        return (
            <section className="work">
                <form className="work__form form-layout" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="work__intro">
                        <h1>Resume Builder - Work Experience</h1>
                    </section>
                    <div className="work__form-org form-div">
                        <label className="work__org-label form-label" htmlFor="org">Company:</label>
                        <input className="work__org-field form-field" type="text" name="org" id="userOrg" required/>
                    </div>
                    <div className="work__form-pos form-div">
                        <label className="work__pos-label form-label" htmlFor="pos">Position:</label>
                        <input className="work__pos-field form-field" type="text" name="pos" id="userPos" required/>
                    </div>
                    <div className="work__form-web form-div">
                        <label className="work__web-label form-label" htmlFor="web">Website:</label>
                        <input className="work__web-field form-field" type="text" name="web" id="userWeb" required/>
                    </div>
                    <div className="work__form-start form-div">
                        <label className="work__start-label form-label" htmlFor="start">Start Date:</label>
                        <input className="work__start-field form-field" type="text" name="start" id="userStart" placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div className="work__form-end form-div">
                        <label className="work__end-label form-label" htmlFor="end">End Date:</label>
                        <input className="work__end-field form-field" type="text" name="end" id="userEnd" placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div className="work__form-sum form-div">
                        <label className="work__sum-label form-label" htmlFor="sum">Responsibilities:</label>
                        <input className="work__sum-field form-field" type="text" name="sum" id="userSum" required/>
                    </div>
                    <div className="work__form-high form-div">
                        <label className="work__hight-label form-label" htmlFor="high">Achievements:</label>
                        <input className="work__high-field form-field" type="text" name="high" id="userHigh" required/>
                    </div>
                    <button className="work__button" name="work-button">Save Changes</button>                    
                </form>
                    <button className="work__repeat" name="work-repeat" onClick={this.returnTo}>
                        <NavLink className="resume__link" activeClassName="active" to='/WorkForm'>More Work Experience</NavLink>
                    </button>
            </section>
        );
    }
}
