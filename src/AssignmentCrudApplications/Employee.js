import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Employee extends Component {
    render() {
        return (
            <div>
                <h1>I am in Employee</h1>
                <Link to="./Login.js">logout</Link>
            </div>
        );
    }
}

export default Employee;