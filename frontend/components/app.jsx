import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';
import Modal from './modal/modal';
import Splash from './splash/splash';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      {/* <h1>SOWNDCLOWD</h1> */}
      <Modal/>
      <GreetingContainer/>
    </header>
    <Switch>
      <AuthRoute exact path="/" component={Splash}></AuthRoute>
    </Switch>
    
    {/* <Route path="/signup" component={SignUpFormContainer}></Route> */}
    {/* <Route exact path="/" component={Splash}></Route> */}
    <footer>i'm the footer</footer>
  </div>
);

export default App;