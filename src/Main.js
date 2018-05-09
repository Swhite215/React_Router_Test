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
  constructor(props) {
    super(props);
    this.state = {
      formOneData: [
        {name: "strategy", options: ["retail", "in-market", "awareness"]},
        {name: "creative", options: ["250x250", "100x400", "500x650"]}
      ],
      formTwoData: [
        {name: "market", options: ["gmna", "gmsa", "gme", "gmi"]},
        {name: "duration", options: ["1 month", "3 months", "6 months", "12 months"]}
      ]
    }
  }
  render () {
    return (
      <HashRouter>
      <div>
        {/* COMMENT ME */}
        <h1>THIS IS WHERE THE CAMPAIGN NAME GOES</h1>
        <ul className="header">
          <li><NavLink exact to="/">FormOne</NavLink></li>
          <li><NavLink to="/formTwo">FormTwo</NavLink></li>
          <li><NavLink to="/formThree">FormThree</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={() => <FormOne formData={this.state.formOneData}/>}/>
          <Route path="/formTwo" component={() => <FormTwo formData={this.state.formTwoData}/>}/>
          <Route path="/formThree" component={FormThree}/>
        </div>
      </div>
    </HashRouter>
    );
  }
}

export default Main;
