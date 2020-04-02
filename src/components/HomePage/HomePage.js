import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import styling 
import './HomeForm.scss';

//import application components

export default class Homepage extends Component {

    buildJSON(e) {
        e.preventDefault();
        let jsonName = e.target.userName.value;
        let jsonTitle = e.target.userTitle.value;
        let jsonEmail = e.target.userEmail.value;
        let jsonWebsite = e.target.userWebsite.value;
        let jsonStreet = e.target.userStreet.value;
        let jsonCity = e.target.userCity.value;
        let jsonProv = e.target.userProv.value;
        let jsonPostcode = e.target.userPostcode.value;
        let jsonTelephone = e.target.userTelephone.value;
        let jsonTwitter = e.target.userTwitter.value;
        let jsonGithub = e.target.userGithub.value;
        let jsonStack = e.target.userStack.value;

        let output = {
            "basics": {
                "name": jsonName,
                "title": jsonTitle,
                "email": jsonEmail,
                "website": jsonWebsite,
                "telephone": jsonTelephone,
                "location": {
                    "address": jsonStreet,
                    "postalCode": jsonPostcode,
                    "city": jsonCity,
                    "region": jsonProv
                },
                "profiles": [{
                    "network": "Twitter",
                    "username": jsonTwitter,
                    "url": `www.twitter.com/${jsonTwitter}`
                },
                {
                    "network": "Github",
                    "username": jsonGithub,
                    "url": `www.github.com/${jsonGithub}`
                },
                {
                    "network": "Stackoverflow",
                    "username": jsonStack,
                    "url": `www.stackoverflow.com/${jsonStack}`
                }]
            }
        }
        console.log(output);
    }

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
                    <label className="resume__item-label">Languages</label>                    
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/LangForm'>Language Skills</NavLink>
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
                    <button className="resume__button" name="resume-button">Employment History</button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Education</label>            
                    <button className="resume__button" name="resume-button">Education</button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Volunteer Experience</label>
                    <button className="resume__button" name="resume-button">Volunteer</button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Awards</label>
                    <button className="resume__button" name="resume-button">
                        <NavLink className="resume__link" activeClassName="active" to='/AwardForm'>Awards</NavLink>
                    </button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Skills</label>                    
                    <button className="resume__button" name="resume-button">Skills</button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Publications</label>                    
                    <button className="resume__button" name="resume-button">Publications</button>
                </div>
                <div className="resume__item">
                    <label className="resume__item-label">Interests</label>    
                    <button className="resume__button" name="resume-button">Interests</button>
                    </div>
                <div className="resume__item">
                    <label className="resume__item-label">References</label>
                    <button className="resume__button" name="resume-button">References</button>
                </div>    
            </section>
        );
    }
}

