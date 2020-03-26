import React, { Component } from 'react';


// import styling 
import './LinkForm.scss';

//import application components

export default class LinkForm extends Component {

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
            <>
                <form className="contact__form" id="inputCapture" onSubmit={this.buildJSON}>   
                    <section className="contact__intro">
                        <h1>Resume Builder - Social Media Links</h1>
                    </section>
                    <div className="contact__form-twitter">
                        <label className="contact__twitter-label" htmlFor="twitter">Enter your Twitter userid:</label>
                        <input className="contact__twitter-field" type="text" name="twitter" id="userTwitter" required/>
                    </div>
                    <div className="contact__form-github">
                        <label className="contact__github-label" htmlFor="github">Enter your Github username:</label>
                        <input className="contact__github-field" type="text" name="github" id="userGithub" required/>
                    </div>
                    <div className="contact__form-stack">
                        <label className="contact__stack-label" htmlFor="stack">Enter your Stack Overflow username:</label>
                        <input className="contact__stack-field" type="text" name="stack" id="userStack" required/>
                    </div>
                    <button className="contact__button" name="contact-button">Save Changes</button>
                </form>
            </>
        );
    }
}

