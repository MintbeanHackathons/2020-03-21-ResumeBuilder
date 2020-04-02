import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



// import styling 
import './LangForm.scss';

//import application components
// let loopInd = 0;
localStorage.clear();

export default class LangForm extends Component {

    readInput(e) {
        e.preventDefault();

        
        // set the variables and build the object
        let jsonLanguage = e.target.userLanguage.value;
        let jsonFluency = e.target.userFluency.value;
        let newObj = { 
            "language": jsonLanguage,
            "fluency": jsonFluency
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('language')) {
            let oldOutput = JSON.parse(localStorage.getItem('language'));
            let output = JSON.stringify({ "languages": [ {oldOutput}, {newObj}]});
            console.log('second pass:', output);
            // let varName = 'language';

            localStorage.setItem('language', output);
    
            console.log('localStorage:', localStorage.getItem('language'));
        } 
        else {
        let output = JSON.stringify({
            "languages": [ {newObj} ]
        })
        console.log('first pass:', output);
        let varName = 'language';

        localStorage.setItem(varName, output);
  
        console.log('localStorage:', localStorage.getItem(`${varName}`));
    
    }}
    
    returnTo() {
        // reset the form 
        let clearInputTitle = document.querySelector('.lang__lang-title-field');
            clearInputTitle.value = " ";
        let clearInputDate = document.querySelector('.lang__lang-date-field');
            clearInputDate.value = " ";


    }

    render() {
        return (
            <section className="lang">
                <form className="lang__form" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="lang__intro">
                        <h1>Resume Builder - Language Skills</h1>
                    </section>
                    <div className="lang__form-lang-title">
                        <label className="lang__lang-title-label" htmlFor="twitter">Language:</label>
                        <input className="lang__lang-title-field" type="text" name="twitter" id="userLanguage" required/>
                    </div>
                    <div className="lang__form-lang-date">
                        <label className="lang__lang-date-label" htmlFor="github">Proficiency:</label>
                        <input className="lang__lang-date-field" type="text" name="github" id="userFluency" required/>
                    </div>
                    <button className="lang__button" name="lang-button">Save Changes</button>                    
                </form>
                    <button className="lang__repeat" name="lang-repeat" onClick={this.returnTo}>
                        <NavLink className="resume__link" activeClassName="active" to='/LangForm'>More Languages</NavLink>
                    </button>
            </section>
        );
    }
}

