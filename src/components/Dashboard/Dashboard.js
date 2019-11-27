import React from "react";
import Navigation from "../Dashboard/Navigation/Navigation";
import Card from "../Dashboard/Cards/Card";
import LineGraph from "./LineGraph/LineGraph";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="col-lg-10 container-fluid mainframe-wrapper pad">
        <Navigation />
        <Card />
        <div className="col-lg-7 mt-4">
        <LineGraph />
        </div>
      </div>
    );
  }
}
export default Dashboard;
