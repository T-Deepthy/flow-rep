import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Sidebar/SideBar.css";
class SideBar extends Component {
  render() {
    return (

          <div className="sidenav col-4">
            <h2>CREATIVE TIM</h2>
            <Link to="/">DASHBOARD</Link>
            <Link to="/user-profile">USER PROFILE</Link>
            <Link to="/table-list">TABLE LIST</Link>
            <Link to="/typoraphy">TYPOGRAPHY</Link>
            <Link to="/icons">ICONS</Link>
            <Link to="/maps">MAPS</Link>
            <Link to="/notifications">NOTIFICATIONS</Link>
            <Link className="mt-4" to="/upgrade">
              UPGRADE TO PRO
            </Link>
          </div>
    );
  }
}

export default SideBar;
