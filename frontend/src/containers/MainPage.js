import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./MainPage.css";
import Login from "./Login.js";
import Register from "./Register.js";





export default function MainPage()
{
  function loginCaller()
  {
    ReactDOM.render(<Login />, document.getElementById("root"));
  }
  function registerCaller()
  {
    ReactDOM.render(<Register />, document.getElementById("root"));
  }
  return(
    <div>
      <button onClick={loginCaller}>LOGIN</button>
      <button onClick={registerCaller}>REGISTER</button>
    </div>
  )
}