import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';
import Modal from './modal/modal';
import Splash from './splash/splash';
import Footer from './footer'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header className="head">
      {/* <h1>SOWNDCLOWD</h1> */}
      <Modal/>
      <GreetingContainer/>
    </header>
    <Switch>
      <AuthRoute exact path="/" component={Splash}></AuthRoute>
    </Switch> 
    {/* <Route path="/signup" component={SignUpFormContainer}></Route> */}
    {/* <Route exact path="/" component={Splash}></Route> */}
    {/* <Route exact path = "/account" component={Account}><</Route>
    <Link to="/account">My Acount</Link>  */}
    <Footer></Footer>
  </div>
);

export default App;