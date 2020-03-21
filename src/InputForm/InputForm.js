import React from 'react';
import { NavLink, Route } from 'react-router-dom';


// import styling. 
import './InputForm.scss';
import '../Header/Header.scss';
import '../NavBar/Nav.scss';

// import application components
import Footer from '../Footer/Footer';
import PaymentAmort from '../PaymentAmort/PaymentAmort';
import ContactForm from '../ContactForm/ContactForm';
import Mascot from '../Mascot/Mascot';


// images
import logo from '../images/MA-accumetrix-logo.png';

export default class InputForm extends React.Component { 

    handleClick = (e) => {
        this.props.analyzeForm(e)
        this.props.history.push('/ResultsPage')
    }

    render() {
    return (
      <>
        <header className="header__container">
            <div className="header__corp">
                <img className="header__corp-logo" src={logo} alt="company Logo" width='200' />
                <p className="header__corp-info">License No 12036</p>
                <p className="header__corp-info2">Independently Owned and Operated Franchise</p>
            </div>
                <div className="header__title-container">
                <h1 className="header__title">Mortgage Rate Estimate</h1>
            </div>
            <div className="nav__container">
                <div className="nav__apply-now-offer">
                    <a className="nav__apply-now-button" href="http://mortgagealliance.com/JohnHeckbert/apply-online" target="blank" > Apply Now</a>
                </div>
                <NavLink className="nav__link" activeClassName="active" to='/Contact Us'>Contact Us</NavLink>
                <Route path='/Contact Us' component={ContactForm} />
                <NavLink className="nav__link" activeClassName="active" to='/Mascot'>Mascot</NavLink>
                <Route path='/Mascot' component={Mascot} />
                <NavLink className="nav__link" activeClassName="active" to='/Mortgage Rate Estimate'>Mortgage Rate Estimate</NavLink>
                <Route path='/Mortgage Rate Estimate' component={InputForm} />
                <NavLink className="nav__link" activeClassName="active" to='/Payment Calculator'>Payment Calculator</NavLink>
                <Route path='/Payment Calculator' component={PaymentAmort} />
                <a className="nav__mopolo-link" href="http://mortgagealliance.com/JohnHeckbert/mopolo" target="blank">Credit Monitoring Tool</a>
            </div>
        </header>
        <section className="inputCapture__intro">
        <p>For those not well served by the more traditional lenders - self employed, credit challenged and/or limited equity.</p>
        </section>
        <form
        className="inputCapture__form"
        id="inputCapture"
        onSubmit={this.handleClick}
        >
        <div className="inputCapture__form-name">
            <label className="inputCapture__name-label" htmlFor="name">Enter your name:{" "}</label>
            <input className="inputCapture__name-field" type="text" name="name" id="userName"></input>
        </div>
        <div className="inputCapture__form-email">
            <label className="inputCapture__email-label" htmlFor="email">Enter your email address:{" "}</label>
            <input className="inputCapture__email-field" type="email" name="email" id="userEmail"></input>
        </div>
        <div className="inputCapture__form-mortgage">
            <label className="inputCapture__mortgage-label" htmlFor="mortgage">{" "}Property Value:</label>
            <input className="inputCapture__mortgage-field" type="number" name="mortgage" id="userMortgage"></input>
        </div>
        <div className="inputCapture__form-equity">
            <label className="inputCapture__equity-label" htmlFor="equity">Amount of Equity/Down Payment Available:</label>
            <input className="inputCapture__equity-field" type="number" name="equity" id="userEquity"></input>
        </div>
        <div className="inputCapture__form-self-income">
            <label className="inputCapture__self-inc-label" htmlFor="selfIncome">Your average monthly income:</label>
            <input className="inputCapture__self-inc-field" type="number" name="selfIncome" id="userSelfIncome"></input>
        </div>
        <div className="inputCapture__form-self-credit">
            <label
            className="inputCapture__self-credit-label" htmlFor="creditSelf">Personal rating of your credit history:</label>
            <div className="inputCapture__self-credit-field">
            <input type="radio" id="crSelfPoor" name="selfCredit" value="5" />
            <label htmlFor="crSelfPoor">Poor</label>
            <input
                type="radio"
                id="crSelfFair"
                name="selfCredit"
                value="4"
            />
            <label htmlFor="crSelfFair">Fair</label>
            <input
                type="radio"
                id="crSelfGood"
                name="selfCredit"
                value="3"
            />
            <label htmlFor="crSelfGood">Good</label>
            <input
                type="radio"
                id="crSelfVyGd"
                name="selfCredit"
                value="2"
            />
            <label htmlFor="crSelfVyGd">Very Good</label>
            <input
                type="radio"
                id="crSelfExc"
                name="selfCredit"
                value="1"
            />
            <label htmlFor="crSelfExc">Excellent</label>
            </div>
        </div>
        <div className="inputCapture__form-part-income">
            <label
            className="inputCapture__part-inc-label"
            htmlFor="partIncome"
            >
            Partner's average monthly income:
            </label>
            <input
            className="inputCapture__part-inc-field"
            type="number"
            name="partIncome"
            id="userPartIncome"
            ></input>
        </div>
        <div className="inputCapture__form-part-credit">
            <label
            className="inputCapture__part-credit-label"
            htmlFor="creditPart"
            >
            Personal rating of your partner's credit history:
            </label>
            <div className="inputCapture__part-credit-field">
            <input
                type="radio"
                id="crPartPoor"
                name="partCredit"
                value="5"
            />
            <label htmlFor="crSelfPoor">Poor</label>
            <input
                type="radio"
                id="crPartFair"
                name="partCredit"
                value="4"
            />
            <label htmlFor="crSelfFair">Fair</label>
            <input
                type="radio"
                id="crPartGood"
                name="partCredit"
                value="3"
            />
            <label htmlFor="crSelfGood">Good</label>
            <input
                type="radio"
                id="crPartVyGd"
                name="partCredit"
                value="2"
            />
            <label htmlFor="crSelfVyGd">Very Good</label>
            <input
                type="radio"
                id="crPartExc"
                name="partCredit"
                value="1"
            />
            <label htmlFor="crSelfExc">Excellent</label>
            </div>
        </div>
        <div className="inputCapture__form-selfEmp">
            <label
            className="inputCapture__selfEmp-ind-label"
            htmlFor="selfEmpInd"
            >
            Are either you or your partner self employed?
            </label>
            <select className="inputCapture__selfEmp-ind-field" id="selfEmpInd">
            <option value="y">Yes</option>
            <option value="n">No</option>
            </select>
        </div>
        <div className="inputCapture__form-security">
            <label className="inputCapture__security-label" htmlFor="security">
            Type of Property:
            </label>
            <div className="inputCapture__form-security-option">
            <input
                type="radio"
                id="priRes"
                name="selfSecurity"
                value="pr"
            />
            <label htmlFor="priRes">Principal Residence</label>
            <input type="radio" id="invProp" name="selfSecurity" value="ip" />
            <label htmlFor="invProp">Investment Property</label>
            </div>
        </div>
        <button className="inputCapture__button"> Submit</button>
        </form>
        <Footer />
      </>
    )
}}