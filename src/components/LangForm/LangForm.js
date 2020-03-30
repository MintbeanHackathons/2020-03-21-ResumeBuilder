import React, { Component } from 'react';


// import styling 
import './LangForm.scss';

//import application components

console.log('Hello World');

export default class LangForm extends Component {

    buildJSON(e) {
        e.preventDefault();
        let jsonATitle = e.target.userATitle.value;
        let jsonADate = e.target.userADate.value;
        let jsonlanger = e.target.userlanger.value;
        let jsonASummary = e.target.userASummary.value;

        let output = {
            "langs": {
                "title": jsonATitle,
                "date": jsonADate,
                "langer": jsonlanger,
                "summary": jsonASummary
            }
        }
        console.log(output);
    }


    render() {
        return (
            <section className="lang">
                <form className="lang__form" id="inputCapture" onSubmit={this.buildJSON}>   
                    <section className="lang__intro">
                        <h1>Resume Builder - Language Skills</h1>
                    </section>
                    <div className="lang__form-lang-title">
                        <label className="lang__lang-title-label" htmlFor="twitter">Language:</label>
                        <input className="lang__lang-title-field" type="text" name="twitter" id="userATitle" required/>
                    </div>
                    <div className="lang__form-lang-date">
                        <label className="lang__lang-date-label" htmlFor="github">Proficiency:</label>
                        <input className="lang__lang-date-field" type="text" name="github" id="userADate" required/>
                    </div>
                    <button className="lang__button" name="lang-button">Other Languages</button>
                    <button className="lang__button" name="lang-button">Save Changes</button>                    
                </form>
            </section>
        );
    }
}

