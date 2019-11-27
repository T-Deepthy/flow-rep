import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import SideBar from "./components/Sidebar/SideBar";
import Basics from "./components/Basics/Basics";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="row">
        <SideBar />
        <Route exact path="/" component={Dashboard} />
        <Route path="/basics" component={Basics} />
      </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);