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

const Customer = props => {
  return (
    <Row>
      <Col sm="12">
        <Card body>
          <CardTitle>Customer Sign In</CardTitle>
          <Form>
            <FormGroup>
              <Label for="customerEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="customerEmail"
                placeholder="Enter your email address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="customerPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="customerPassword"
                placeholder="Enter your password"
              />
            </FormGroup>
          </Form>
          <Button>Sign In</Button>
          <Button color="link">Plan my event</Button>
        </Card>
      </Col>
    </Row>
  );
};

<<<<<<< HEAD
export default Customer;
=======
export default Customer;
>>>>>>> 8e553aa2b849f6df4a890a342da02f2c9e1cff37
