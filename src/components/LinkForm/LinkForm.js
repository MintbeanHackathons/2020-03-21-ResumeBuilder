import React, { Component } from 'react';
import { saveAs } from 'file-saver';


// import styling 
import '../styling/form-master.scss';
import './LinkForm.scss';

//import application components

export default class LinkForm extends Component {

    buildJSON(e) {
        e.preventDefault();
        let profiles =            
                [{
                    "network": "Twitter",
                    "username": e.target.userTwitter.value,
                    "url": `www.twitter.com/${e.target.userTwitter.value}`
                },
                {
                    "network": "Github",
                    "username": e.target.userGithub.value,
                    "url": `www.github.com/${e.target.userGithub.value}`
                },
                {
                    "network": "Stack Overflow",
                    "username": e.target.userStack.value,
                    "url": `www.stackoverflow.com/${e.target.userStack.value}`
                },
                {
                    "network": "LinkedIn",
                    "username": e.target.userLink.value,
                    "url": `www.linkedin.com/in/${e.target.userLink.value}`
                },
                {
                    "network": "Facebook",
                    "username": e.target.userFace.value,
                    "url": `www.facebook.com/${e.target.userFace.value}`
                },
                {
                    "network": "Instagram",
                    "username": e.target.userInsta.value,
                    "url": `www.instagram.com/${e.target.userInsta.value}`
                }]

        let output = JSON.stringify({ profiles });

        localStorage.setItem('profiles', output);
            var file = new File([localStorage.getItem('basics'), localStorage.getItem('profiles')], 'JSH.json');
            saveAs(file);

        console.log(localStorage.getItem('profiles'));
    }   

    render() {
        return (
            <section className="links">
                <form className="links__form form-layout" id="inputCapture" onSubmit={this.buildJSON}>   
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

