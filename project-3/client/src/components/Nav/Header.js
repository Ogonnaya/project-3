import React, { useState, Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import Modal from "../SignIn/Modal"

// class Header extends Component {}

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kollab</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/planners/features">Exclusive Vendors</NavLink>
            </NavItem>
          </Nav>
          <Modal />
          <Button outline color="secondary" href="/planners/signup">
            Become a Vendor
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
