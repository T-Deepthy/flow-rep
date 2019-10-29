import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Cards/Card.css'
class Card extends Component {
  render() {
    return (
        <div className="row mt-5">
            <div className="col-lg-10 card-flex offset-1">
            <div className=" col-lg-3">
        <div className="card ">
          <div className="card-body ">
            <i className="fa fa-database database" aria-hidden="true"></i>
            capacity
            
          </div>

          <hr />
       </div>
       </div>
        <div className=" col-lg-3 ">
        <div className="card ">

          <div className="card-body ">
            <i className="fa fa-money money" aria-hidden="true"></i>Revenue
          </div>
          <hr />
          </div>
        </div>
        <div className=" col-lg-3">
        <div className="card">
        <div className="card-body">
            <i
              className="fa fa-exclamation-triangle error"
              aria-hidden="true"
            ></i>
            Errors
          </div>

          <hr />
        </div>
         
        </div>
        <div className=" col-lg-3">
            <div className="card">
            <div className="card-body">
            <i className="fa fa-twitter twitter" aria-hidden="true"></i>
            Followers
          </div>

          <hr />
            </div>
         
        </div>
            </div>
       
      </div>
    );
  }
}

export default Card;
