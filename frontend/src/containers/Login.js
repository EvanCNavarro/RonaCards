import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import MainPage from "./MainPage.js";

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
      <button onClick={mainPage_caller}>Back</button>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="UserName" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="UserName"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
