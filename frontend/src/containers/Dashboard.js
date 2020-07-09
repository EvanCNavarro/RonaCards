import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Dashboard.css";
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default function Dashboard() {

const vari = 10;
const username = "Mudit";
const email = "faizarali@corona.com";

  return (
    <div class="topnav">
      <Tabs  class = "topbar" onSelect={(index, label) => console.log(label + ' selected')}>
        <Tab  label="CoronaCards">TAB  1 CONTENT</Tab>
        <Tab  label="Collection">Tab 2 content</Tab>
        <Tab  label="Statistics">Tab 3 content</Tab>
        <Tab  label="Account">
          <h2>Username: {username}</h2>
          <h2>Email: {email}</h2>
          <h2>Password: ******  <button class="password_reset_button">Reset Password</button></h2>
          <h2>Card Count: {vari}</h2>



          </Tab>
        <Tab  label="About">
       </Tab>
        <Tab  label="Logout"> </Tab>
      </Tabs>

    </div>

  );
}