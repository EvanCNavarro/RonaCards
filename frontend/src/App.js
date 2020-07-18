import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Register from "./containers/Register";
import Login from "./containers/Login";
import ForgotPassword from "./containers/ForgotPassword";

import MainPage from './containers/MainPage';

export default function App() {
  return ( 
    <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      {/* <Route  path="/dashboard" component={Dashboard} /> */}
      <Route  path="/login" component={Login} />
      <Route  path="/register" component={Register} />
      <Route  path="/passwordReset" component={ForgotPassword} />

    </Switch>
  </BrowserRouter>
  </>
  )
  
}


