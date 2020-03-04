//require db
// import db from ("../models")
const db = require("../models/planners");

module.exports = {
  findAllSaved: (req, res) => {
    db.Planners.find()
      .then(function (result) {
        res.json(result);
      })
      .catch(err => res.status(422).json(err));
  },

  findById: (req, res) => {
    db.Planners.findById(req.params.id)
      .then(function (result) {
        res.json(result);
      })
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.Planners.create({
      //Basic Information
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,

      //Profile Information
      city: req.body.city,
      state: req.body.state,
      title: req.body.title,
      image: req.body.image, //How do we allow users to upload and store images in the database?
      bio: req.body.bio,
      category: req.body.category, //How do we store multiple selections?
      priceRange: req.body.priceRange,
      key: req.body.key
    }).then(res.end());
  }
  // remove: (req, res) => {
  //     db.SavedBooks
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
