import React, { Component } from "react";
class Navigation extends Component {
  render() {
    return (
      <div className="container-fluid mainframe-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <h2>Dashboard</h2>

              <div class="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <form className="form-inline md-form form-sm mt-0">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input
                  class="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <div className="form-group mt-2">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>DropDown</option>
                  <option>select one</option>
                  <option>select two</option>
                  <option>select three</option>
                  <option>select four</option>
                </select>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
