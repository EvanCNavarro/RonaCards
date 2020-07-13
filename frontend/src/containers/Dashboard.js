import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Dashboard.css";
import { Tabs, Tab } from 'react-bootstrap-tabs';
import contact_logo from './account_icon.png';
import blueLips_present from './icons/blueLips_present.png';
import blueLips_absent from './icons/blueLips_absent.png';
import breathingDifficulty_present from './icons/breathingDifficulty_present.png';
import breathingDifficulty_absent from './icons/breathingDifficulty_absent.png';
import cold_present from './icons/cold_present.png';
import cold_absent from './icons/cold_absent.png';
import diahrrea_present from './icons/diahrrea_present.png';
import diahrrea_absent from './icons/diahrrea_absent.png';
import feet_present from './icons/feet_present.png';
import feet_absent from './icons/feet_absent.png';
import fever_present from './icons/fever_present.png';
import fever_absent from './icons/fever_absent.png';
import heartbeat_present from './icons/heartbeat_present.png';
import heartbeat_absent from './icons/heartbeat_absent.png';
import respiration_present from './icons/respiration_present.png';
import respiration_absent from './icons/respiration_absent.png';
import senseOfTaste_present from './icons/senseOfTaste_present.png';
import senseOfTaste_absent from './icons/senseOfTaste_absent.png';export default function Dashboard() {

  const card_counter = 10; // connect to API
  const username = "Mudit"; // connect to API
  const email = "faizarali@corona.com"; // connect to API

  // these are depending on the API calls, but as of now are randomly assigned. 
  const blueLips = blueLips_present;
  const breathingDifficulty = breathingDifficulty_absent;
  const cold = cold_absent;
  const fever = fever_present;
  const feet = feet_present;
  const diahrrea = diahrrea_absent;
  const heartbeat = heartbeat_present;
  const senseOfTaste = senseOfTaste_absent;
  const respiration = respiration_absent;
  // This is the list of symtoms and the icons to work with.

  // blueLips_present
  // blueLips_absent
  // breathingDifficulty_present
  // breathingDifficulty_absent
  // cold_absent
  // cold_present
  // fever_absent
  // fever_present
  // feet_absent
  // feet_present
  // diahrrea_absent
  // diahrrea_present
  // heartbeat_absent
  // heartbeat_present
  // senseOfTaste_absent
  // senseOfTaste_present
  // respiration_absent
  // respiration_present


  return (
    <div class="topnav">
      <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
        <Tab class="topbar" label="RonaCards">
          <div class="rona_cards_tab">
            <div class="welcome">
              <p>Welcome to the <u>Dashboard</u>, for your collection of C'Rona Cards! </p>
            </div>

          </div>

        </Tab>
        <Tab class="topbar" label="Collection">
          <div>
            <p>This is where you'll find your Collectibles</p>
            <div class="common_box">
              <img class="common_1" src={fever} alt="common_1" />
              <img class="common_2" src={cold} alt="common_1" />
              <img class="common_3" src={breathingDifficulty} alt="common_1" />
            </div>

            <div class="uncommon_box">
              <img class="uncommon_1" src={senseOfTaste} alt="uncommon_1" />
              <img class="uncommon_2" src={diahrrea} alt="uncommon_1" />
              <img class="uncommon_3" src={blueLips} alt="uncommon_1" />
            </div>

            <div class="rare_box">
              <img class="rare_1" src={feet} alt="common_1" />
              <img class="rare_2" src={heartbeat} alt="common_1" />
              <img class="rare_3" src={respiration} alt="common_1" />
            </div>



          </div>

        </Tab>



        <Tab class="topbar" label="Statistics">Tab 3 content</Tab>
        <Tab label="Account">

          <div class="account_box_div">
            <img class="account_icon" src={contact_logo} alt="Contact Logo" />
            <div class="account_details_box">
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
          {/* <br /> */}
          <h2 class="desc">Rona Cards, is an interactive collection card game with the aim of</h2>
          <h2 class="desc">bringing awareness to common symptoms of the COVID-19 virus.</h2>
          <br />
          <h2 class="desc">The goal is for people to learn and collect these informational cards,</h2>
          <h2 class="desc">and spread awareness rather than catching and spreading the actual</h2>
          <h2 class="desc">virus.</h2>
          <br />
          <h2 class="desc">We hope that by bringing light to some of these symptoms, and by</h2>
          <h2 class="desc">using AR (Augmented Reality) to showcase what they actually look</h2>
          <h2 class="desc">like, we can reduce any number of new cases.</h2>
          <br />
          <h2 class="surprise">Collect all of the cards for a surprise!</h2>

        </Tab>
      </Tabs>

    </div >

  );
}