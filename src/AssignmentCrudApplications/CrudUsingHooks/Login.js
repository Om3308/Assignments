import React, { Component } from "react";
import data from "../logindata";
//import { Link ,Redirect} from 'react-router-dom';
//import Admin from './Admin';
class LoginForm extends Component {
 
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isloggedin:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
   
   data.map((d) => {
      if (d.username === username && d.password === password) {
        this.setState(
          this.state.isloggedin=true
        )
      } else return this.state.isloggedin
    });
  };

  handledata = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    
    // {this.state.isloggedin?<Redirect to="/Admin" />}
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handledata}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handledata}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
