import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
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
      <div class="login_register_box">
        <div class ="button_box">
          <div><button class="login_button" onClick={loginCaller}>Login</button></div>
          <p>Existing User ?</p>
          <div><button class="register_button" onClick={registerCaller}>Register  </button></div>
          <p>New User ?</p>
        </div>
      </div>
    </div>
  )
}