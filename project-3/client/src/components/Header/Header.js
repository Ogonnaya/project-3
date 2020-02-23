import React, { useState } from "react";
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
          <Button color="link" href="#">
            Already have an account? Sign In
          </Button>
          <Button outline color="secondary" href="/planners/signup">
            Become a Vendor
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
