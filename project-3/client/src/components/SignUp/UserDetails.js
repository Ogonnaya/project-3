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
                    <Label for="firstName">First Name</Label>
                    <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.props.handleChange("firstName")}
                        defaultValue={values.firstName}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.props.handleChange("lastName")}
                        defaultValue={values.lastName}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone Number"
                        onChange={this.props.handleChange("phoneNumber")}
                        defaultValue={values.phoneNumber}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={this.props.handleChange("email")}
                        defaultValue={values.email}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
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