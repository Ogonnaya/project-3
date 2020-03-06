import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav } from "reactstrap";
import "./style.css";

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("plannertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <Nav>
        {/* <li className="nav-item">
          <Link to="/featured" className="nav-link">
            Exclusive Vendors
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Already have an account? Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Become a vendor
          </Link>
        </li>
      </Nav>
    );

    const plannerLink = (
      <Nav>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </Nav>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>Kollab</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          >
            <Nav>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </Nav>
            {localStorage.plannertoken ? plannerLink : loginRegLink}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Landing);
