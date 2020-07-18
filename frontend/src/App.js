import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Dashboard from "./containers/Dashboard";
import Register from "./containers/Register";
import Login from "./containers/Login";
import ForgotPassword from "./containers/ForgotPassword";
import UserContext from "./context/UserContext";

import MainPage from './containers/MainPage';

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://rona.cards:4000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://rona.cards:4000/users/",
          {
            headers: { "x-auth-token": token },
          });
        setUserData({
          token,
          user: userRes.data,
        })
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            {/* <Route  path="/dashboard" component={Dashboard} /> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/passwordReset" component={ForgotPassword} />

          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )

}


