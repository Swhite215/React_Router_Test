import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";

class Main extends Component {
  render () {
    return (
      <HashRouter>
      <div>
        <h1>THIS IS WHERE THE CAMPAIGN NAME GOES</h1>
        <ul className="header">
          <li><NavLink exact to="/">FormOne</NavLink></li>
          <li><NavLink to="/formTwo">FormTwo</NavLink></li>
          <li><NavLink to="/formThree">FormThree</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={FormOne}/>
          <Route path="/formTwo" component={FormTwo}/>
          <Route path="/formThree" component={FormThree}/>
        </div>
        <p>Testing</p>
      </div>
    </HashRouter>
    );
  }
}

export default Main;
