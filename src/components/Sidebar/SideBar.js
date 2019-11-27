import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Sidebar/SideBar.css";
class SideBar extends Component {
  render() {
    return (
      <div className="sidenav col-2">
        <h2>CREATIVE TIM</h2>

        <Link className="mt-2" to="/">
          <i
            className="fa fa-tachometer font-color mr-2"
            aria-hidden="true"
          ></i>
          DASHBOARD
        </Link>
        <Link className="mt-2" to="/user-profile">
          <i className="fa fa-user font-color mr-2" aria-hidden="true"></i>USER
          PROFILE
        </Link>
        <Link className="mt-2" to="/table-list">
          <i className="fa fa-table font-color mr-2" aria-hidden="true"></i>
          TABLE LIST
        </Link>
        <Link className="mt-2" to="/typoraphy">
          <i className="fa fa-book font-color mr-2" aria-hidden="true"></i>
          TYPOGRAPHY
        </Link>
        <Link  className="mt-2" to="/icons">
          <i className="fa fa-globe font-color mr-2" aria-hidden="true"></i>
          ICONS
        </Link>
        <Link className="mt-2" to="/maps">
          <i className="fa fa-map-signs font-color mr-2" aria-hidden="true"></i>
          MAPS
        </Link>
        <Link className="mt-2" to="/notifications">
          <i className="fa fa-bell font-color mr-2" aria-hidden="true"></i>
          NOTIFICATIONS
        </Link>
        <Link className="mt-2" to="/basics">
          BASICS
        </Link>
        <Link className="font-end" to="/upgrade">
        <i className="fa fa-arrow-up font-color mr-2" aria-hidden="true"></i>UPGRADE TO PRO
        </Link>
      </div>
    );
  }
}

export default SideBar;
