import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



// import styling 
import '../styling/form-master.scss';
import './SkillForm.scss';

//import application components

export default class SkillForm extends Component {

    readInput(e) {
        e.preventDefault();

        
        // set the variables and build the object
        let jsonName = e.target.userName.value;
        let jsonLevel = e.target.userLevel.value;
        let jsonSkill1 = e.target.userKey1.value;
        let jsonSkill2 = e.target.userKey2.value;
        let jsonSkill3 = e.target.userKey3.value;
        let jsonSkill4 = e.target.userKey4.value;
        let jsonSkill5 = e.target.userKey5.value;
        let jsonSkill6 = e.target.userKey6.value;
        let jsonSkill7 = e.target.userKey7.value;
        let jsonSkill8 = e.target.userKey8.value;
        let jsonSkill9 = e.target.userKey9.value;
        let jsonSkill0 = e.target.userKey0.value;

        let newObj = { 
            "name": jsonName,
            "level": jsonLevel,
            "keywords": [jsonSkill1,
            jsonSkill2,
            jsonSkill3,
            jsonSkill4,
            jsonSkill5,
            jsonSkill6,
            jsonSkill7,
            jsonSkill8,
            jsonSkill9,
            jsonSkill0
            ]
        };
            
        // get to see if there is an active record in localStorage and create if not
        if (localStorage.getItem('skills')) {
            let oldOutput = JSON.parse(localStorage.getItem('skills'));
            let output = JSON.stringify({ "skills": [ {oldOutput}, {newObj}]});
            console.log('second pass:', output);

            localStorage.setItem('skills', output);
    
            console.log('localStorage:', localStorage.getItem('skills'));
        } 
        else {
        let output = JSON.stringify({
            "skills": [ {newObj} ]
        })
        console.log('first pass:', output);
        let varName = 'skills';

        localStorage.setItem(varName, output);
  
        console.log('localStorage:', localStorage.getItem(`${varName}`));

    
    }}
    
    returnTo() {
        // reset the form 
        let clearInputName = document.querySelector('.skill__name-field');
            clearInputName.value = " ";
        let clearInputKey1 = document.querySelector('.skill__key1-field');
            clearInputKey1.value = " ";
        let clearInputKey2 = document.querySelector('.skill__key2-field');
            clearInputKey2.value = " ";
        let clearInputKey3 = document.querySelector('.skill__key3-field');
            clearInputKey3.value = " ";
        let clearInputKey4 = document.querySelector('.skill__key4-field');
            clearInputKey4.value = " ";
        let clearInputKey5 = document.querySelector('.skill__key5-field');
            clearInputKey5.value = " ";
        let clearInputKey6 = document.querySelector('.skill__key6-field');
            clearInputKey6.value = " ";
        let clearInputKey7 = document.querySelector('.skill__key7-field');
            clearInputKey7.value = " ";
        let clearInputKey8 = document.querySelector('.skill__key8-field');
            clearInputKey8.value = " ";
        let clearInputKey9 = document.querySelector('.skill__key9-field');
            clearInputKey9.value = " ";
        let clearInputKey0 = document.querySelector('.skill__key0-field');
            clearInputKey0.value = " ";
        let clearInputMastery = document.querySelector('.skill__level-field');
            clearInputMastery.value = " ";

    }

    render() {
        return (
            <section className="skill">
                <form className="skill__form form-layout" id="inputCapture" onSubmit={this.readInput}>   
                    <section className="skill__intro">
                        <h1>Resume Builder - Skills</h1>
                    </section>
                    <div className="skill__form-name form-div">
                        <label className="skill__name-label form-label" htmlFor="name">Skill:</label>
                        <input className="skill__name-field form-field" type="text" name="name" id="userName" required/>
                    </div>
                    <div className="skill__form-level form-div">
                        <label className="skill__level-label form-label" htmlFor="name">Level:</label>
                        <input className="skill__level-field form-field" type="text" name="name" id="userLevel" required/>
                    </div>
                    <div className="skill__form-key1 form-div">
                        <label className="skill__key1-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key1-field form-field" type="text" name="key" id="userKey1" required/>
                    </div>
                    <div className="skill__form-key2 form-div">
                        <label className="skill__key2-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key2-field form-field" type="text" name="key" id="userKey2" required/>
                    </div>
                    <div className="skill__form-key3 form-div">
                        <label className="skill__key3-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key3-field form-field" type="text" name="key" id="userKey3" required/>
                    </div>
                    <div className="skill__form-key4 form-div">
                        <label className="skill__key4-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key4-field form-field" type="text" name="key" id="userKey4" required/>
                    </div>
                    <div className="skill__form-key5 form-div">
                        <label className="skill__key5-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key5-field form-field" type="text" name="key" id="userKey5" required/>
                    </div>
                    <div className="skill__form-key6 form-div">
                        <label className="skill__key6-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key6-field form-field" type="text" name="key" id="userKey6" required/>
                    </div>
                    <div className="skill__form-key7 form-div">
                        <label className="skill__key7-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key7-field form-field" type="text" name="key" id="userKey7" required/>
                    </div>
                    <div className="skill__form-key8 form-div">
                        <label className="skill__key8-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key8-field form-field" type="text" name="key" id="userKey8" required/>
                    </div>
                    <div className="skill__form-key9 form-div">
                        <label className="skill__key9-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key9-field form-field" type="text" name="key" id="userKey9" required/>
                    </div>
                    <div className="skill__form-key0 form-div">
                        <label className="skill__key0-label form-label" htmlFor="key">Keywords:</label>
                        <input className="skill__key0-field form-field" type="text" name="key" id="userKey0" required/>
                    </div>
                    <button className="skill__button" name="skill-button">Save Changes</button>                    
                </form>
                    <button className="skill__repeat" name="skill-repeat" onClick={this.returnTo}>
                        <NavLink className="resume__link" activeClassName="active" to='/SkillForm'>More Skills</NavLink>
                    </button>
            </section>
        );
    }
}

