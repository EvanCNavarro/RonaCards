import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Register.css";
import MainPage from "./MainPage.js";
import back_png from './back_png.png';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = { email, password, username };
    await Axios.post(
      "http://rona.cards:4000/users/register",
      newUser
    );
    const loginRes = await Axios.post(
      "http://rona.cards:4000/users/login", {
      username,
      password,
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  function validateForm() {
    return username.length > 0 && email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function mainPage_caller() {
    ReactDOM.render(<MainPage />, document.getElementById("root"));
  }

  return (
    <div className="Register">
      <Link to="/" class="back_button" >
        <img class="back_png" src={back_png} alt="Mascot Logo" />
      </Link>
      <form onSubmit={submit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel class="user_fill">Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel class="user_fill">Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel class="user_fill" ><p>Password</p></FormLabel>
          <FormControl
            class="credentials"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <button class="register_click" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
