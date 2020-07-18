import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./MainPage.css";
import Login from "./Login.js";
import Register from "./Register.js";
import ForgotPassword from "./ForgotPassword.js";
import main_logo from './main_logo.svg';
import {Link} from "react-router-dom";




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
          <div><Link to="/login" class="button_login_register" >Login</Link></div>
          <br></br>
          <br></br>
          <div><Link to="/register" class="button_login_register" >Register </Link></div>
          <p>(New User)</p>
          <Link to="/passwordReset"class="forgot_password" >Forgot password?</Link>
        </div>
      </div>
    </div>
  )
}