import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Helmet} from 'react-helmet';

// import application components
import BasicForm from "./components/BasicForm/BasicForm";
import HomePage from "./components/HomePage/HomePage";
import LinkForm from "./components/LinkForm/LinkForm";
import AwardForm from './components/AwardForm/AwardForm';
import LangForm from './components/LangForm/LangForm';
import PubsForm from './components/PubsForm/PubsForm';
import ReferForm from './components/ReferForm/ReferForm';
import EducForm from './components/EducForm/EducForm';
import VolForm from './components/VolForm/VolForm';
import IntForm from './components/IntForm/IntForm';
import SkillForm from './components/SkillForm/SkillForm';
import WorkForm from './components/WorkForm/WorkForm';

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
            <Route path='/' exact component={HomePage} />
            <Route path='/BasicForm' component={BasicForm} />
            <Route path='/LinkForm' component={LinkForm} />
            <Route path='/AwardForm' component={AwardForm} />
            <Route path='/LangForm' component={LangForm} />
            <Route path='/PubsForm' component={PubsForm} />
            <Route path='/ReferForm' component={ReferForm} />
            <Route path='/EducForm' component={EducForm} />
            <Route path='/VolForm' component={VolForm} />
            <Route path='/IntForm' component={IntForm} />
            <Route path='/SkillForm' component={SkillForm} />
            <Route path='/WorkForm' component={WorkForm} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
