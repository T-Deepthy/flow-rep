import React, { Component } from 'react';
import './Mainframe.css';
import Dashboard from '../../components/Dashboard/Dashboard';
class MainFrame extends Component {
  render() {
    return ( 
        <div className="col-lg-10 container-fluid mainframe-wrapper pad">
          
            <Dashboard />
        </div>
    );
  }
}

export default MainFrame;