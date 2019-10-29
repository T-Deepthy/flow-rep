import React, { Component } from 'react';
import './Mainframe.css';
import Dashboard from '../../components/Dashboard/Dashboard';
class MainFrame extends Component {
  render() {
    return ( 
        <div className="col-lg-8 container-fluid mainframe-wrapper">
          
            <Dashboard />
        </div>
    );
  }
}

export default MainFrame;