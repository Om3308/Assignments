import React, { Component } from "react";
import LoginForm from "./Login";
import Admin from "./Admin";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact to="/" component={LoginForm}/>
            <Route to="/admin" component={Admin}/>
          </Switch>
        </Router>
    );
  }
}
export default Main;
