import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import MainPage from "./MainPage.js";
import back_png from './back_png.png';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";


export default function Login() {
  //const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function mainPage_caller() {
    ReactDOM.render(<MainPage />, document.getElementById("root"));
  }


  return (
    <div className="Login">
      <Link to="/" class="back_button" >
        <img class="back_png" src={back_png} alt="Mascot Logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel class="user_fill">Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
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
        <button class="login_click" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
