import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
class Navigation extends Component {
  render() {
    return (
      <div className="container-fluid mainframe-wrapper ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <h2 className="text">Dashboard</h2>
              <i className="fa fa-tachometer font-pad" aria-hidden="true"></i>
              <i className="fa fa-globe font-pad" aria-hidden="true"></i>
                <i className="fa fa-search font-pad" aria-hidden="true"></i>
              <Link to="/account" className="account">
                Account
              </Link>
              <div className="form-group mt-2 dropdown">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>DropDown</option>
                  <option>select one</option>
                  <option>select two</option>
                  <option>select three</option>
                  <option>select four</option>
                </select>
              </div>
              <Link to="/logout" className="logout">
                Logout
              </Link>
            </ul>
          </div>
        </nav>
       
      </div>
    );
  }
}

export default Navigation;
