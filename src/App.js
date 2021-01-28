
import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Adlogin from "./components/adlogin.component"
import Home from "./components/home.component";
import Dashboard from './components/dashboard.component'
//import Profile from "./components/profile.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';

class App extends Component {
  constructor(props) {
    super(props);
    //this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };


  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
       
      });
    }
  }

  // logOut() {
  //   this.props.dispatch(logout());
  // }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div>
           <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Electricity Bill System
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  Dashboard
                </Link>
              </li> 
              </div>
           
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/adlogin" component={Adlogin} />
              {/* <Route exact path="/profile" component={Profile} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



export default (App);
