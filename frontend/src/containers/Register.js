import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Register.css";
import MainPage from "./MainPage.js";
import back_png from './back_png.png';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [FirstName, setFirstName] = useState("");
  //   const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");

  function validateForm() {
    return UserName.length > 0 && email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function mainPage_caller() {
    ReactDOM.render(<MainPage />, document.getElementById("root"));
  }

  return (
    <div className="Register">
      <button class="back_button" onClick={mainPage_caller}>
        <img class="back_png" src={back_png} alt="Mascot Logo" />
      </button>
      <form onSubmit={handleSubmit}>
        {/* <FormGroup controlId="FirstName" bsSize="large">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="FirstName"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup> */}
        <FormGroup controlId="UserName" bsSize="large">
          <FormLabel class="user_fill">Username</FormLabel>
          <FormControl
            autoFocus
            type="UserName"
            value={UserName}
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
          Login
        </button>
      </form>
    </div>
  );
}
