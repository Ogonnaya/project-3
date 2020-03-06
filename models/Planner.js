const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlannerSchema = new Schema({
  //Basic Information
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },

  //Profile Information
  city: { type: String, required: true },
  state: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: false }, //How do we allow users to upload and store images in the database?
  bio: { type: String, required: false },
  category: { type: Array, required: true }, //Array Mongoose //How do we store multiple selections?
  priceRange: { type: String, required: true }
});

const Planner = mongoose.model("planners", PlannerSchema);

module.exports = Planner;
