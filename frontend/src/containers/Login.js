import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import MainPage from "./MainPage.js";
import back_png from './back_png.png';


export default function Login() {
  //const [email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() 
  {
    return UserName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) 
  {
    event.preventDefault();
  }
  function mainPage_caller()
  {
    ReactDOM.render(<MainPage />, document.getElementById("root"));
  }


  return (
    <div className="Login">
      <button class="back_button" onClick={mainPage_caller}>
      <img class="back_png" src={back_png} alt="Mascot Logo" />
      </button>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="UserName" bsSize="large">
          <FormLabel class="user_fill">Username</FormLabel>
          <FormControl
            autoFocus
            type="UserName"
            value={UserName}
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
