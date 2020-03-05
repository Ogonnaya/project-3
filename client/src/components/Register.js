import React, { Component } from "react";
import { register } from "./UserFunctions";
import { FormGroup, Label, Input } from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      city: "",
      state: "",
      title: "",
      image: "",
      bio: "",
      category: "",
      priceRange: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
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

    register(newUser).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Become a vendor</h1>
              <h4 className="text-center">
                To get started, we need some basic information.
              </h4>
              <div className="form-group">
                <Label htmlFor="name">What's your first name?</Label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="name">and your last name?</Label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="phoneNumber">
                  How can our customers reach you?
                </Label>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="email">What's your email address?</Label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="password">
                  Enter a password to sign into your account with.
                </Label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <FormGroup>
                <h4 className="text-center">
                  Tell us a little bit about what you do.
                </h4>
                <Label htmlFor="city">Where are you located?</Label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                {/* <Label htmlFor="state">State</Label> */}
                <Input
                  type="select"
                  className="form-control"
                  name="state"
                  placeholder="State"
                  value={this.state.state}
                  onChange={this.onChange}
                >
                  <option value="selected">Select a State</option>
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
                <Label htmlFor="title">What do you do?</Label>
                <Input
                  type="select"
                  className="form-control"
                  name="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.onChange}
                >
                  <option value="selected">Select a title</option>
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
                <Label htmlFor="image">Add your picture</Label>
                <Input
                  type="text"
                  className="form-control"
                  name="image"
                  placeholder="Image"
                  value={this.state.image}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="bio">
                  Give a brief description of what you do.
                </Label>
                <Input
                  type="textarea"
                  className="form-control"
                  name="bio"
                  placeholder="Description"
                  value={this.state.bio}
                  onChange={this.onChange}
                />
              </FormGroup>
              <div>
                <div>
                  <Label htmlFor="category">Type of Events</Label>
                </div>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="category"
                      value={this.state.category}
                      onChange={this.onChange}
                    />
                    Party
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="category"
                      value={this.state.category}
                      onChange={this.onChange}
                    />
                    Charity Events
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="category"
                      value={this.state.category}
                      onChange={this.onChange}
                    />
                    Corporate Events
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="category"
                      value={this.state.category}
                      onChange={this.onChange}
                    />
                    Funerals
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="category"
                      value={this.state.category}
                      onChange={this.onChange}
                    />
                    Weddings
                  </Label>
                </FormGroup>
              </div>
              <br />
              <FormGroup>
                <Label htmlFor="priceRange">
                  What's your estimated price range?
                </Label>
                <Input
                  type="select"
                  className="form-control"
                  name="priceRange"
                  placeholder="Price Range"
                  value={this.state.priceRange}
                  onChange={this.onChange}
                >
                  <option value="selected">Select a price range</option>
                  <option>Under $1000</option>
                  <option>$1000 to $5000</option>
                  <option>$5000 to $10,000</option>
                  <option>$10,000 to $25,000</option>
                  <option>$25,000 to $50,000</option>
                  <option>$50,000 to $75,000</option>
                  <option>Over $75000</option>
                </Input>
              </FormGroup>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

