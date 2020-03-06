const express = require("express");
const planners = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Planner = require("../models/Planner");
planners.use(cors());

process.env.SECRET_KEY = "secret";

planners.post("/register", (req, res) => {
  const plannerData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state,
    title: req.body.title,
    image: req.body.image,
    bio: req.body.bio,
    category: req.body.category,
    priceRange: req.body.priceRange
  };

  Planner.findOne({
    email: req.body.email
  })
    .then(planner => {
      if (!planner) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          plannerData.password = hash;
          Planner.create(plannerData)
            .then(planner => {
              res.json({ status: planner.email + "Registered!" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "Planner already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

planners.post("/login", (req, res) => {
  Planner.findOne({
    email: req.body.email
  })
    .then(planner => {
      if (planner) {
        if (bcrypt.compareSync(req.body.password, planner.password)) {
          // Passwords match
          const payload = {
            _id: planner._id,
            firstName: planner.firstName,
            lastName: planner.lastName,
            phoneNumber: planner.phoneNumber,
            email: planner.email,

            city: planner.city,
            state: planner.state,
            title: planner.title,
            image: planner.image, //How do we allow planners to upload and store images in the database?
            bio: planner.bio,
            category: planner.category, //Array Mongoose //How do we store multiple selections?
            priceRange: planner.priceRange
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          // Passwords don't match
          res.json({ error: "Planner does not exist" });
        }
      } else {
        res.json({ error: "Planner does not exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

planners.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Planner.findOne({
    _id: decoded._id
  })
    .then(planner => {
      if (planner) {
        res.json(planner);
      } else {
        res.send("Planner does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = planners;
