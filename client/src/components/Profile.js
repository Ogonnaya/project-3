import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import {
  Jumbotron,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",

      //Profile Information
      city: "",
      state: "",
      title: "",
      image: "", //How do we allow planners to upload and store images in the database?
      bio: "",
      category: "", //Array Mongoose //How do we store multiple selections?
      priceRange: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.plannertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      phoneNumber: decoded.phoneNumber,
      email: decoded.email,

      //Profile Information
      city: decoded.city,
      state: decoded.state,
      title: decoded.title,
      image: decoded.image, //How do we allow planners to upload and store images in the database?
      bio: decoded.bio,
      category: decoded.category, //Array Mongoose //How do we store multiple selections?
      priceRange: decoded.priceRange
    });
  }

  render() {
    return (
      <div>
        <div>
          <Jumbotron fluid className="profile-image">
            <Container fluid>
              <h1 className="display-4">Your profile</h1>
              <p className="lead"></p>
            </Container>
          </Jumbotron>
          <div className="container">
            <Card className="profile">
              <CardBody>
                <img
                  width="100%"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"
                  alt="Card image cap"
                />
                <CardTitle>
                  {this.state.firstName} {this.state.lastName}
                </CardTitle>
                <CardSubtitle>
                  Party, Charity Events, Corporate Events, Funerals, Weddings
                </CardSubtitle>
                <br />
                <CardSubtitle>
                  {this.state.title} | {this.state.city}, {this.state.state}
                </CardSubtitle>

                <CardText>
                  {this.state.email} | {this.state.phoneNumber}
                </CardText>

                <CardSubtitle>
                  {this.state.priceRange} starting cost
                </CardSubtitle>
                <br />
                <CardText>{this.state.bio}</CardText>
                <CardLink href="#">Send me an email</CardLink>
                <CardLink href="#">View gallery</CardLink>
              </CardBody>
              <CardBody></CardBody>
            </Card>
          </div>
        </div>
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto"></div>
            {/* <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{this.state.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{this.state.lastName}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{this.state.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{this.state.city}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{this.state.state}</td>
                </tr>
                <tr>
                  <td>Image</td>
                  <td>{this.state.image}</td>
                </tr>
                <tr>
                  <td>bio</td>
                  <td>{this.state.bio}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{this.state.category}</td>
                </tr>
                <tr>
                  <td>Price Range</td>
                  <td>{this.state.priceRange}</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
