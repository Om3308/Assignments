
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
    render() {
        return (
            <div>
                <h2>i am in admin page</h2>
                <Link to="./Login.js">logout</Link>
            </div>
        );
    }
}

export default Admin;