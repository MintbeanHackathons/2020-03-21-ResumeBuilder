import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



// import styling 
import '../styling/form-master.scss';
import './VolForm.scss';

//import application components

export default class VolForm extends Component {

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
        if (localStorage.getItem('volunteer')) {
            let oldOutput = JSON.parse(localStorage.getItem('volunteer'));
            let output = JSON.stringify({ "volunteer": [ {oldOutput}, {newObj}]});
            console.log('second pass:', output);

            localStorage.setItem('volunteer', output);
    
            console.log('localStorage:', localStorage.getItem('volunteer'));
        } 
        else {
        let output = JSON.stringify({
            "volunteer": [ {newObj} ]
        })
        console.log('first pass:', output);
        let varName = 'volunteer';

        localStorage.setItem(varName, output);
  
        console.log('localStorage:', localStorage.getItem(`${varName}`));

    
    }}
    
    returnTo() {
        // reset the form 
        let clearInputOrg = document.querySelector('.vol__org-field');
            clearInputOrg.value = " ";
        let clearInputPos = document.querySelector('.vol__pos-field');
            clearInputPos.value = " ";
        let clearInputWeb = document.querySelector('.vol__web-field');
            clearInputWeb.value = " ";
        let clearInputStart = document.querySelector('.vol__start-field');
            clearInputStart.value = "yyyy-mm-dd";
        let clearInputEnd = document.querySelector('.vol__end-field');
            clearInputEnd.value = "yyyy-mm-dd";
        let clearInputSum = document.querySelector('.vol__sum-field');
            clearInputSum.value = " ";
        let clearInputCourse = document.querySelector('.vol__high-field');
            clearInputCourse.value = " ";

    }

    render() {
        return (
            <section className="vol">
                <form className="vol__form form-layout" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="vol__intro">
                        <h1>Resume Builder - Volunteer Experience</h1>
                    </section>
                    <div className="vol__form-org form-div">
                        <label className="vol__org-label form-label" htmlFor="org">Organization:</label>
                        <input className="vol__org-field form-field" type="text" name="org" id="userOrg" required/>
                    </div>
                    <div className="vol__form-pos form-div">
                        <label className="vol__pos-label form-label" htmlFor="pos">Position:</label>
                        <input className="vol__pos-field form-field" type="text" name="pos" id="userPos" required/>
                    </div>
                    <div className="vol__form-web form-div">
                        <label className="vol__web-label form-label" htmlFor="web">Website:</label>
                        <input className="vol__web-field form-field" type="text" name="web" id="userWeb" required/>
                    </div>
                    <div className="vol__form-start form-div">
                        <label className="vol__start-label form-label" htmlFor="start">Start Date:</label>
                        <input className="vol__start-field form-field" type="text" name="start" id="userStart" placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div className="vol__form-end form-div">
                        <label className="vol__end-label form-label" htmlFor="end">End Date:</label>
                        <input className="vol__end-field form-field" type="text" name="end" id="userEnd" placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div className="vol__form-sum form-div">
                        <label className="vol__sum-label form-label" htmlFor="sum">Summary:</label>
                        <input className="vol__sum-field form-field" type="text" name="sum" id="userSum" required/>
                    </div>
                    <div className="vol__form-high form-div">
                        <label className="vol__hight-label form-label" htmlFor="high">Highlights:</label>
                        <input className="vol__high-field form-field" type="text" name="high" id="userHigh" required/>
                    </div>
                    <button className="vol__button" name="vol-button">Save Changes</button>                    
                </form>
                    <button className="vol__repeat" name="vol-repeat" onClick={this.returnTo}>
                        <NavLink className="resume__link" activeClassName="active" to='/VolForm'>More Volunteer Experience</NavLink>
                    </button>
            </section>
        );
    }
}

