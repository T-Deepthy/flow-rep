import React, { Component } from "react";
import { Route, Switch } from "react-router";
import MainFrame from "./containers/MainFrame/MainFrame";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import SideBar from "./components/Sidebar/SideBar";
import UserProfile from "./components/UserProfile/UserProfile";


export class App extends Component {
  render() {
    return (
     
        <React.Fragment>
        <SideBar  />
        <Switch>
          <Route path="/" render={() => <MainFrame />} exact/>
          <Route path="/user-profile" render={() => <UserProfile />} exact/>
         
        </Switch>
      </React.Fragment>
      
     
    );
  }
}

export default withRouter(App);
