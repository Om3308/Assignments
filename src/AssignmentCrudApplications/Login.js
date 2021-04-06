import React, { Component } from "react";
import data from "./logindata";
import { Link ,Redirect} from 'react-router-dom';
import Admin from './Admin';
import Employee from './Employee';
class UserForm extends Component {
 
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
   const  d1={};
   data.map((d) => {
      if (d.username === username && d.password === password) {
        d1.id=d.id;
        d1.role=d.role;
        d1.username=d.username;
        d1.password=d.password;
        return d;
      } else return console.log("Sorry try again");
    });
    console.log(JSON.stringify(d1));
    if (d1.role==='manager') {
     
     
    } else if(d1.role==='employee') {
   
     
    }
  };

  handledata = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    
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
export default UserForm;

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {};
//     this.handlechange = this.handlechange.bind(this);
//     //this.handleauthentication=this.handleauthentication.bind(this)
//   }
//   handlechange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }
//   handleauthentication() {
//     alert('In methd');
//     console.log("In Authentication Method");
//     const [ username, password ] = this.state;
//     console.log("username is " + username + "password is " + password);
//     // const check = data.map((d) => {
//     //   if (d.username === username && d.password === password) {
//     //     return d;
//     //   } else return console.log("Sorry try again");
//     // });
//     // console.log("check user " + check.toString());
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleauthentication}>
//         <h3>Log in</h3>

//         <div className="form-group">
//           <label>UserName</label>
//           <input
//             id="username"
//             className="form-control"
//             placeholder="Enter UserName"
//             value={this.state.username}
//             onChange={this.handlechange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             id="password"
//             className="form-control"
//             placeholder="Enter password"
//             value={this.state.password}
//             onChange={this.handlechange}
//           />
//         </div>

//         <button type="submit" className="btn btn-dark btn-lg btn-block">
//           log in
//         </button>
//       </form>
//     );
//   }
// }
