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

        let output = {            
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
                    "network": "Stack Overflow",
                    "username": jsonStack,
                    "url": `www.stackoverflow.com/${jsonStack}`
                }]
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
                    <button className="links__button" name="links-button">Save Changes</button>
                </form>
            </section>
        );
    }
}

