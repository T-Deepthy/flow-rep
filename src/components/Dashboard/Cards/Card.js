import React, { Component } from "react";
import '../Cards/Card.css'
class Card extends Component {
  render() {
    return (
        <div className="row mt-3 ml-5 ">
            <div className="col-lg-10 card-flex ">
            <div className=" col-lg-3">
        <div className="cards ">
          <div className="text-last">
            <i className="fa fa-database database mr-5" aria-hidden="true"></i>
                 capacity
                 <p className="text-last"><strong>10gb</strong></p>
          </div>
          <hr />
          <p><i className="fa fa-refresh mr-2 ml-2"></i>updated now</p>
       </div>
       </div>
        <div className=" col-lg-3 ">
        <div className="cards ">
          <div className="text-last">
            <i className="fa fa-money money mr-5 "  aria-hidden="true"></i>Revenue
            <p className="text-last"><strong>$10020</strong></p>
          </div>
          <hr />
          <p><i className="fa fa-calendar mb-4 mr-2 ml-2"></i>Last day</p>
          </div>
        </div>
        <div className=" col-lg-3">
        <div className="cards">
        <div className="text-last">
            <i
              className="fa fa-exclamation error mr-5"
              aria-hidden="true"
            ></i>
            Errors
            <p className="text-last"><strong>33</strong></p>
          </div>
          <hr />
          <p><i className="fa fa-clock-o pad-error mr-2 ml-2"></i>In the last hour</p>
        </div>
        </div>
        <div className=" col-lg-3">
            <div className="cards">
            <div className="text-last">
            <i className="fa fa-twitter twitter mr-5" aria-hidden="true"></i>
            Followers
            <p className="text-last"><strong>+70</strong></p>
          </div>
          <hr />
          <p><i className="fa fa-refresh mr-2 ml-2"></i>updated now</p>
            </div>
        </div>
            </div>
      </div>
    );
  }
}
export default Card;
