import React, { Component } from 'react';


// import styling 
import '../styling/form-master.scss';
import './ReferForm.scss';

//import application components

export default class ReferForm extends Component {

    readInput(e) {
        e.preventDefault();

        // set the variables and build the object
        let jsonRName = e.target.userRName.value;
        let jsonRSummary = e.target.userRSummary.value;
        let newObj = { 
            "name": jsonRName,
            "reference": jsonRSummary
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('refer')) {
            let oldOutput = JSON.parse(localStorage.getItem('refer'));
            let output = JSON.stringify( [oldOutput, newObj] );
            console.log('second pass:', output);
            // let varName = 'language';

            localStorage.setItem('refer', output);
    
            console.log('localStorage:', localStorage.getItem('refer'));
        } 
        else {
        let output = JSON.stringify( newObj );
        console.log('first pass:', output);
        let varName = 'refer';
        localStorage.setItem(varName, output);  
        console.log('localStorage:', localStorage.getItem(`${varName}`));
    
    }}

    returnTo() {
        //clear input fields for more information
        let clearInputTitle = document.querySelector('.refer__name-field');
            clearInputTitle.value = " ";
        let clearInputSummary = document.querySelector('.refer__summary-field');
            clearInputSummary.value = " ";
        
    }

    render() {
        return (
            <section className="refer">
                <form className="refer__form form-layout" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="refer__intro">
                        <h1>Resume Builder - References</h1>
                    </section>
                    <div className="refer__form-title form-div">
                        <label className="refer__name-label form-label" htmlFor="name">Name:</label>
                        <input className="refer__name-field form-field" type="text" name="name" id="userRName" required/>
                    </div>
                    <div className="refer__form-summary form-div">
                        <label className="refer__summary-label form-label" htmlFor="summary">Reference:</label>
                        <input className="refer__summary-field form-field" type="text" name="summary" id="userRSummary" required/>
                    </div>
                    <button className="refer__button" name="refer-button">Save Changes</button>                    
                </form>
                    <button className="refer__repeat" name="refer-repeat" onClick={this.returnTo}>More references</button>
            </section>
        );
    }
}

