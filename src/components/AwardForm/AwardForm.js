import React, { Component } from 'react';


// import styling 
import './AwardForm.scss';

//import application components

export default class AwardForm extends Component {

    readInput(e) {
        e.preventDefault();

        // set the variables and build the object
        let jsonATitle = e.target.userATitle.value;
        let jsonADate = e.target.userADate.value;
        let jsonAwarder = e.target.userAwarder.value;
        let jsonASummary = e.target.userASummary.value;
        let newObj = { 
            "title": jsonATitle,
            "date": jsonADate,
            "awarder": jsonAwarder,
            "summary": jsonASummary
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('awards')) {
            let oldOutput = JSON.parse(localStorage.getItem('awards'));
            let output = JSON.stringify({ "awards": [ {oldOutput}, {newObj}]});
            console.log('second pass:', output);
            // let varName = 'language';

            localStorage.setItem('awards', output);
    
            console.log('localStorage:', localStorage.getItem('awards'));
        } 
        else {
        let output = JSON.stringify({
            "awards": [ {newObj} ]
        })
        console.log('first pass:', output);
        let varName = 'awards';
        localStorage.setItem(varName, output);  
        console.log('localStorage:', localStorage.getItem(`${varName}`));
    
    }}

    returnTo() {
        //clear input fields for more information
        let clearInputTitle = document.querySelector('.award__award-title-field');
            clearInputTitle.value = " ";
        let clearInputDate = document.querySelector('.award__award-date-field');
            clearInputDate.value = " ";
        let clearInputAwarder = document.querySelector('.award__awarder-field');
            clearInputAwarder.value = " ";
        let clearInputSummary = document.querySelector('.award__award-summary-field');
            clearInputSummary.value = " ";
        
    }

    render() {
        return (
            <section className="award">
                <form className="award__form" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="award__intro">
                        <h1>Resume Builder - Awards</h1>
                    </section>
                    <div className="award__form-award-title">
                        <label className="award__award-title-label" htmlFor="twitter">Award Title:</label>
                        <input className="award__award-title-field" type="text" name="twitter" id="userATitle" required/>
                    </div>
                    <div className="award__form-award-date">
                        <label className="award__award-date-label" htmlFor="github">Date:</label>
                        <input className="award__award-date-field" type="text" name="github" id="userADate" required/>
                    </div>
                    <div className="award__form-awarder">
                        <label className="award__awarder-label" htmlFor="stack">Company:</label>
                        <input className="award__awarder-field" type="text" name="stack" id="userAwarder" required/>
                    </div>
                    <div className="award__form-award-summary">
                        <label className="award__award-summary-label" htmlFor="stack">Summary of the Award:</label>
                        <input className="award__award-summary-field" type="text" name="stack" id="userASummary" required/>
                    </div>
                    <button className="award__button" name="award-button">Save Changes</button>                    
                </form>
                    <button className="award__repeat" name="award-repeat" onClick={this.returnTo}>More Awards</button>
            </section>
        );
    }
}

