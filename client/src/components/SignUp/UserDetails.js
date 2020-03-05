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
        <h1 className="text-center">To get started, we need some basic information.</h1>
        <FormGroup>
          <Label for="firstName">What's your first name?</Label>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">and your last name?</Label>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">How can our customers reach you?</Label>
          <Input
            type="tel"
            name="phoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone Number"
            onChange={this.props.handleChange("phoneNumber")}
            defaultValue={values.phoneNumber}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">What's your email address?</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={values.email}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Enter a password to sign into your account with.</Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.props.handleChange("password")}
            defaultValue={values.password}
            required
          />
        </FormGroup>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default UserDetails;
