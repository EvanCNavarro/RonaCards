import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Dashboard.css";
import { Tabs, Tab } from 'react-bootstrap-tabs';

export default function Dashboard() {


  return (
    <div class="topnav">
      <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
        <Tab class="Tab1" label="CoronaCards">Tab 1 content</Tab>
        <Tab label="Collection">Tab 2 content</Tab>
        <Tab label="Statistics">Tab 3 content</Tab>
        <Tab label="Account">Tab 4 content</Tab>
        <Tab label="About">Tab 5 content</Tab>
      </Tabs>

    </div>

  );
}