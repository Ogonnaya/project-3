import React, { Component } from "react";
// import React from 'react';
import { Container, Media } from "reactstrap";
import API from "../../utils/API";

class profile extends Component {
  state = {
    planners: [],
    firstName: "",
    lastName: "",
    title: ""
  };

  componentDidMount() {
    this.loadPlanners();
  }

  loadPlanners = () => {
    API.getPlanners()
      .then(res => this.setState({ planners: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="themed-container">
        {this.state.planners.map((planner, i) => (
          <Media>
            <Media left href="#">
              <Media src={planner.image} alt="Planner" />
            </Media>
            <Media body>
              <Media heading>
                {planner.firstName + " " + planner.lastName}
              </Media>
              <p>{planner.title}</p>
              <p>Phone number: {planner.phoneNumber}</p>
              <p>Location: {planner.city + ", " + planner.state}</p>
              <p>Specialties: {planner.category}</p>
              <p>
                Bio: Cras sit amet nibh libero, in gravida nulla. Nulla vel
                metus scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
              <p>Pricing: {planner.choices}</p>
            </Media>
          </Media>
        ))}
      </Container>
    );
  }
}
export default profile;
