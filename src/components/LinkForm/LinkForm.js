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
            <section className="links">
                <form className="links__form" id="inputCapture" onSubmit={this.buildJSON}>   
                    <section className="links__intro">
                        <h1>Resume Builder - Social Media Links</h1>
                    </section>
                    <div className="links__form-twitter">
                        <label className="links__twitter-label" htmlFor="twitter">Enter your Twitter userid:</label>
                        <input className="links__twitter-field" type="text" name="twitter" id="userTwitter" required/>
                    </div>
                    <div className="links__form-github">
                        <label className="links__github-label" htmlFor="github">Enter your Github username:</label>
                        <input className="links__github-field" type="text" name="github" id="userGithub" required/>
                    </div>
                    <div className="links__form-stack">
                        <label className="links__stack-label" htmlFor="stack">Enter your Stack Overflow username:</label>
                        <input className="links__stack-field" type="text" name="stack" id="userStack" required/>
                    </div>
                    <button className="links__button" name="links-button">Save Changes</button>
                </form>
            </section>
        );
    }
}

