import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./MainPage.css";
import Login from "./Login.js";
import Register from "./Register.js";
import ForgotPassword from "./ForgotPassword.js";
import main_logo from './main_logo.svg';




export default function MainPage() {
  function loginCaller() {
    ReactDOM.render(<Login />, document.getElementById("root"));
  }
  function registerCaller() {
    ReactDOM.render(<Register />, document.getElementById("root"));
  }
  function forgotPasswordCaller() {
    ReactDOM.render(<ForgotPassword />, document.getElementById("root"));
  }
  return (

    <div>
      <img class="main_logo" src={main_logo} alt="Mascot Logo" />

      <div class="login_register_box">

        <p class="rona_cards">Rona Cards</p>
        <div class="button_box">
          <div><button class="button_login_register" onClick={loginCaller}>Login</button></div>
          <br></br>
          <br></br>
          <div><button class="button_login_register" onClick={registerCaller}>Register  </button></div>
          <p>(New User)</p>
          <button class="forgot_password" onClick={forgotPasswordCaller}>Forgot password?</button>
        </div>
      </div>
    </div>
  )
}