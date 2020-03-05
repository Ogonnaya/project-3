
// MainForm.jsx =================================================================
import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import { register } from "../UserFunctions";

class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      // Gather basic information
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",

      // Gather profile information
      city: "",
      state: "",
      title: "",
      image: "",
      bio: "",
      category: "",
      priceRange: "",
      error: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //   onChange(e) {
  //     this.setState({ [e.target.name]: e.target.value });
  //   }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newPlanner = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      password: this.state.password,
      city: this.state.city,
      state: this.state.state,
      title: this.state.title,
      image: this.state.image,
      bio: this.state.bio,
      category: this.state.category,
      priceRange: this.state.priceRange
    };

    register(newPlanner).then(res => {
      this.props.history.push(`/login`);
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  render() {
    const { step } = this.state;
    const {
      // Gather basic information
      firstName,
      lastName,
      phoneNumber,
      email,
      password,

      // Gather profile information
      city,
      state,
      title,
      image,
      bio,
      category,
      priceRange
    } = this.state;
    const values = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      city,
      state,
      title,
      image,
      bio,
      category,
      priceRange
    };
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;

      //   default:
      //     return <Success />;
    }
  }
}

export default MainForm;
