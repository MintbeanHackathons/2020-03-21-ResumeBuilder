import React, { Component } from 'react';


// import styling 
import './ContactForm.scss';

//import application components

export default class ContactUs extends Component {

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
                },
                    {
                        "network": "Github",
                        "username": jsonGithub
                }]
            }
        }
        console.log(output);
    }

    render() {
        return (
            <>
                <form className="contact__form" id="inputCapture" onSubmit={this.buildJSON}>   
                    <section className="contact__intro">
                        <h1>Resume JSON Builder</h1>
                    </section>
                    <div className="contact__form-name">
                        <label className="contact__name-label" htmlFor="name">Enter your name:</label>
                        <input className="contact__name-field" type="text" name="name" id="userName"></input>
                    </div>
                    <div className="contact__form-title">
                        <label className="contact__title-label" htmlFor="title">Enter your job title:</label>
                        <input className="contact__title-field" type="text" name="title" id="userTitle"></input>
                    </div>
                    <div className="contact__form-email">
                        <label className="contact__email-label" htmlFor="email">Enter your email address:</label>
                        <input className="contact__email-field" type="email" name="email" id="userEmail" required/>
                    </div>
                    <div className="contact__form-website">
                        <label className="contact__website-label" htmlFor="website">Enter your portfolio website:</label>
                        <input className="contact__website-field" type="text" name="website" id="userWebsite" required/>
                    </div>
                    <div className="contact__form-location">
                        <label className="contact__location-label" htmlFor="address">Enter your address:</label>
                        <input className="contact__location-street" type="text" name="address" id="userStreet" required/>
                        <label className="contact__city-label" htmlFor="address">Enter your city:</label>
                        <input className="contact__location-city" type="text" name="address" id="userCity" required/>
                        <label className="contact__prov-label" htmlFor="address">Enter your province:</label>
                        <input className="contact__location-prov" type="text" name="address" id="userProv" required/>
                        <label className="contact__postcode-label" htmlFor="address">Enter your postal code:</label>
                        <input className="contact__location-postcode" type="text" name="address" id="userPostcode" required/>
                    </div>
                    <div className="contact__form-telephone">
                        <label className="contact__telephone-label" htmlFor="telephone">Enter your telephone number:</label>
                        <input className="contact__telephone-field" type="number" name="telephone" id="userTelephone" required/>
                    </div>
                    <div className="contact__form-twitter">
                        <label className="contact__twitter-label" htmlFor="twitter">Enter your Twitter userid:</label>
                        <input className="contact__twitter-field" type="text" name="twitter" id="userTwitter" required/>
                    </div>
                    <div className="contact__form-github">
                        <label className="contact__github-label" htmlFor="github">Enter your Github username:</label>
                        <input className="contact__github-field" type="text" name="github" id="userGithub" required/>
                    </div>
                    <button className="contact__button" name="contact-button">Build JSON file</button>
                </form>
            </>
        );
    }
}

