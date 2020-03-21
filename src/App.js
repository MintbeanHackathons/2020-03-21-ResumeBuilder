import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Helmet} from 'react-helmet';

// import application components
import ContactForm from "./ContactForm/ContactForm";

export default class App extends React.Component {

  render() {
    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Resume Builder</title>
        </Helmet>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ContactForm} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
