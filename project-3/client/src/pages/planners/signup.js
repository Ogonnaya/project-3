// app.js
import React, { Component } from "react";
import MainForm from "../../components/SignUp/MainForm";
import { Container } from "reactstrap";

class SignUp extends Component {
  render() {
    return (
      <Container className="text-center">
        <MainForm />
      </Container>
    );
  }
}

export default SignUp;
