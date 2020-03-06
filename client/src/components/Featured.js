import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

class Featured extends Component {
  render() {
    return (
      <div>
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Exclusive Vendors</h1>
              <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </Container>
          </Jumbotron>
        </div>
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">WELCOME</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
