import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Dashboard.css";
import { Tabs, Tab } from 'react-bootstrap-tabs';
import contact_logo from './account_icon.png'; 


export default function Dashboard() {

  const card_counter = 10; // connect to API
  const username = "Mudit"; // connect to API
  const email = "faizarali@corona.com"; // connect to API

  return (
    <div class="topnav">
      <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
        <Tab class="topbar" label="CoronaCards">TAB  1 CONTENT</Tab>
        <Tab class="topbar" label="Collection">Tab 2 content</Tab>

        <Tab class="topbar" label="Statistics">Tab 3 content</Tab>
        <Tab  label="Account">

          <div class="account_box_div">
            <img class ="account_icon" src={contact_logo} alt = "Contact Logo"/>
            <div class = "account_details_box">
            <p><b>Username:</b> {username}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Password:</b> ******** <button class="password_reset_button">Reset Password</button></p>
            <p><b>Card Count:</b> {card_counter}</p>
            <button class="logout_button">Logout</button>
            </div>
           
          </div>
        </Tab>
        
        <Tab label="About">
          <h2 class="overview">OVERVIEW</h2>
          <br />
          <h2 class="desc">Rona Cards, is an interactive collection card game with the aim of bringing awareness to common symptoms of the COVID-19 virus.</h2>
          <br />
          <h2 class="desc">The goal is for people to learn and collect these informational cards, and spread awareness rather than catching and spreading the actual virus.</h2>
          <br />
          <h2 class="desc">We hope that by bringing light to some of these symptoms, and by using AR (Augmented Reality) to showcase what they actually look like, we can reduce any number of new cases.</h2>
          <br />
          <h2 class="surprise">Collect all of the cards for a surprise!</h2>
        </Tab>
      </Tabs>

    </div >

  );
}