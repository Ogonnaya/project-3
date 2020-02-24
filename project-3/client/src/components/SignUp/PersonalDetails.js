// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
// import { throws } from "assert";

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <h1 className="text-center">Enter Personal Details</h1>
        {/* <FormGroup>
          <Label>City</Label>
          <Input
            placeholder="City"
            onChange={this.props.handleChange("city")}
            defaultValue={values.city}
          />
        </FormGroup> */}
        <FormGroup>
          <Label>Location</Label>
          <Input
            placeholder="City"
            onChange={this.props.handleChange("city")}
            defaultValue={values.city}
          />

          {/* <Label for="state">State</Label> */}
          <Input
            type="select"
            name="select"
            id="state"
            onChange={this.props.handleChange("state")}
            defaultValue={values.state}
          >
            <option value="" selected="selected">
              Select a State
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="select"
            name="select"
            id="title"
            onChange={this.props.handleChange("title")}
            defaultValue={values.title}
          >
            <option value="" selected="selected">
              Select a title
            </option>
            <option>Caterer</option>
            <option>Decorator</option>
            <option>DJ</option>
            <option>Event Planner</option>
            <option>Host</option>
            <option>Photographer</option>
            <option>Security</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="bio">Bio</Label>
          <Input
            type="textarea"
            name="text"
            id="bio"
            placeholder="Tell us about yourself"
            onChange={this.props.handleChange("bio")}
            defaultValue={values.bio}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="category">Types of Events</Label>
          <Input
            type="select"
            name="selectMulti"
            id="category"
            onChange={this.props.handleChange("category")}
            defaultValue={values.category}
            multiple
          >
            <option>Birthday Parties</option>
            <option>Charity Events</option>
            <option>Corporate Event</option>
            <option>Funerals</option>
            <option>Weddings</option>
          </Input>
        </FormGroup> */}
        <div>
          <Label for="category">Types of Events</Label>
        </div>
        <FormGroup check inline>
          <Label check>
            <Input
              type="checkbox"
              name="category"
              id="birthday"
              value="birthday"
              onChange={this.props.handleChange("category")}
              defaultValue={values.category}
            />
            Birthday Parties
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input
              type="checkbox"
              name="category"
              id="charity"
              value="charity"
              onChange={this.props.handleChange("category")}
              defaultValue={values.category}
            />{" "}
            Charity Events
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input
              type="checkbox"
              name="category"
              id="corporate"
              value="corporate"
              onChange={this.props.handleChange("category")}
              defaultValue={values.category}
            />{" "}
            Corporate Events
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input
              type="checkbox"
              name="category"
              id="funeral"
              value="funeral"
              onChange={this.props.handleChange("category")}
              defaultValue={values.category}
            />{" "}
            Funerals
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input
              type="checkbox"
              name="category"
              id="weddings"
              value="weddingd"
              onChange={this.props.handleChange("category")}
              defaultValue={values.category}
            />{" "}
            Weddings
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>Price Range</Label>
          <Input
            placeholder="Min Price"
            onChange={this.props.handleChange("minPrice")}
            defaultValue={values.minPrice}
          />
          <Input
            placeholder="Max Price"
            onChange={this.props.handleChange("maxPrice")}
            defaultValue={values.maxPrice}
          />
        </FormGroup>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default PersonalDetails;
