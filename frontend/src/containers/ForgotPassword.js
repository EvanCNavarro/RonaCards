import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./ForgotPassword.css";
import MainPage from "./MainPage.js";
import back_png from './back_png.png';


export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //   const [FirstName, setFirstName] = useState("");
    //   const [LastName, setLastName] = useState("");
    //   const [UserName, setUserName] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    function mainPage_caller() {
        ReactDOM.render(<MainPage />, document.getElementById("root"));
    }

    return (
        <div className="ForgotPassword">
            <button class="back_button" onClick={mainPage_caller}>
                <img class="back_png" src={back_png} alt="Mascot Logo" />
            </button>
            <form onSubmit={handleSubmit}>
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
                <button class="forgotPassword_click" type="submit">
                    Update Password
        </button>
            </form>
        </div>
    );
}
