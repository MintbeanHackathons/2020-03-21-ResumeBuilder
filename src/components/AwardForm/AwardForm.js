import React, { Component } from 'react';


// import styling 
import './AwardForm.scss';

//import application components

export default class AwardForm extends Component {

    buildJSON(e) {
        e.preventDefault();
        let jsonATitle = e.target.userATitle.value;
        let jsonADate = e.target.userADate.value;
        let jsonAwarder = e.target.userAwarder.value;
        let jsonASummary = e.target.userASummary.value;

        let output = {
            "awards": {
                "title": jsonATitle,
                "date": jsonADate,
                "awarder": jsonAwarder,
                "summary": jsonASummary
            }
        }
        console.log(output);
    }


    render() {
        return (
            <section className="award">
                <form className="award__form" id="inputCapture" onSubmit={this.buildJSON}>   
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
                    <button className="award__button" name="award-button">More Awards</button>
                    <button className="award__button" name="award-button">Save Changes</button>                    
                </form>
            </section>
        );
    }
}

