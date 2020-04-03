import React, { Component } from 'react';


// import styling 
import './LinkForm.scss';
import '../styling/form-master.scss';

//import application components

export default class LinkForm extends Component {

    buildJSON(e) {
        e.preventDefault();
        let jsonTwitter = e.target.userTwitter.value;
        let jsonGithub = e.target.userGithub.value;
        let jsonStack = e.target.userStack.value;
        let jsonLink = e.target.userLink.value;
        let jsonFace = e.target.userFace.value;
        let jsonInsta = e.target.userInsta.value;

        let profiles =            
                [{
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
                    "network": "Stack Overflow",
                    "username": jsonStack,
                    "url": `www.stackoverflow.com/${jsonStack}`
                },
                {
                    "network": "LinkedIn",
                    "username": jsonLink,
                    "url": `www.linkedin.com/in/${jsonLink}`
                },
                {
                    "network": "Facebook",
                    "username": jsonFace,
                    "url": `www.facebook.com/${jsonFace}`
                },
                {
                    "network": "Instagram",
                    "username": jsonInsta,
                    "url": `www.instagram.com/${jsonInsta}`
                }]

        let output = JSON.stringify({ profiles });

        localStorage.setItem('profiles', output);
    }   

    render() {
        return (
            <section className="links">
                <form className="links__form" id="inputCapture" onSubmit={this.buildJSON}>   
                    <section className="links__intro">
                        <h1>Resume Builder - Social Media Links</h1>
                    </section>
                    <div className="links__form-twitter form-div">
                        <label className="links__twitter-label form-label" htmlFor="twitter">Enter your Twitter userid:</label>
                        <input className="links__twitter-field form-field" type="text" name="twitter" id="userTwitter" required/>
                    </div>
                    <div className="links__form-github form-div">
                        <label className="links__github-label form-label" htmlFor="github">Enter your Github username:</label>
                        <input className="links__github-field form-field" type="text" name="github" id="userGithub" required/>
                    </div>
                    <div className="links__form-stack form-div">
                        <label className="links__stack-label form-label" htmlFor="stack">Enter your Stack Overflow username:</label>
                        <input className="links__stack-field form-field" type="text" name="stack" id="userStack" required/>
                    </div>
                    <div className="links__form-linkedin form-div">
                        <label className="links__linkedin-label form-label" htmlFor="linkedin">Enter your LinkedIn username:</label>
                        <input className="links__linkedin-field form-field" type="text" name="linkedin" id="userLink" required/>
                    </div>
                    <div className="links__form-facebook form-div">
                        <label className="links__facebook-label form-label" htmlFor="facebook">Enter your Facebook username:</label>
                        <input className="links__facebook-field form-field" type="text" name="facebook" id="userFace" required/>
                    </div>
                    <div className="links__form-insta form-div">
                        <label className="links__insta-label form-label" htmlFor="insta">Enter your Instagram username:</label>
                        <input className="links__insta-field form-field" type="text" name="insta" id="userInsta" required/>
                    </div>

                    <button className="links__button" name="links-button">Save Changes</button>
                </form>
            </section>
        );
    }
}

