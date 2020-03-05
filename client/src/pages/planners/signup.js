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

// // ===============================================================
// import React from "react";
// import * as Survey from "survey-react";
// import "survey-react/survey.css";

// class SignUp extends React.Component {
//   json = {
//     title: "Become a Vendor",
//     pages: [
//       {
//         title: "What's your name?",
//         popupdescription: "Tell us about yourself",
//         questions: [
//           {
//             name: "firstName",
//             type: "text",
//             title: "Please enter your First Name:",
//             placeHolder: "Jon",
//             isRequired: true
//           },
//           {
//             name: "lastName",
//             type: "text",
//             title: "Please enter your Last Name:",
//             placeHolder: "Snow",
//             isRequired: true
//           },
//           {
//             name: "phoneNumber",
//             type: "text",
//             inputType: "number",
//             title: "Your phone number:",
//             placeHolder: "(123)-456-7890",
//             isRequired: true,
//             validators: [
//               {
//                 type: "number"
//               }
//             ]
//           },
//           {
//             name: "email",
//             type: "text",
//             inputType: "email",
//             title: "Your e-mail:",
//             placeHolder: "jon.snow@nightwatch.org",
//             isRequired: true,
//             validators: [
//               {
//                 type: "email"
//               }
//             ]
//           },
//           {
//             name: "password",
//             type: "text",
//             inputType: "password",
//             title: "Password",
//             placeHolder: "Enter a password for your account",
//             isRequired: true
//             // validators: [
//             //   {
//             //     type: "password"
//             //   }
//             // ]
//           }
//         ]
//       },
//       {
//         title: "What type of vendor are you?",
//         popupdescription:
//           "Select all programming languages you have been using for the last six months.",
//         questions: [
//           {
//             type: "dropdown",
//             name: "Vendor",
//             title: "What do you do?",
//             popupdescription: "",
//             isRequired: true,
//             colCount: 0,
//             choices: [
//               "Caterer",
//               "Decorator",
//               "DJ",
//               "Event Planner",
//               "Host",
//               "Photographer",
//               "Security"
//             ]
//           },
//           {
//             type: "comment",
//             name: "bio",
//             title: "Please tell us a little more about what you do.",
//             isRequired: true,
//             validators: [
//               {
//                 type: "text",
//                 minLength: 20
//               }
//             ]
//           }
//         ]
//       },
//       {
//         title: "Where are you located?",
//         popupdescription:
//           "We will not share this information with any third-party organization.",
//         questions: [
//           {
//             type: "text",
//             name: "City",
//             title: "City",
//             popupdescription:
//               "Please, make sure you do not misspell the city name"
//           },
//           {
//             type: "dropdown",
//             name: "State",
//             title: "State",
//             popupdescription: "Select state where you are located",
//             isRequired: true,
//             choices: [
//               "Alabama",
//               "Alaska",
//               "American Samoa",
//               "Arizona",
//               "Arkansas",
//               "California",
//               "Colorado",
//               "Connecticut",
//               "Delaware",
//               "District of Columbia",
//               "Federated States of Micronesia",
//               "Florida",
//               "Georgia",
//               "Guam",
//               "Hawaii",
//               "Idaho",
//               "Illinois",
//               "Indiana",
//               "Iowa",
//               "Kansas",
//               "Kentucky",
//               "Louisiana",
//               "Maine",
//               "Marshall Islands",
//               "Maryland",
//               "Massachusetts",
//               "Michigan",
//               "Minnesota",
//               "Mississippi",
//               "Missouri",
//               "Montana",
//               "Nebraska",
//               "Nevada",
//               "New Hampshire",
//               "New Jersey",
//               "New Mexico",
//               "New York",
//               "North Carolina",
//               "North Dakota",
//               "Northern Mariana Islands",
//               "Ohio",
//               "Oklahoma",
//               "Oregon",
//               "Palau",
//               "Pennsylvania",
//               "Puerto Rico",
//               "Rhode Island",
//               "South Carolina",
//               "South Dakota",
//               "Tennessee",
//               "Texas",
//               "Utah",
//               "Vermont",
//               "Virgin Island",
//               "Virginia",
//               "Washington",
//               "West Virginia",
//               "Wisconsin",
//               "Wyoming"
//             ]
//           }
//         ]
//       },
//       {
//         title: "What types of event do you work on?",
//         popupdescription: "Select event types you work on?",
//         questions: [
//           {
//             type: "checkbox",
//             name: "Type",
//             title: "Event",
//             hasOther: true,
//             isRequired: true,
//             popupdescription:
//               "Select event type closest to description of desired event",
//             choices: [
//               "Party (Birthday, Sweet 16, Quinceañera, Bar Mitzvah, etc.)",
//               "Wedding",
//               "Charity",
//               "Corporate",
//               "Funeral"
//             ]
//           }
//         ]
//       },
//       {
//         title: "What's your price range?",
//         popupdescription:
//           "We will not share this information with any third-party organization.",
//         questions: [
//           {
//             type: "dropdown",
//             name: "priceRange",
//             title: "Price Range",
//             popupdescription: "Tell us what you charge.",
//             isRequired: true,
//             choices: [
//               "Under $1000",
//               "$1000 to $5000",
//               "$5000 to $10,000",
//               "$10,000 to $25,000",
//               "$25,000 to $50,000",
//               "$50,000 to $75,000",
//               "Over $75000"
//             ]
//           }
//         ]
//       }
//     ]
//   };

//   //Define a callback methods on survey complete
//   onComplete(survey, options) {
//     //Write survey results into database
//     console.log("Survey results: " + JSON.stringify(survey.data));
//   }
//   render() {
//     var model = new Survey.Model(this.json);
//     return (
//       <div className="App">
//         <Survey.Survey model={model} onComplete={this.onComplete} />
//       </div>
//     );
//   }
// }

// export default SignUp;
