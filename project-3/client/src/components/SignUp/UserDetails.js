// UserDetails.jsx
import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class UserDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <h1 className="text-center">Enter User Details</h1>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone Number"
            onChange={this.props.handleChange("phoneNumber")}
            defaultValue={values.phoneNumber}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email Address</Label>
          <Input
            type="email"
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={values.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default UserDetails;
