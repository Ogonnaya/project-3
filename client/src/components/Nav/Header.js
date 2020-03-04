// import React, { useState, Component } from "react";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  //   NavbarToggler,
//   NavbarBrand,
  Nav,
  NavItem,
  //   NavLink,
  Button
} from "reactstrap";
// import Modal from "../SignIn/Modal"

class Header extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <Navbar>
        <NavItem>
          <Link to="/login" className="nav-link">
            Already have an account? Sign In
          </Link>
        </NavItem>
        <Button outline color="secondary">
          <Link to="/planners/signup" className="nav-link">
            Become a vendor
          </Link>
        </Button>
      </Navbar>
    );

    const userLink = (
      <Navbar>
        <NavItem>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </NavItem>
        <NavItem>
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </NavItem>
      </Navbar>
    );

    return (
      <Nav className="navbar-expand-lg navbar-dark bg-light">
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
        <Navbar>
          <Link to="/" className="nav-link">
            Kollab
          </Link>
        </Navbar>

        <Collapse
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <Navbar>
            {/* <NavItem>
              <Link to="/" className="nav-link">
                Kollab
              </Link>
            </NavItem> */}
          </Navbar>
          {localStorage.usertoken ? userLink : loginRegLink}
        </Collapse>
      </Nav>
    );
  }
}

// const Header = props => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">Kollab</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             {/* <NavItem>
//               <NavLink href="/planners/features">Exclusive Vendors</NavLink>
//             </NavItem> */}
//           </Nav>
//           <Modal />
//           <Button outline color="secondary" href="/planners/signup">
//             Become a Vendor
//           </Button>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

export default withRouter(Header);
