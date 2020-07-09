import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Dashboard.css";
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default function Dashboard() {

const vari = 10; // connect to API
const username = "Mudit"; // connect to API
const email = "faizarali@corona.com"; // connect to API

  return (
    <div class="topnav">
      <Tabs  onSelect={(index, label) => console.log(label + ' selected')}>
        <Tab  class = "topbar" label="CoronaCards">TAB  1 CONTENT</Tab>
        <Tab  class = "topbar" label="Collection">Tab 2 content</Tab>
        <Tab  class = "topbar" label="Statistics">Tab 3 content</Tab>
        <Tab   class = "topbar" label="Account">
          <div class ="account_box_div">
            {/* <img src="account_icon.png" width="500" height="600">
            </img>  */}
            <p><b>Username:</b> {username}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Password:</b> ******** <button class="password_reset_button">Reset Password</button></p>
            <p><b>Card Count:</b> {vari}</p>
          </div>
          


        </Tab>
        <Tab  label="About">
        </Tab>
        <Tab  label="Logout"> </Tab>
      </Tabs>

    </div>

  );
}