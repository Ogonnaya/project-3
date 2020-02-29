import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Button,
  CardTitle,
  Row,
  Col
} from "reactstrap";

const Planner = props => {
  return (
    <Row>
      <Col sm="12">
        <Card body>
          <CardTitle>Vendor Sign In</CardTitle>
          <Form>
            <FormGroup>
              <Label for="vendorEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="vendorEmail"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="vendorPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="vendorPassword"
                placeholder="Enter your password"
              />
            </FormGroup>
          </Form>
          <Button>Sign In</Button>
          <Button color="link">Become a Vendor</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Planner;
