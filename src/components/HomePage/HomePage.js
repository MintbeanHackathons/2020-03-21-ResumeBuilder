import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import styling 
import './HomeForm.scss';

//import application components

export default class Homepage extends Component {


    render() {
        return (
            <section className="resume">
                <h1 className="resume__title">Resume Builder</h1>
                <div className="resume__item">
                    <label className="resume__item-label">Contact Information</label>
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/BasicForm'>Contact Information</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Profile Links</label>
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/LinkForm'>Profile Links</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Employment History</label>
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/WorkForm'>Employment History</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Volunteer Experience</label>
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/VolForm'>Volunteer</NavLink>
                    </button>
                </div>
                <div className="resume__item">  
                    <label className="resume__item-label">Education</label>            
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/EducForm'>Education</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Awards</label>
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/AwardForm'>Awards</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Publications</label>                    
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/PubsForm'>Publications</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Skills</label>                    
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/SkillForm'>Skills</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Languages</label>                    
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/LangForm'>Language Skills</NavLink>
                    </button>
                </div>  
                <div className="resume__item">
                    <label className="resume__item-label">Interests</label>    
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/IntForm'>Interests</NavLink>
                    </button>

                    </div>
                <div className="resume__item">
                    <label className="resume__item-label">References</label>
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/ReferForm'>References</NavLink>
                    </button>
                </div>    
            </section>
        );
    }
}

