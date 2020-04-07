import React, { Component } from 'react';


// import styling 
import '../styling/form-master.scss';
import './PubsForm.scss';

//import application components

export default class PubsForm extends Component {

    readInput(e) {
        e.preventDefault();

        // set the variables and build the object
        let jsonPTitle = e.target.userPTitle.value;
        let jsonPEr = e.target.userPEr.value;
        let jsonPDate = e.target.userPDate.value;
        let jsonPWebsite = e.target.userPWebsite.value;
        let jsonPSummary = e.target.userPSummary.value;
        let newObj = { 
            "name": jsonPTitle,
            "publisher": jsonPEr,
            "releaseDate": jsonPDate,
            "website": jsonPWebsite,
            "summary": jsonPSummary
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('pubs')) {
            let oldOutput = JSON.parse(localStorage.getItem('pubs'));
            let output = JSON.stringify( [ {oldOutput}, {newObj}]);
            console.log('second pass:', output);
            // let varName = 'language';

            localStorage.setItem('pubs', output);
    
            console.log('localStorage:', localStorage.getItem('pubs'));
        } 
        else {
        let output = JSON.stringify( [ {newObj} ] );
        console.log('first pass:', output);
        localStorage.setItem('pubs', output);  
        console.log('localStorage:', localStorage.getItem(`pubs`));
    
    }}

    returnTo() {
        //clear input fields for more information
        let clearInputTitle = document.querySelector('.pubs__pubs-title-field');
            clearInputTitle.value = " ";
        let clearInputEr = document.querySelector('.pubs__pubs-Er-field');
            clearInputEr.value = " ";
        let clearInputDate = document.querySelector('.pubs__pubs-date-field');
            clearInputDate.value = "yyyy-mm-dd";
        let clearInputWeb = document.querySelector('.pubs__pubs-website-field');
            clearInputWeb.value = " ";
        let clearInputSummary = document.querySelector('.pubs__pubs-summary-field');
            clearInputSummary.value = " ";
        
    }

    render() {
        return (
            <section className="pubs">
                <form className="pubs__form form-layout" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="pubs__intro">
                        <h1>Resume Builder - Publications</h1>
                    </section>
                    <div className="pubs__form-pubs-title form-div">
                        <label className="pubs__pubs-title-label form-label" htmlFor="title">Title:</label>
                        <input className="pubs__pubs-title-field form-field" type="text" name="title" id="userPTitle" required/>
                    </div>
                    <div className="pubs__form-pubs-Er form-div">
                        <label className="pubs__pubs-Er-label form-label" htmlFor="publisher">Publisher:</label>
                        <input className="pubs__pubs-Er-field form-field" type="text" name="publisher" id="userPEr" required/>
                    </div>
                    <div className="pubs__form-pubs form-div">
                        <label className="pubs__pubs-date-label form-label" htmlFor="date">Date Released:</label>
                        <input className="pubs__pubs-date-field form-field" type="text" name="date" id="userPDate" placeholder="yyyy-mm-dd" required/>
                    </div>
                    <div className="pubs__form-pubs form-div">
                        <label className="pubs__pubs-website-label form-label" htmlFor="website">Website/URL:</label>
                        <input className="pubs__pubs-website-field form-field" type="text" name="website" id="userPWebsite" required/>
                    </div>
                    <div className="pubs__form-pubs-summary form-div">
                        <label className="pubs__pubs-summary-label form-label" htmlFor="summary">Summary of the Publication:</label>
                        <textarea className="pubs__pubs-summary-field form-field" type="text" name="summary" id="userPSummary" required/>
                    </div>
                    <button className="pubs__button" name="pubs-button">Save Changes</button>                    
                </form>
                    <button className="pubs__repeat" name="pubs-repeat" onClick={this.returnTo}>More Publications</button>
            </section>
        );
    }
}

