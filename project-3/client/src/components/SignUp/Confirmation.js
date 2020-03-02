// Confirmation.jsx
import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

class Confirmation extends Component {
  handleFormSubmit = e => {
    e.preventDefault();


    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        phoneNumber,
        email,
        city,
        state,
        title,
        image,
        bio,
        category,
        priceRange,
      }
    } = this.props;

    return (
      <div>
        <h1 className="text-center">Confirm your Details</h1>
        <p>
          Click Confirm if the following details have been correctly entered
        </p>
        <ListGroup>
          <ListGroupItem>First Name: {firstName}</ListGroupItem>
          <ListGroupItem>Last Name: {lastName}</ListGroupItem>
          <ListGroupItem>Phone Number: {phoneNumber}</ListGroupItem>
          <ListGroupItem>
            Email: <a href="mailto:{email}">{email}</a>
          </ListGroupItem>
          <ListGroupItem>
            Location: {city}, {state}
          </ListGroupItem>
          <ListGroupItem>Title: {title}</ListGroupItem>
          <ListGroupItem>Image: {image}</ListGroupItem>
          <ListGroupItem>Bio: {bio}</ListGroupItem>
          <ListGroupItem>Category: {category}</ListGroupItem>
          <ListGroupItem>
            Price Range: {priceRange}
          </ListGroupItem>
        </ListGroup>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.handleFormSubmit}>Confirm</Button>
      </div>
    );
  }
}

export default Confirmation;
