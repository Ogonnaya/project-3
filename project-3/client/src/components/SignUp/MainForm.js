// MainForm.jsx
import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class MainForm extends Component {
  state = {
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
    priceRange: ""
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

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
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

// ==================================================================

// import React, { Component } from "react";
// // import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import "./style.css";

// class Form extends Component {
//   // Setting the component's initial state
//   state = {
//     // Gather basic information
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     password: "",

//     // Gather profile information
//     city: "",
//     state: "",
//     title: "",
//     image: "",
//     bio: "",
//     category: "",
//     minPrice: "",
//     maxPrice: ""
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     let value = event.target.value;
//     const name = event.target.name;

//     if (name === "password") {
//       value = value.substring(0, 15);
//     }
//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.firstName || !this.state.lastName) {
//       alert("Fill out your first and last name please!");
//     } else if (!this.state.phoneNumber) {
//       alert("Please enter a phone number");
//     } else if (this.state.password.length < 6) {
//       alert(
//         `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
//       );
//     } else {
//       alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//     }

//     this.setState({
//       // Gather basic information
//       firstName: "",
//       lastName: "",
//       phoneNumber: "",
//       email: "",
//       password: "",

//       // Gather profile information
//       city: "",
//       state: "",
//       title: "",
//       image: "",
//       bio: "",
//       category: "",
//       minPrice: "",
//       maxPrice: ""
//     });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>
//           Hello {this.state.firstName} {this.state.lastName}
//         </p>
//         <form className="form">
//           <input
//             value={this.state.firstName}
//             name="firstName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="First Name"
//           />
//           <input
//             value={this.state.lastName}
//             name="lastName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="Last Name"
//           />
//           <input
//             value={this.state.password}
//             name="password"
//             onChange={this.handleInputChange}
//             type="password"
//             placeholder="Password"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
