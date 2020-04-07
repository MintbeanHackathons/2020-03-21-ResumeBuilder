import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



// import styling 
import '../styling/form-master.scss';
import './IntForm.scss';

//import application components

export default class IntForm extends Component {

    readInput(e) {
        e.preventDefault();

        
        // set the variables and build the object
        let jsonName = e.target.userName.value;
        let jsonKey1 = e.target.userKey1.value;
        let jsonKey2 = e.target.userKey2.value;
        let jsonKey3 = e.target.userKey3.value;
        let jsonKey4 = e.target.userKey4.value;
        let jsonKey5 = e.target.userKey5.value;
        
        let newObj = { 
            "name": jsonName,
            "keywords": [jsonKey1,
            jsonKey2,
            jsonKey3,
            jsonKey4,
            jsonKey5
            ]
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('interests')) {
            let oldOutput = JSON.parse(localStorage.getItem('interests'));
            let output = JSON.stringify({ "interests": [ {oldOutput}, {newObj}]});
            console.log('second pass:', output);

            localStorage.setItem('interests', output);
    
            console.log('localStorage:', localStorage.getItem('interests'));
        } 
        else {
        let output = JSON.stringify({
            "interests": [ {newObj} ]
        })
        console.log('first pass:', output);
        let varName = 'interests';

        localStorage.setItem(varName, output);
  
        console.log('localStorage:', localStorage.getItem(`${varName}`));

    
    }}
    
    returnTo() {
        // reset the form 
        let clearInputName = document.querySelector('.int__name-field');
            clearInputName.value = " ";
        let clearInputKey1 = document.querySelector('.int__key1-field');
            clearInputKey1.value = " ";
        let clearInputKey2 = document.querySelector('.int__key2-field');
            clearInputKey2.value = " ";
        let clearInputKey3 = document.querySelector('.int__key3-field');
            clearInputKey3.value = " ";
        let clearInputKey4 = document.querySelector('.int__key4-field');
            clearInputKey4.value = " ";
        let clearInputKey5 = document.querySelector('.int__key5-field');
            clearInputKey5.value = " ";

    }

    render() {
        return (
            <section className="int">
                <form className="int__form form-layout" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="int__intro">
                        <h1>Resume Builder - Interests</h1>
                    </section>
                    <div className="int__form-name form-div">
                        <label className="int__name-label form-label" htmlFor="name">Interest:</label>
                        <input className="int__name-field form-field" type="text" name="name" id="userName" required/>
                    </div>
                    <div className="int__form-key1 form-div">
                        <label className="int__key1-label form-label" htmlFor="key">Keywords:</label>
                        <input className="int__key1-field form-field" type="text" name="key" id="userKey1" required/>
                    </div>
                    <div className="int__form-key2 form-div">
                        <label className="int__key2-label form-label" htmlFor="key">Keywords:</label>
                        <input className="int__key2-field form-field" type="text" name="key" id="userKey2" required/>
                    </div>
                    <div className="int__form-key3 form-div">
                        <label className="int__key3-label form-label" htmlFor="key">Keywords:</label>
                        <input className="int__key3-field form-field" type="text" name="key" id="userKey3" required/>
                    </div>
                    <div className="int__form-key4 form-div">
                        <label className="int__key4-label form-label" htmlFor="key">Keywords:</label>
                        <input className="int__key4-field form-field" type="text" name="key" id="userKey4" required/>
                    </div>
                    <div className="int__form-key5 form-div">
                        <label className="int__key5-label form-label" htmlFor="key">Keywords:</label>
                        <input className="int__key5-field form-field" type="text" name="key" id="userKey5" required/>
                    </div>
                    <button className="int__button" name="int-button">Save Changes</button>                    
                </form>
                    <button className="int__repeat" name="int-repeat" onClick={this.returnTo}>
                        <NavLink className="resume__link" activeClassName="active" to='/IntForm'>More Interests</NavLink>
                    </button>
            </section>
        );
    }
}

