import React from "react";
import Navigation from "../Dashboard/Navigation/Navigation";
import Card from "../Dashboard/Cards/Card";
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Card />
        <canvas id="pieChart"></canvas>
      </div>
    );
  }
}
export default Dashboard;
