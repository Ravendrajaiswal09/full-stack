import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class Header extends Component {

    render(){
        return (
            <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                <a className="navbar-brand">Bootswatch</a>
                <Link className="navbar-brand"  to={"/users"} routerLinkActive = "navbar-inverse">Users</Link>
                <Link className="navbar-brand" to={"/post"} routerLinkActive = "navbar-inverse">Posts</Link>
                </div>
            </div>
        )
    }
}

export default Header