
// //Add a property a text property into all questions types and into page
// Survey
//     .Serializer
//     .addProperty("question", "popupdescription:text");
// Survey
//     .Serializer
//     .addProperty("page", "popupdescription:text");
// function showDescription(element) {
//     document
//         .getElementById("questionDescriptionText")
//         .innerHTML = element.popupdescription;
//     $("#questionDescriptionPopup").modal();
// }

// Survey
//     .StylesManager
//     .applyTheme("modern");

// var json = {
//     title: "Event Planner Survey.",
//     pages: [
//         {
//             "elements": [
//                 {
//                     "type": "panel",
//                     "elements": [
//                         {
//                             "type": "html",
//                             "name": "income_intro",
//                             "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Kollab Your Next Event!              </h1>    <div class='intro__body wysiwyg'>       <p>In this section, you will be asked some of the details of your event to put your optimal vendor team together. Let's KOLLAB!</p>  </div> </article>"
//                         }
//                     ],
//                     "name": "panel1"
//                 }
//             ],
//             "name": "page0"
//         },

//         {
//             title: "What type of event are you planning?",
//             popupdescription: "Select event type you plan on having?",
//             questions: [
//                 {
//                     type: "checkbox",
//                     name: "Type",
//                     title: "Event",
//                     hasOther: true,
//                     isRequired: true,
//                     popupdescription: "Select event type closest to description of desired event",
//                     choices: ["Party (Birthday, Sweet 16, Quinceañera, Bar Mitzvah, etc.)", "Wedding", "Charity", "Corporate", "Funeral"]
//                 }
//             ]
//         }, {
//             title: "What type of vendor(s) do you need for your event?",
//             popupdescription: "Select all programming languages you have been using for the last six months.",
//             questions: [
//                 {
//                     type: "checkbox",
//                     name: "Vendors",
//                     title: "Please select ALL that apply from the list",
//                     popupdescription: "Select vendor(s) you will need for the event",
//                     isRequired: true,
//                     choices: [
//                         "Event Planner", "Decorator", "Caterer", "Photographer", "DJ", "Host"
//                     ]
//                 }
//             ]
//         }, {
//             title: "What locale would you like to have your event?",
//             popupdescription: "We will not share this information with any third-party organization.",
//             questions: [
//                 {
//                     type: "dropdown",
//                     name: "State",
//                     title: "State you would like to have event",
//                     popupdescription: "Select state you wish to hold your event",
//                     isRequired: true,
//                     choices: [
//                         'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
//                     ]
//                 }, {
//                     type: "text",
//                     name: "City",
//                     title: "Name of city you would like to have event",
//                     popupdescription: "Please, make sure you do not misspell the city name"
//                 }
//             ]
//         }
//     ]
// };

// window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

// survey
//     .onAfterRenderQuestion
//     .add(function (survey, options) {
//         //Return if there is no description to show in popup
//         if (!options.question.popupdescription)
//             return;

//         //Add a button;
//         var btn = document.createElement("button");
//         btn.type = "button";
//         btn.className = "btn btn-info btn-xs";

//         btn.style.position = "absolute";
//         btn.style.marginLeft = "20px"

//         btn.innerHTML = "More Info";
//         var question = options.question;
//         btn.onclick = function () {
//             showDescription(question);
//         }
//         var header = options
//             .htmlElement
//             .querySelector("h5");
//         var span = document.createElement("span");
//         span.innerHTML = "  ";
//         header.appendChild(span);
//         header.appendChild(btn);
//     });

// survey
//     .onAfterRenderPage
//     .add(function (survey, options) {
//         //Return if there is no description to show in popup
//         if (!options.page.popupdescription)
//             return;

//         //Add a button;
//         var btn = document.createElement("button");
//         btn.type = "button";
//         btn.className = "btn btn-info btn-xs";

//         btn.style.position = "absolute";
//         btn.style.marginLeft = "20px"

//         btn.innerHTML = "More Info";
//         btn.onclick = function () {
//             showDescription(survey.currentPage);
//         }
//         var header = options
//             .htmlElement
//             .querySelector("h4");
//         var span = document.createElement("span");
//         span.innerHTML = "  ";
//         header.appendChild(span);
//         header.appendChild(btn);
//     });
// ReactDOM.render(<Survey.Survey model={survey} />, document.getElementById("surveyElement"));

// function animate(animitionType, duration) {
//     if (!duration)
//         duration = 1000;
//     var element = document.getElementById("surveyElement");
//     $(element).velocity(animitionType, { duration: duration });
// }

// var doAnimantion = true;
// survey
//     .onCurrentPageChanging
//     .add(function (sender, options) {
//         if (!doAnimantion)
//             return;
//         options.allowChanging = false;
//         setTimeout(function () {
//             doAnimantion = false;
//             sender.currentPage = options.newCurrentPage;
//             doAnimantion = true;
//         }, 500);
//         animate("slideUp", 500);
//     });
// survey
//     .onCurrentPageChanged
//     .add(function (sender) {
//         animate("slideDown", 500);
//     });
// survey
//     .onCompleting
//     .add(function (sender, options) {
//         if (!doAnimantion)
//             return;
//         options.allowComplete = false;
//         setTimeout(function () {
//             doAnimantion = false;
//             sender.doComplete();
//             doAnimantion = true;
//         }, 500);
//         animate("slideUp", 500);
//     });
// animate("slideDown", 1000);