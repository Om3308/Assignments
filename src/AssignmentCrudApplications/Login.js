/* eslint-disable no-const-assign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Admin from "./Admin";
import data from "./logindata";

class Login extends Component {
  constructor() {
    super()
    this.state={
     username:'',
     password:'',
     isloggedin:false
    }
  }
  handleauthentication() {
    const{username,password}=this.state;
     username = document.getElementById("username").value;
     password = document.getElementById("password").value;
    data.map((d) => {
      if (d.username === username && d.password === password) {
        sessionStorage.setItem(d.id, d);
        if (d.role === "manager") {
          
          
        } else return console.log("Sorry try again");
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.handleauthentication}>
        <h3>Log in</h3>

        <div className="form-group">
          <label>UserName</label>
          <input
            id="username"
            type="username"
            className="form-control"
            placeholder="Enter UserName"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
      </form>
    );
  }
}
export default Login;
